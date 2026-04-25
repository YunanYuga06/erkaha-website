// src/components/features/Services.tsx
import { Service } from "@/core/use-cases/getServices";

export const Services = ({ data }: { data: Service[] }) => {
  return (
    <section id="layanan" className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Layanan & Produksi</h2>
          <p className="mt-4 text-zinc-400 font-serif">Pilihan bahan premium dan teknik produksi terbaik untuk hasil maksimal.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {data.map((service) => (
            <div key={service._id} className="group relative border border-zinc-800 bg-[#151515] p-8 transition-all hover:border-yellow-400/50">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="h-24 w-24 shrink-0 overflow-hidden bg-zinc-800 rounded-lg">
                  {service.imageUrl && <img src={service.imageUrl} alt={service.name} className="h-full w-full object-cover" />}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                  <p className="mt-2 text-zinc-400 text-sm leading-relaxed">{service.shortDesc}</p>
                  
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.materials?.map((m) => (
                      <span key={m} className="bg-zinc-800 px-3 py-1 text-[10px] font-bold text-zinc-300 uppercase tracking-wider">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};