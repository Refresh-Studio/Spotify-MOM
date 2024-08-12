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

export async function getArtists() {
  return client.fetch(
    groq`*[_type == "artist"] {
    _id,
    "slug": slug.current,
    name,
    followers,
    musicTags,
    filterTags,
    url,
    "image": image.asset->url
}`
  );
}

export async function getImages() {
  return client.fetch(
    groq`*[_type == "galleryImage"] {
    _id,
    name,
    tags,
    "src": image.asset->url
}`
  );
}
