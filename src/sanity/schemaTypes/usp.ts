import { defineField, defineType } from 'sanity'
import { StarIcon } from '@sanity/icons'

export const uspType = defineType({
  name: 'usp',
  title: 'Keunggulan (USP)',
  type: 'document',
  icon: StarIcon,
  fields: [
    defineField({ name: 'title', title: 'Judul Keunggulan', type: 'string' }),
    defineField({ name: 'description', title: 'Deskripsi Singkat', type: 'text', rows: 2 }),
  ],
})