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
    calendarStartDate,
    startDate,
    calendarEndDate,
    endDate,
    startTime,
    endTime,
    free,
    address,
    lineup
  } | order(calendarStartDate asc)
}`
  );
}

export async function getPromotion() {
  return client.fetch(
    groq`*[_type == "promotion"] {
  _id,
  "image": image.asset->url,
  title
}`
  );
}

export async function getArtistFilters() {
  return client.fetch(
    groq`*[_type == "artistFilter"] {
  _id,
  "slug": slug.current,
  title,
  order
} | order(order asc)`
  );
}

export async function getGalleryFilters() {
  return client.fetch(
    groq`*[_type == "galleryFilter"] {
  _id,
  "slug": slug.current,
  title,
  order
} | order(order asc)`
  );
}

export async function getEventFilters() {
  return client.fetch(
    groq`*[_type == "eventFilter"] {
  _id,
  "slug": slug.current,
  title,
  order
} | order(order asc)`
  );
}

export async function getAlbums() {
  return client.fetch(
    groq`*[_type == "album"] {
    _id,
    "slug": slug.current,
    name,
    "filterTags": filterTags[]->slug.current,
    event->{
    _id,
    "slug": slug.current,
    name,
    address
  },
  "coverImage": coverImage->image.asset->url,
  images[]{
    "src": asset->url
  }
}`
  );
}

export async function getAlbum(slug: string) {
  return client.fetch(
    groq`*[_type == "album" && slug.current == "${slug}"] {
    _id,
    "slug": slug.current,
    name,
    event->{
    _id,
    "slug": slug.current,
    name,
    address
  },
  "coverImage": coverImage->image.asset->url,
  images[]{
    "src": asset->url
  }
}[0]`
  );
}

export async function getEvents() {
  return client.fetch(
    groq`*[_type == "event"] {
    _id,
    "slug": slug.current,
    name,
    startDate,
    calendarStartDate,
    endDate,
    calendarEndDate,
    startTime,
    endTime,
    "tags": tags[]->slug.current,
    free,
    address,
    description,
    quicketEventId,
    lineup
} | order(calendarStartDate asc)`
  );
}

export async function getArtists() {
  return client.fetch(
    groq`*[_type == "artist"] {
    _id,
    "slug": slug.current,
    name,
    followers,
    genres,
    "filterTags": filterTags[]->slug.current,
    url,
    image,
    spotlight,
    description
}`
  );
}

export async function getCarouselImages() {
  return client.fetch(
    groq`*[_type == "carouselImage"] {
    _id,
    name,
    "src": image.asset->url
}`
  );
}
