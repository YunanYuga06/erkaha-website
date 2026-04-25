// src/components/features/Testimonials.tsx
import { Testimonial } from "@/core/use-cases/getTestimonials";
import { Star } from "lucide-react";

export const Testimonials = ({ data }: { data: Testimonial[] }) => {
  return (
    <section className="bg-[#111111] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-white mb-16">Apa Kata Mereka?</h2>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {data.map((item) => (
            <div key={item._id} className="break-inside-avoid bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl">
              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-zinc-300 italic font-serif leading-relaxed">&quot;{item.reviewText}&quot;</p>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-zinc-700">
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{item.customerName}</h4>
                  <p className="text-xs text-zinc-500">{item.community}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};