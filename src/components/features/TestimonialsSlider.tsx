"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Testimonial } from "@/core/use-cases/getTestimonials";

export const TestimonialsSlider = ({ data }: { data: Testimonial[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  if (data.length === 0) return null;

  return (
    <section className="bg-black py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative">
        
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Apresiasi Komunitas Kami</h2>
          <p className="mt-2 text-zinc-400 font-serif italic">
            Bukti kualitas dan kepuasan dari pelanggan setia Erkaha Cloth.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative h-[450px] md:h-[500px] w-full overflow-hidden rounded-xl bg-zinc-900/50 shadow-2xl border border-zinc-800">
          <AnimatePresence mode="wait">
            <motion.div
              key={data[currentIndex]._id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center text-center"
            >
              {/* Rating Bintang */}
              <div className="flex gap-1 justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className={`fill-yellow-400 ${i < data[currentIndex].rating ? "text-yellow-400" : "text-zinc-700"}`} />
                ))}
              </div>

              {/* Teks Kutipan Ulasan (Gaya font-sans italic seperti referensi) */}
              <blockquote className="max-w-4xl mx-auto mb-10">
                <p className="text-white text-lg md:text-xl leading-relaxed font-sans italic text-zinc-200">
                  &quot;{data[currentIndex].reviewText}&quot;
                </p>
              </blockquote>

              {/* Detail Klien */}
              <div className="flex flex-col items-center">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400 mb-2">
                  {data[currentIndex].product}
                </span>
                <h4 className="text-base font-medium text-white">{data[currentIndex].customerName}</h4>
                <p className="text-xs text-zinc-500">{data[currentIndex].community}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Tombol Navigasi (Sama seperti referensi, di samping) */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-yellow-400 hover:text-black p-4 rounded-full text-white transition-all backdrop-blur-md z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-yellow-400 hover:text-black p-4 rounded-full text-white transition-all backdrop-blur-md z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indikator Slide */}
        <div className="mt-8 flex justify-center gap-2">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                index === currentIndex ? "w-10 bg-yellow-400" : "w-5 bg-zinc-800"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};