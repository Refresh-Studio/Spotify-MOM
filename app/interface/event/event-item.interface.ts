import { ApiType } from '../api-type.interface';

export interface EventItem extends ApiType {
  _id: string;
  slug: string;
  name: string;
  description: string;
  address: string;
  tag: string[];
  free: boolean;
  startDate: Date;
  endDate: Date;
  startTime: string;
  endTime: string;
  quicketEventId: number;
}
