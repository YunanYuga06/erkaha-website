import { defineField, defineType } from 'sanity'
import { ComponentIcon } from '@sanity/icons'

export const sizeChartType = defineType({
  name: 'sizeChart',
  title: 'Ukuran (Size Chart)',
  type: 'document',
  icon: ComponentIcon,
  fields: [
    defineField({
      name: 'category',
      title: 'Kategori Pakaian',
      type: 'string',
      options: {
        list: [
          { title: 'T-Shirt', value: 'tshirt' },
          { title: 'Polo', value: 'polo' },
          { title: 'Jacket', value: 'jacket' },
          { title: 'Hoodie', value: 'hoodie' },
          { title: 'Long Sleeve', value: 'longsleeve' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sizes',
      title: 'Daftar Ukuran',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'size', title: 'Ukuran (S/M/L/XL)', type: 'string' }),
            defineField({ name: 'chest', title: 'Lingkar Dada (cm)', type: 'number' }),
            defineField({ name: 'length', title: 'Panjang Baju (cm)', type: 'number' }),
            defineField({ name: 'sleeve', title: 'Panjang Lengan (cm)', type: 'number' }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
})
