// src/infrastructure/cms/sanityClient.ts
import { Any, createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2026-04-25', // Gunakan tanggal hari ini
  useCdn: false, // Set ke true untuk produksi agar lebih cepat
})

const builder = imageUrlBuilder(client)
export const urlFor = (source: Any) => builder.image(source)