import { EventItem } from '@sentry/types';

import { ApiType } from '../api-type.interface';

export interface EventList extends ApiType {
  _id: string;
  slug: string;
  title: string;
  events: EventItem[];
}
