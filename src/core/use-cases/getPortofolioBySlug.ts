import { client } from "@/infrastructure/cms/sanityFetch";
import { Portfolio } from "./getPortofolios";

export async function getPortfolioBySlug(slug: string): Promise<Portfolio | null> {
  const query = `*[_type == "portfolio" && slug.current == $slug][0]{
  _id,
  title,
  clientName,
  category,
  description,
  "slug": slug.current,
  "imageUrl": mainImage.asset->url
}`;
  return await client.fetch(query, { slug });
}
