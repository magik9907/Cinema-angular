import { Request, Response, IRoute } from 'express';
import mongoose from 'mongoose';
import { SeansModel } from '../../models/db/mongodb/schema/seans';
import { TicketModel } from '../../models/db/mongodb/schema/ticket';
import { PageControll } from '../PageController';

export default class SeansDate extends PageControll {
  path = '/date';
  route: IRoute = this.router.route(this.path);

  init() {
    this.get();
    return this.router;
  }

  get() {
    this.route.get((req: Request, res: Response) => {
      const { startDate, endDate, startTime, endTime, id } = req.query;
      let find = {},
        match = {};
      console.log(startDate, endDate, startTime, endTime, id);
      if (id) {
        let objid = new mongoose.Types.ObjectId((id as string) || '');
        find = {
          _id: { $ne: objid },
        };
        match = { _id: { $ne: objid } };
      }
      SeansModel.find({
        ...find,
      })
        .populate({
          path: 'hall',
          match,
        })
        .find({
          $and: [
            {
              $or: [
                {
                  $and: [
                    { 'date.date': { $eq: startDate } },
                    { 'date.time': { $gte: startTime } },
                    { 'date.date': { $eq: endDate } },
                    { 'date.time': { $lte: endTime } },
                  ],
                },
                {
                  $and: [
                    { 'endDate.date': { $eq: startDate } },
                    { 'endDate.time': { $gte: startTime } },
                    { 'endDate.date': { $eq: endDate } },
                    { 'endDate.time': { $lte: endTime } },
                  ],
                },
              ],
            },
          ],
        })
        .exec((err, result) => {
          if (err) {
            console.log(err);
            res.statusCode = 400;
            res.send({ error: 'Server error', data: Date.now });
          } else {
            console.log('seans Get by date', id, JSON.stringify(result) || 404);
            res.send(result || 404);
          }
        });
    });
  }
}
