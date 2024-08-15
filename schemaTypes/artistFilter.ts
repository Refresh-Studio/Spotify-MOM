import { defineField } from 'sanity';

const artistFilter = {
  name: 'artistFilter',
  title: 'Artist Filter',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (rule) => rule.required(),
      options: {
        source: 'title'
      }
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      initialValue: 0,
      validation: (rule) => rule.required()
    })
  ]
};

export default artistFilter;
