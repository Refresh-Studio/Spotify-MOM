import { ApiType } from '../api-type.interface';

interface TextBlock {
  children: { text: string };
}

export interface EventItem extends ApiType {
  _id: string;
  slug: string;
  name: string;
  description: TextBlock[];
  address: string;
  tag: string[];
  free: boolean;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  quicketEventId: number;
}
