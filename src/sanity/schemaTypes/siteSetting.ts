import { defineField, defineType } from 'sanity'
import { CogIcon } from '@sanity/icons' // Anda bisa menggunakan ikon gerigi

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Pengaturan Global',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'whatsappNumber',
      title: 'Nomor WhatsApp Admin',
      description: 'Gunakan format internasional tanpa tanda + (Contoh: 628123456789)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'whatsappMessage',
      title: 'Pesan Otomatis WhatsApp',
      description: 'Pesan yang muncul saat pelanggan pertama kali memulai chat.',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'address',
      title: 'Alamat Workshop',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Link Instagram',
      type: 'url',
    }),
  ],
})