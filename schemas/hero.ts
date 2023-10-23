import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'banner',
  title: 'banner',
  type: 'document',
  fields: [
    defineField({
      name: 'HeroTitle',
      title: 'Hero Title',
      type: 'string',
    }),
    defineField({
      name: 'HeroImage',
      title: 'Hero image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    })
  ],
})
