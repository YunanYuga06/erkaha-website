import { client } from "@/infrastructure/cms/sanityFetch";

export interface SiteSettings {
  whatsappNumber: string;
  whatsappMessage: string;
  address: string;
  instagramUrl: string;
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const query = `*[_type == "siteSettings"][0]`; // Ambil satu dokumen pertama (Singleton)
  return await client.fetch(query);
}