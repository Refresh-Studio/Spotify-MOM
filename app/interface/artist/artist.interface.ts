import { ApiType } from '../api-type.interface';

export interface Artist extends ApiType {
  _id: number;
  slug: string;
  name: string;
  followers: number;
  url: string;
  image: string;
  musicTags: string[];
  genres: string[];
  filterTags: string[];
  spotlight: boolean;
  bio: string;
}
