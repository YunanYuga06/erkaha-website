// src/core/use-cases/getPortfolios.ts
import { client } from "../../infrastructure/cms/sanityFetch";

export interface PortableTextBlock {
  _type: string;
  _key?: string;
  style?: string;
  markDefs?: object[];
  children?: {
    _type: string;
    _key?: string;
    text?: string;
    marks?: string[];
  }[];
}

export interface Portfolio {
  _id: string;
  title: string;
  clientName: string;
  category: string;
  imageUrl?: string;
  slug: string;
  description?: string;
  content?: PortableTextBlock[];
}

export async function getPortfolios(): Promise<Portfolio[]> {
  const query = `*[_type == "portfolio"]{
  _id,
  title,
  clientName,
  category,
  "slug": slug.current,
  description,
  content,
  "imageUrl": mainImage.asset->url
}`;

  const data = await client.fetch(query);
  return data;
}