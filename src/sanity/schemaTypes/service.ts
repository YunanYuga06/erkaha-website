import { defineField, defineType } from 'sanity'

export const serviceType = defineType({
  name: 'service',
  title: 'Layanan & Bahan',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nama Layanan (Misal: Kaos Sablon, Polo Shirt)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDesc',
      title: 'Deskripsi Singkat',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'materials',
      title: 'Pilihan Bahan',
      description: 'Ketik nama bahan lalu tekan Enter (Misal: Cotton Combed 30s)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'techniques',
      title: 'Teknik Sablon / Bordir',
      description: 'Ketik teknik lalu tekan Enter (Misal: Plastisol, Bordir Komputer)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'image',
      title: 'Foto / Ikon Layanan',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})