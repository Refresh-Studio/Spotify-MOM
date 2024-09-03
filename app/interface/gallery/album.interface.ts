import { ApiType } from '../api-type.interface';

import { EventItem } from '../event/event-item.interface';
import { GalleryImage } from './gallery-image.interface';

export interface Album extends ApiType {
  _id: string;
  slug: string;
  name: string;
  event: EventItem;
  images: GalleryImage[];
}
