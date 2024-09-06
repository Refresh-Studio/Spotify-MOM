import { ApiType } from '../api-type.interface';

export interface AlbumImage extends ApiType {
  _id: string;
  name: string;
  src: string;
}
