import { defineField } from 'sanity';

const artist = {
  name: 'artist',
  title: 'Artist',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (rule) => rule.required(),
      options: {
        source: 'name'
      }
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'followers',
      title: 'Followers',
      type: 'number',
      initialValue: 0,
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'url',
      title: 'Spotify Profile URL',
      type: 'url',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'musicTags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'filterTags',
      title: 'Filter Tags',
      type: 'array',
      validation: (rule) => rule.required(),
      of: [{ type: 'string' }],
      options: {
        list: ['build-up', 'thursday', 'friday', 'saturday', 'sunday']
      }
    })
  ]
};

export default artist;
