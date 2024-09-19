import { ApiType } from '../api-type.interface';

export interface CarouselImage extends ApiType {
  _id: string;
  name: string;
  src: string;
}
