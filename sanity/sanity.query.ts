import { groq } from 'next-sanity';

import client from './sanity.client';

export async function getEventLists() {
  return client.fetch(
    groq`*[_type == "eventList"] {
  _id,
  "slug": slug.current,
  title,
  events[]->{
    _id,
    "slug": slug.current,
    name,
    startDate,
    endDate,
    startTime,
    endTime,
    free,
    address
  }
}`
  );
}

export async function getEvents() {
  return client.fetch(
    groq`*[_type == "event"] {
    _id,
    "slug": slug.current,
    name,
    startDate,
    endDate,
    startTime,
    endTime,
    tag,
    free,
    address,
    description,
    quicketEventId
}`
  );
}
