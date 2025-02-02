import { defineField } from 'sanity';

const album = {
  name: 'album',
  title: 'Album',
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
      name: 'event',
      title: 'Event',
      type: 'reference',
      to: [{ type: 'event' }]
    }),
    defineField({
      name: 'coverImage',
      title: 'Album Cover Image',
      type: 'reference',
      to: [{ type: 'galleryImage' }]
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }]
    }),
    defineField({
      name: 'filterTags',
      title: 'Album Filter Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'galleryFilter' }] }]
    })
  ]
};

export default album;
