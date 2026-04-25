"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Portfolio } from "@/core/use-cases/getPortofolios";

export const PortfolioSlider = ({ data }: { data: Portfolio[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  if (data.length === 0) return null;

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 py-12">
      <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden rounded-xl bg-zinc-900 shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={data[currentIndex]._id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col md:flex-row"
          >
            {/* Bagian Gambar */}
            <div className="h-2/3 md:h-full md:w-3/5 overflow-hidden">
              {data[currentIndex].imageUrl ? (
                <img
                  src={data[currentIndex].imageUrl}
                  alt={data[currentIndex].title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-zinc-800 text-zinc-500">
                  No Image
                </div>
              )}
            </div>

            {/* Bagian Detail */}
            <div className="flex flex-col justify-center p-8 md:p-12 md:w-2/5 bg-zinc-900 border-l border-zinc-800">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400 mb-4">
                {data[currentIndex].category}
              </span>
              <h3 className="text-3xl font-bold text-white mb-4 font-sans">
                {data[currentIndex].title}
              </h3>
              <p className="text-zinc-400 text-sm mb-6">
                Proyek kustom untuk klien: <span className="text-white font-medium">{data[currentIndex].clientName}</span>
              </p>
              
                          <button className="self-start border-b-2 border-yellow-400 pb-1 text-sm font-bold text-white hover:text-yellow-400 transition-colors">
                              <a href={`/portfolio/${data[currentIndex].slug}`} className="block">
                                DETAIL PROYEK
                              </a>
                            </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Tombol Navigasi */}
        <div className="absolute bottom-6 right-6 flex gap-2">
          <button
            onClick={prevSlide}
            className="bg-white/10 hover:bg-yellow-400 hover:text-black p-3 rounded-full text-white transition-all backdrop-blur-md"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white/10 hover:bg-yellow-400 hover:text-black p-3 rounded-full text-white transition-all backdrop-blur-md"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Indikator Slide */}
      <div className="mt-8 flex justify-center gap-2">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 transition-all duration-300 ${
              index === currentIndex ? "w-8 bg-yellow-400" : "w-4 bg-zinc-800"
            }`}
          />
        ))}
      </div>
    </div>
  );
};