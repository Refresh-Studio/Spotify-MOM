import { ApiType } from '../api-type.interface';

export interface Filter extends ApiType {
  _id: string;
  slug: string;
  title: string;
}
