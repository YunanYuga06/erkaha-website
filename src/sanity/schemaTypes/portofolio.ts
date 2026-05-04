import { defineField, defineType } from 'sanity'

export const portfolioType = defineType({
  name: 'portfolio',
  title: 'Portofolio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Proyek',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { 
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'clientName',
      title: 'Nama Klien / Komunitas',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Reuni', value: 'reuni' },
          { title: 'Kampus', value: 'kampus' },
          { title: 'Perusahaan', value: 'perusahaan' },
          { title: 'Komunitas', value: 'komunitas' },
        ],
        layout: 'radio', // Membuat tampilannya menjadi tombol radio yang mudah diklik
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Foto Utama Portofolio',
      type: 'image',
      options: { 
        hotspot: true, // Memungkinkan admin memotong (crop) gambar langsung dari UI
      },
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi Singkat (Bahan & Sablon)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'content',
      title: 'Cerita Proyek (Case Study)',
      description: 'Narasi lengkap mengenai tantangan, solusi, dan proses pengerjaan proyek.',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})