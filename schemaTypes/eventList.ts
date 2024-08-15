import { defineField } from 'sanity';

const eventList = {
  name: 'eventList',
  title: 'Event List',
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
      name: 'events',
      title: 'Events',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'event' }] }]
    })
  ]
};

export default eventList;
