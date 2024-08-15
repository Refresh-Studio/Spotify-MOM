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
      name: 'lineup',
      title: 'Lineup',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'startTime',
      title: 'Start Time',
      type: 'string'
    }),
    defineField({
      name: 'endTime',
      title: 'End Time',
      type: 'string'
    }),
    defineField({
      name: 'calendarStartDate',
      title: 'Calendar Start Date',
      type: 'date',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'calendarEndDate',
      title: 'Calendar End Date',
      type: 'date'
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }]
    }),
    defineField({
      name: 'quicketEventId',
      title: 'Quicket Event ID',
      type: 'string'
    }),
    defineField({
      name: 'tags',
      title: 'Filter Tags',
      type: 'array',
      validation: (rule) => rule.required(),
      of: [{ type: 'reference', to: [{ type: 'eventFilter' }] }]
    })
  ]
};

export default event;
