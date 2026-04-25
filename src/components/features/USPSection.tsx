import { USP } from "@/core/use-cases/getUSPs";
import { CheckCircle } from "lucide-react";

export const USPSection = ({ data }: { data: USP[] }) => (
    <section className="bg-black py-20 border-y border-zinc-800">
        <h2 className="text-center text-3xl font-bold text-white mb-16">Keunggulan Kami</h2>
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {data.map((item) => (
          <div key={item._id} className="flex gap-4">
            <CheckCircle className="text-yellow-400 shrink-0" size={28} />
            <div>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);