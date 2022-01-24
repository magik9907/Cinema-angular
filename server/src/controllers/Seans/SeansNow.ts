import { Request, Response, IRoute } from 'express';
import mongoose from 'mongoose';
import { SeansModel } from '../../models/db/mongodb/schema/seans';
import { TicketModel } from '../../models/db/mongodb/schema/ticket';
import { PageControll } from '../PageController';

/**
 * @path /api/seans/popular?id=[seansId]
 */

export default class SeansNow extends PageControll {
  path = '/now';
  route: IRoute = this.router.route(this.path);

  init() {
    this.get();
    return this.router;
  }

  get() {
    this.route.get((req: Request, res: Response) => {
      const { sort, now } = req.query;
      const date = new Date();
      const fullYear = date.getFullYear();
      const minutes = date.getMinutes();
      const hour = date.getHours();
      const month = date.getMonth() + 1;
      const days = date.getDate();

      const $match = {
        $or: [
          {
            $and: [
              {
                'date.date': {
                  $eq: `${fullYear}-${month < 10 ? `0${month}` : month}-${
                    days < 10 ? `0${days}` : days
                  }`,
                },
              },
              {
                'date.time': {
                  $gte: `${hour < 10 ? `0${hour}` : hour}:${
                    minutes < 10 ? `0${minutes}` : minutes
                  }`,
                },
              },
            ],
          },
          {
            'date.date': {
              $gt: `${fullYear}-${month < 10 ? `0${month}` : month}-${
                days < 10 ? `0${days}` : days
              }`,
            },
          },
        ],
      };
      console.log(JSON.stringify($match));
      SeansModel.aggregate([
        { $match: { isDelete: false } },
        { $match },
        {
          $lookup: {
            from: 'films',
            localField: 'film',
            foreignField: '_id',
            as: 'film',
          },
        },
        {
          $match: {
            'film.isDelete': { $eq: false },
          },
        },
        {
          $lookup: {
            from: 'halls',
            localField: 'hall',
            foreignField: '_id',
            as: 'hall',
          },
        },
        {
          $group: {
            _id: `$${sort || 'date.date'}`,
            seans: { $push: '$$ROOT' },
          },
        },
        {
          $sort: {
            _id: 1,
          },
        },
        {
          $unwind: {
            path: '$seans',
          },
        },
        {
          $sort: {
            'seans.date.time': 1,
          },
        },
        {
          $group: {
            _id: '$_id',
            seans: {
              $push: '$seans',
            },
          },
        },
      ])
        .sort('_id')
        .exec((err, result) => {
          if (err) {
            console.log(err);
            res.statusCode = 400;
            res.send({ error: 'Server error', data: Date.now });
          } else {
            console.log(result || 404);
            res.send(result || 404);
          }
        });
    });
  }
}
