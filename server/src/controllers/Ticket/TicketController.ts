import { Request, Response, IRoute } from 'express';
import { TicketModel } from '../../models/db/mongodb/schema/ticket';
import { PageControll } from '../PageController';
import TicketId from './TicketIdControll';
import TicketDetails from './TicketDetailsControll';
import TicketSeans from './TicketSeansControll';

export default class Ticket extends PageControll {
  path = '/ticket';
  route: IRoute = this.router.route(this.path);

  init() {
    this.get();
    this.post();

    this.router.use(this.path, new TicketId().init());

    this.router.use(this.path, new TicketDetails().init());
    this.router.use(this.path, new TicketSeans().init());

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
        const {
          seans,
        }: {
          seans: String;
        } = req.query;
        TicketModel.aggregate([
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
          {
            $unwind: {
              path: '$discount',
              preserveNullAndEmptyArrays: true,
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

  post() {
    this.route.post(async (req: Request, res: Response) => {
      const body = req.body;
      console.log('TICKET POST');
      console.log(body);
      if (body) {
        const doc = new TicketModel(body);
        await doc.save();
        res.statusCode = 200;
        res.send(doc);
      } else {
        res.statusCode = 400;
        res.statusMessage = 'No valid body';
        res.send();
      }
    });
  }
}
