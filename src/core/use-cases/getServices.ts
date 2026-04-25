import { client } from "@/infrastructure/cms/sanityFetch";

export interface Service {
  _id: string;
  name: string;
  shortDesc: string;
  materials: string[];
  techniques: string[];
  imageUrl: string;
}

export async function getServices(): Promise<Service[]> {
  const query = `*[_type == "service"]{
    _id,
    name,
    shortDesc,
    materials,
    techniques,
    "imageUrl": image.asset->url
  }`;
  return await client.fetch(query);
}