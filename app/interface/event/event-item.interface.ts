import { ApiType } from '../api-type.interface';

export interface TextBlock {
  style: string;
  children: { _key: string; text: string; marks: string[] }[];
}

export interface EventItem extends ApiType {
  _id: string;
  slug: string;
  name: string;
  description: TextBlock[];
  address: string;
  lineup: string[];
  tags: string[];
  free: boolean;
  calendarStartDate: string;
  startDate: string;
  calendarEndDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  quicketEventId: string;
}
