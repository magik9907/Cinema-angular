import { model, Schema } from 'mongoose';

interface IFilm {
  _id: string;
  title: string;
  length: number;
  director?: string;
  isDelete?: boolean;
}
export class Film implements IFilm {
  _id: string = '';
  title: string = '';
  length: number = 0;
  director: string = '';
  isDelete: boolean = false;
}
