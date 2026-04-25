import { client } from "@/infrastructure/cms/sanityFetch";

export interface USP {
  _id: string;
  title: string;
  description: string;
}

export async function getUSPs(): Promise<USP[]> {
  return await client.fetch(`*[_type == "usp"]`);
}