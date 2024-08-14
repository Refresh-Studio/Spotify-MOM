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
    address,
    lineup
  }
}`
  );
}

export async function getArtistFilters() {
  return client.fetch(
    groq`*[_type == "artistFilter"] {
  _id,
  "slug": slug.current,
  title
} | order(title asc)`
  );
}

export async function getEventFilters() {
  return client.fetch(
    groq`*[_type == "eventFilter"] {
  _id,
  "slug": slug.current,
  title
} | order(title asc)`
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
    "tags": tags[]->slug.current,
    free,
    address,
    description,
    quicketEventId,
    lineup
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
