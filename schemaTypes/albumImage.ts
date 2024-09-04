import { defineField } from 'sanity';

const albumImage = {
  name: 'albumImage',
  title: 'Album Image',
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
    })
  ]
};

export default albumImage;
