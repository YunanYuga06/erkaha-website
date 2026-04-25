import { client } from "@/infrastructure/cms/sanityFetch";

export interface Testimonial {
  _id: string;
  customerName: string;
  community: string;
  rating: number; // Angka 1-5
  reviewText: string;
  product: string; // Misal: "Kaos Sablon Oblong", "Kemeja PDH"
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const query = `*[_type == "testimonial"]{
    _id,
    customerName,
    community,
    rating,
    reviewText,
    product
  }`;
  return await client.fetch(query);
}