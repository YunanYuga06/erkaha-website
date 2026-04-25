// src/core/use-cases/getPortfolios.ts
import { client } from "../../infrastructure/cms/sanityFetch";

// Mendefinisikan tipe data (Entity) agar TypeScript tidak protes
export interface Portfolio {
  _id: string;
  title: string;
  clientName: string;
  category: string;
  imageUrl?: string;
  slug: string;
  description?: string; // ⬅️ tambahkan ini
}

export async function getPortfolios(): Promise<Portfolio[]> {
  // Kueri GROQ: Ambil semua dokumen bertipe 'portfolio'
  // dan ekstrak langsung URL gambar utamanya
  const query = `*[_type == "portfolio"]{
  _id,
  title,
  clientName,
  category,
  "slug": slug.current,
  description,
  "imageUrl": mainImage.asset->url
}`;

  const data = await client.fetch(query);
  return data;
}