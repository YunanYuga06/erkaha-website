import { client } from "@/infrastructure/cms/sanityFetch";

export interface FAQ {
  _id: string;
  question: string;
  answer: string;
}

export async function getFAQs(): Promise<FAQ[]> {
  return await client.fetch(`*[_type == "faq"]`);
}