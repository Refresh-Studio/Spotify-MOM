import { defineField } from 'sanity';

const gallery = {
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
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
      name: 'tags',
      title: 'Tags',
      type: 'array',
      validation: (rule) => rule.required(),
      of: [{ type: 'string' }],
      options: {
        list: ['build-up', 'thursday', 'friday', 'saturday', 'sunday']
      }
    })
  ]
};

export default gallery;
