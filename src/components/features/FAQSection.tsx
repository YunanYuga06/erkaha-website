"use client";
import { useState } from "react";
import { FAQ } from "@/core/use-cases/getFAQs";
import { Plus, Minus } from "lucide-react";

export const FAQSection = ({ data }: { data: FAQ[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#111111] py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Paling Sering Ditanyakan</h2>
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={item._id} className="border border-zinc-800 bg-zinc-900/30 rounded-lg overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-zinc-800/50 transition-colors"
              >
                <span className="font-bold text-white">{item.question}</span>
                {openIndex === index ? <Minus size={20} className="text-yellow-400"/> : <Plus size={20} className="text-zinc-500"/>}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-zinc-400 text-sm animate-in fade-in slide-in-from-top-1 font-serif">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};