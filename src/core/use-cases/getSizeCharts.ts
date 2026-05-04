import { client } from "@/infrastructure/cms/sanityFetch";
import { SizeChart } from "@/core/entities/sizeChart";

export async function getSizeCharts(): Promise<SizeChart[]> {
  return await client.fetch(`*[_type == "sizeChart"]{
    _id,
    category,
    sizes[] {
      size,
      chest,
      length,
      sleeve
    }
  }`);
}
