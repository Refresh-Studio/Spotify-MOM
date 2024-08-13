import { defineField } from 'sanity';

const event = {
  name: 'event',
  title: 'Event',
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
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'free',
      title: 'Free',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'startTime',
      title: 'Start Time',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'endTime',
      title: 'End Time',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4
    }),
    defineField({
      name: 'quicketEventId',
      title: 'Quicket Event ID',
      type: 'number'
    }),
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'array',
      validation: (rule) => rule.required(),
      of: [{ type: 'string' }],
      options: {
        list: ['build-up', 'thursday', 'friday', 'saturday', 'sunday']
      }
    })
  ]
};

export default event;
