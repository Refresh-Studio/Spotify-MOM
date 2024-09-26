import { defineField } from 'sanity';

const loaderImage = {
  name: 'loaderImage',
  title: 'Loader Image',
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

export default loaderImage;
