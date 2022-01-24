import { Request, Response, IRoute } from 'express';
import { TicketModel } from '../../models/db/mongodb/schema/ticket';
import { Ticket } from '../../models/Ticket';
import { PageControll } from '../PageController';
import mongoose from 'mongoose';

export default class TicketSeans extends PageControll {
  path = '/seans';
  route: IRoute = this.router.route(this.path);
  init() {
    this.get();
    return this.router;
  }

  get() {
    this.route.get(
      (
        req: Request<
          any,
          any,
          any,
          {
            seans: String;
          }
        >,
        res: Response
      ) => {
        console.log(req.query);
        const { seans } = req.query;
        let objid = new mongoose.Types.ObjectId(seans as string);
        TicketModel.aggregate([
          {
            $match: {
              seans: { $eq: objid },
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
      }
    );
  }
}
