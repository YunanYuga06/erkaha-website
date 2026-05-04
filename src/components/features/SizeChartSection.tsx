"use client";
import { useState } from "react";
import { SizeChart } from "@/core/entities/sizeChart";

const categoryLabels: Record<string, string> = {
  tshirt: "T-Shirt",
  polo: "Polo",
  jacket: "Jacket",
  hoodie: "Hoodie",
  longsleeve: "Long Sleeve",
};

export const SizeChartSection = ({ data }: { data: SizeChart[] }) => {
  const [activeTab, setActiveTab] = useState<string>(
    data.length > 0 ? data[0].category : ""
  );

  if (!data || data.length === 0) return null;

  const activeChart = data.find((chart) => chart.category === activeTab);

  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Panduan Ukuran
          </h2>
          <p className="mt-2 text-zinc-400 italic font-serif">
            Pilih kategori dan temukan ukuran yang tepat untuk Anda.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {data.map((chart) => (
            <button
              key={chart._id}
              onClick={() => setActiveTab(chart.category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === chart.category
                  ? "bg-yellow-400 text-black"
                  : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white"
              }`}
            >
              {categoryLabels[chart.category] || chart.category}
            </button>
          ))}
        </div>

        {/* Size Table */}
        {activeChart && (
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-zinc-700 bg-zinc-900/60">
                    <th className="px-6 py-4 text-sm font-bold text-yellow-400 uppercase tracking-wider">
                      Ukuran
                    </th>
                    <th className="px-6 py-4 text-sm font-bold text-yellow-400 uppercase tracking-wider">
                      Lingkar Dada (cm)
                    </th>
                    <th className="px-6 py-4 text-sm font-bold text-yellow-400 uppercase tracking-wider">
                      Panjang Baju (cm)
                    </th>
                    <th className="px-6 py-4 text-sm font-bold text-yellow-400 uppercase tracking-wider">
                      Panjang Lengan (cm)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {activeChart.sizes.map((entry, idx) => (
                    <tr
                      key={entry.size}
                      className={`border-b border-zinc-800/50 ${
                        idx % 2 === 0 ? "bg-transparent" : "bg-zinc-800/20"
                      }`}
                    >
                      <td className="px-6 py-4 text-white font-semibold">
                        {entry.size}
                      </td>
                      <td className="px-6 py-4 text-zinc-300">
                        {entry.chest}
                      </td>
                      <td className="px-6 py-4 text-zinc-300">
                        {entry.length}
                      </td>
                      <td className="px-6 py-4 text-zinc-300">
                        {entry.sleeve}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <p className="mt-6 text-center text-xs text-zinc-500 italic">
          * Toleransi ukuran ±2 cm. Hubungi kami jika membutuhkan ukuran khusus.
        </p>
      </div>
    </section>
  );
};
