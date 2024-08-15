import { ApiType } from '../api-type.interface';

import { EventItem } from './event-item.interface';

export interface EventList extends ApiType {
  _id: string;
  slug: string;
  title: string;
  events: EventItem[];
}
