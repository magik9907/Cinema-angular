import { Request, Response, IRoute } from 'express';
import { find } from 'tslint/lib/utils';
import { SeansModel, SeansSchema } from '../../models/db/mongodb/schema/seans';
import { PageControll } from '../PageController';
import mongoose from 'mongoose';
import SeansId from './seansIdControll';
import SeansPopular from './SeansPopular';
import SeansDate from './SeansDate';
import SeansNow from './SeansNow';

export default class Seans extends PageControll {
  path = '/seans';
  route: IRoute = this.router.route(this.path);

  init() {
    this.get();
    this.post();
    this.router.use(this.path, new SeansId().init());
    this.router.use(this.path, new SeansPopular().init());
    this.router.use(this.path, new SeansDate().init());
    this.router.use(this.path, new SeansNow().init());
    return this.router;
  }

  /**
   * @url /api/seans
   *
   * @returns Array<Seans>
   */

  get() {
    this.route.get(
      (
        req: Request<
          any,
          any,
          any,
          {
            date: string;
            time: string;
          }
        >,
        res: Response
      ) => {
        const { date, time } = req.query;
        console.log('seans control ', date, time);
        const $match = {
          $or: [
            {
              $and: [
                {
                  'date.date': {
                    $eq: date,
                  },
                },
                {
                  'date.time': {
                    $gte: time,
                  },
                },
              ],
            },
            {
              'date.date': {
                $gt: date,
              },
            },
          ],
        };
        console.log('Seans List Get. ');
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
            $unwind: {
              path: '$film',
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
              _id: `$date.date`,
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
          .sort('_id').limit(10)
          .exec((err, result) => {
            if (err) {
              console.log(err);
              res.statusCode = 400;
              res.send({ error: 'Server error', data: Date.now });
            } else {
              console.log(JSON.stringify(result) || 404);
              res.send(result || 404);
            }
          });
      }
    );
  }

  /**
   * @url /api/seans
   * 
   * @example {
    "film":"6186c3e169b9d028bb3c8cb1", // <- id
    "hall":"618900741cfb91cc68c27bac", // <- id
    "date":{
        "date":"2021-01-10",
        "time":"12:20"
    }
  }
   */

  post() {
    this.route.post(async (req: Request, res: Response) => {
      const body: Seans = req.body;
      console.log('Seans List POST');
      console.log(body);
      if (body) {
        const doc = new SeansModel(body);
        if (doc.validateSync()?.errors) {
          console.log(doc.errors);
          res.statusCode = 404;
          res.send(doc.errors);
        } else {
          await doc.save();
          res.statusCode = 200;
          res.send(doc);
        }
      } else {
        res.statusCode = 400;
        res.statusMessage = 'No valid body';
        res.send();
      }
    });
  }
}
