import { Request, Response, IRoute } from 'express';
import { TicketModel } from '../../models/db/mongodb/schema/ticket';
import { Ticket } from '../../models/Ticket';
import { PageControll } from '../PageController';

export default class TicketDetails extends PageControll {
  path = '/datails';
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
            id: String;
          }
        >,
        res: Response
      ) => {
        const {
          id,
        }: {
          id: String;
        } = req.query;
        console.log(id);
        TicketModel.findById(id, [
          {
            $lookup: {
              from: 'seans',
              localField: 'seans',
              foreignField: '_id',
              as: 'seans',
            },
          },
          { $unwind: '$seans' },
          {
            $lookup: {
              from: 'films',
              localField: 'seans.film',
              foreignField: '_id',
              as: 'seans.film',
            },
          },
          { $unwind: '$seans.film' },
          {
            $lookup: {
              from: 'halls',
              localField: 'seans.hall',
              foreignField: '_id',
              as: 'seans.hall',
            },
          },
          { $unwind: '$seans.hall' },
          {
            $lookup: {
              from: 'discounts',
              localField: 'discount',
              foreignField: '_id',
              as: 'discount',
            },
          },
          { $unwind: '$discount' },
        ]).exec((err, result) => {
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
