import { client } from "@/infrastructure/cms/sanityFetch";

export interface PartnerLogo {
  _id: string;
  name: string;
  imageUrl: string;
  category: string;
  order: number;
}

export async function getPartnerLogos(): Promise<PartnerLogo[]> {
  return await client.fetch(`*[_type == "partnerLogo"] | order(order asc) {
    _id,
    name,
    "imageUrl": logo.asset->url,
    category,
    order
  }`);
}
