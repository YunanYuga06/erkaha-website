import Image from "next/image";
import { PartnerLogo } from "@/core/entities/partnerLogo";

export const PartnerLogosGrid = ({ data }: { data: PartnerLogo[] }) => {
  if (!data || data.length === 0) return null;

  const validLogos = data.filter((p) => p.imageUrl);

  if (validLogos.length === 0) return null;

  return (
    <section className="bg-[#111111] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Dipercaya Oleh
          </h2>
          <p className="mt-2 text-zinc-400 italic font-serif">
            Perusahaan dan komunitas yang telah bekerja sama dengan Erkaha Cloth.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {validLogos.map((partner) => (
            <div
              key={partner._id}
              className="flex items-center justify-center p-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <div className="relative w-full aspect-square max-w-[120px]">
                <Image
                  src={partner.imageUrl}
                  alt={`Logo ${partner.name}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
