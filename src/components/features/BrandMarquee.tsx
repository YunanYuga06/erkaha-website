"use client";

import { motion } from "framer-motion";

// Daftar bahan dan merek yang digunakan (bisa diubah sesuai kebutuhan Erkaha Cloth)
const brands = [
  "COTTON COMBED 30S",
  "MATSUI INK",
  "YKK ZIPPER",
  "PLASTISOL",
  "NEW STATES APPAREL",
  "GILDAN",
  "PREMIUM DRILL",
  "BORDIR KOMPUTER",
];

export const BrandMarquee = () => {
  // Kita menduplikasi array 3 kali agar efek infinite scroll-nya tidak pernah terputus
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="bg-yellow-400 border-y border-yellow-500 py-3 overflow-hidden flex items-center">
      <div className="relative w-full flex overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap items-center gap-12"
          animate={{
            x: ["0%", "-33.33%"], // Bergerak tepat sejauh satu set array aslinya
          }}
          transition={{
            ease: "linear",
            duration: 25, // Kecepatan berjalan (semakin besar semakin lambat)
            repeat: Infinity,
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <div key={index} className="flex items-center gap-12">
              <span className="text-black font-black tracking-[0.2em] uppercase text-sm md:text-base">
                {brand}
              </span>
              {/* Ikon pemisah antar merek */}
              <span className="text-yellow-600 font-bold">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};