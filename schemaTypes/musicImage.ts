import { defineField } from 'sanity';

const musicImage = {
  name: 'musicImage',
  title: 'MOM Image',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (rule) => rule.required()
    })
  ]
};

export default musicImage;
