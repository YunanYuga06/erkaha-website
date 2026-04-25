import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { getSiteSettings } from "@/core/use-cases/getSitesSetings"; // Menggunakan nama file sesuai repo Anda
import { MapPin, Info } from "lucide-react";

export default async function AboutPage() {
  const settings = await getSiteSettings();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#111111] pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          {/* Bagian 1: Profil Perusahaan */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-1 bg-yellow-400"></div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Tentang <span className="text-yellow-400">Kami</span>
              </h1>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-zinc-300 leading-relaxed font-serif italic mb-8">
                &quot;Dedikasi Erkaha Cloth dalam menghadirkan kualitas konveksi terbaik untuk setiap komunitas.&quot;
              </p>
              
              <div className="text-zinc-400 leading-relaxed space-y-6 text-lg">
                {settings?.aboutUs ? (
                  <p>{settings.aboutUs}</p>
                ) : (
                  <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800 flex gap-4 items-center">
                    <Info className="text-yellow-400" />
                    <p className="text-sm italic">Narasi profil perusahaan dapat Anda isi melalui Sanity CMS pada bagian Site Settings.</p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Bagian 2: Lokasi Workshop (Berada di bawah Profil) */}
          <section className="bg-zinc-900/30 p-8 md:p-12 rounded-2xl border border-zinc-800">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div>
                <h3 className="text-white text-2xl font-bold mb-2">Lokasi Workshop</h3>
                <p className="text-zinc-400 max-w-md flex items-start gap-2">
                  <MapPin size={18} className="text-yellow-400 shrink-0 mt-1" />
                  {settings?.address || "Alamat workshop belum diatur."}
                </p>
              </div>
            </div>
            
            {/* Embed Google Maps */}
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-2xl border border-zinc-700">
              {settings?.googleMapsEmbedUrl ? (
                <iframe
                  src={settings.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale invert contrast-125 opacity-80 hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-700"
                ></iframe>
              ) : (
                <div className="w-full h-full bg-zinc-800 flex flex-col items-center justify-center text-zinc-500 gap-4">
                  <MapPin size={48} className="opacity-20" />
                  <p className="text-sm italic">Google Maps belum dikonfigurasi di CMS.</p>
                </div>
              )}
            </div>
          </section>
        </div>
        </main>
        <Footer />
      </>
      
  );
}