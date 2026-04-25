import { defineField, defineType } from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimoni Pelanggan',
  type: 'document',
  fields: [
    defineField({
      name: 'customerName',
      title: 'Nama Pelanggan',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'community',
      title: 'Asal Komunitas / Instansi',
      type: 'string',
    }),
    defineField({
      name: 'rating',
      title: 'Rating Bintang (1-5)',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5), // Mencegah admin input nilai aneh
    }),
    defineField({
      name: 'reviewText',
      title: 'Isi Ulasan',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
      defineField({
        name: 'product',
        title: 'Produk yang Dibeli',
        type: 'string',
        validation: (Rule) => Rule.required(),
      })
    ]
  },
)