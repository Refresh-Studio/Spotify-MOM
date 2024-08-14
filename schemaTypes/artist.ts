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
      name: 'filterTags',
      title: 'Filter Tags',
      type: 'array',
      validation: (rule) => rule.required(),
      of: [{ type: 'reference', to: [{ type: 'artistFilter' }] }]
    })
  ]
};

export default artist;
