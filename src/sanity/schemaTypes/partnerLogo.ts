import { defineField, defineType } from 'sanity'
import { UsersIcon } from '@sanity/icons'

export const partnerLogoType = defineType({
  name: 'partnerLogo',
  title: 'Logo Mitra/Klien',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Nama Perusahaan/Komunitas',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo (PNG/SVG dengan background transparan)',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Perusahaan', value: 'company' },
          { title: 'Komunitas', value: 'community' },
          { title: 'Kampus', value: 'campus' },
        ],
      },
    }),
    defineField({
      name: 'order',
      title: 'Urutan Tampil (Angka lebih kecil muncul lebih awal)',
      type: 'number',
      initialValue: 0,
    }),
  ],
})
