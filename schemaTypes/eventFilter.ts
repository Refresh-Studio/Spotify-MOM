import { defineField } from 'sanity';

const eventFilter = {
  name: 'eventFilter',
  title: 'Event Filter',
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
    })
  ]
};

export default eventFilter;
