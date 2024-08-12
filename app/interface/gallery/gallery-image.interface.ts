import { ApiType } from '../api-type.interface';

export interface GalleryImage extends ApiType {
  _id: string;
  name: string;
  src: string;
  tags: string[];
}
