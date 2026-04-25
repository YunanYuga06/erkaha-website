"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Service } from "@/core/use-cases/getServices";

export const ServicesSlider = ({ data }: { data: Service[] }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Fungsi untuk menggeser carousel secara manual via tombol
  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 300 : 400; // Jarak geser dinamis
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (!data || data.length === 0) return null;

  return (
    <section id="layanan" className="bg-black py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header Section dengan Tombol Navigasi terpisah di Kanan */}
        <div className="mb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold text-white md:text-4xl">Layanan & Produksi</h2>
            <p className="mt-2 text-zinc-400 font-serif italic">
              Pilihan bahan premium dan teknik produksi terbaik.
            </p>
          </div>
          
          {/* Tombol Panah (Hanya terlihat di layar agak besar, di HP bisa swipe) */}
          <div className="hidden md:flex gap-3">
            <button 
              onClick={() => scroll("left")}
              className="border border-zinc-700 hover:border-yellow-400 hover:text-yellow-400 p-3 rounded-full text-zinc-400 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="border border-zinc-700 hover:border-yellow-400 hover:text-yellow-400 p-3 rounded-full text-zinc-400 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Container Carousel yang bisa di-scroll / swipe */}
        <div 
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Menyembunyikan scrollbar kotor
        >
          {data.map((service, index) => (
            <motion.div
              key={service._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="snap-start shrink-0 w-[85vw] md:w-[400px] bg-[#151515] border border-zinc-800 rounded-xl overflow-hidden group hover:border-zinc-600 transition-colors flex flex-col"
            >
              {/* Bagian Gambar (Rasio landscape) */}
              <div className="h-48 w-full overflow-hidden bg-zinc-900 relative">
                {service.imageUrl ? (
                  <img 
                    src={service.imageUrl} 
                    alt={service.name} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-zinc-600">No Image</div>
                )}
                {/* Overlay Gradient Halus */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515] to-transparent opacity-80" />
              </div>

              {/* Bagian Konten */}
              <div className="p-8 flex flex-col flex-grow -mt-8 relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                  {service.shortDesc}
                </p>
                
                {/* Daftar Bahan & Teknik */}
                <div className="space-y-4 border-t border-zinc-800 pt-6">
                  {service.materials && service.materials.length > 0 && (
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2 block">Bahan Tersedia</span>
                      <div className="flex flex-wrap gap-2">
                        {service.materials.map((m) => (
                          <span key={m} className="bg-zinc-800/50 px-2 py-1 text-xs text-zinc-300 rounded-sm">{m}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {service.techniques && service.techniques.length > 0 && (
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2 block">Teknik Sablon/Bordir</span>
                      <div className="flex flex-wrap gap-2">
                        {service.techniques.map((t) => (
                          <span key={t} className="bg-yellow-400/10 text-yellow-400 px-2 py-1 text-xs rounded-sm border border-yellow-400/20">{t}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* CSS untuk menyembunyikan scrollbar di Webkit (Chrome/Safari) */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}} />
    </section>
  );
};