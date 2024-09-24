import { defineField } from 'sanity';

const artist = {
  name: 'artist',
  title: 'Artist',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Spotify Profile Slug',
      type: 'slug',
      options: {
        source: 'url',
        slugify: (input) => {
          const lastPart = input.split('/').filter(Boolean).pop();

          return lastPart ?? ''.toLowerCase();
        }
      }
    }),
    defineField({
      name: 'url',
      title: 'Spotify Profile URL',
      type: 'url',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string'
    }),
    defineField({
      name: 'followers',
      title: 'Followers',
      type: 'number'
    }),
    defineField({
      name: 'image',
      title: 'Image URL',
      type: 'string'
    }),
    defineField({
      name: 'spotlight',
      title: 'Spotlight',
      type: 'boolean'
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text'
    }),
    defineField({
      name: 'genres',
      title: 'Genres',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'filterTags',
      title: 'Filter Tags',
      type: 'array',
      validation: (rule) => rule.required(),
      of: [{ type: 'reference', to: [{ type: 'artistFilter' }] }]
    })
  ]
};

export default artist;
