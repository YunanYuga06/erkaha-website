import { getPortfolioBySlug } from "@/core/use-cases/getPortofolioBySlug";
import { getSiteSettings } from "@/core/use-cases/getSitesSetings";
import { Navbar } from "@/components/layout/Navbar";
import { OrderSimilarButton } from "@/components/ui/OrderSimiliarButton";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const [item, settings] = await Promise.all([
    getPortfolioBySlug((await params).slug),
    getSiteSettings(),
  ]);

  if (!item) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#111111] pt-32 pb-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800">
              <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
            </div>
            
            <div className="flex flex-col justify-center">
              <span className="text-yellow-400 font-bold uppercase tracking-widest text-xs">
                {item.category}
              </span>
              <h1 className="text-4xl font-bold text-white mt-4 mb-6">{item.title}</h1>
              
              <div className="space-y-6 text-zinc-400 leading-relaxed font-sans">
                <p>
                  <strong className="text-white block mb-1">Klien:</strong> 
                  {item.clientName || "Pelanggan Setia Erkaha"}
                </p>
                <div>
                  <strong className="text-white block mb-1">Deskripsi Proyek:</strong>
                  <p>{item.description || "Detail pengerjaan kustom dengan standar kualitas Erkaha Cloth."}</p>
                </div>
              </div>

              {settings?.whatsappNumber ? (
                <OrderSimilarButton 
                  whatsappNumber={settings.whatsappNumber} 
                  projectTitle={item.title} 
                />
              ) : (
                <p className="mt-10 text-xs text-zinc-500 italic">
                  Hubungi admin melalui tombol WhatsApp di pojok halaman untuk pemesanan.
                </p>
              )}
            </div>
          </div>

          {item.content && item.content.length > 0 && (
            <div className="mt-24 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-yellow-400 pl-4">
                Cerita di Balik Proyek
              </h2>
              <div className="prose prose-invert max-w-none text-zinc-300 prose-a:text-yellow-400 hover:prose-a:text-yellow-300 prose-strong:text-white prose-headings:text-white">
                <PortableText value={item.content} />
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
