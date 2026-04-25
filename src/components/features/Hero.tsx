import Link from 'next/link';

interface HeroProps {
  whatsappNumber?: string;
  whatsappMessage?: string;
}

export const Hero = ({ whatsappNumber, whatsappMessage }: HeroProps) => {
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage || "Halo Erkaha Cloth, saya ingin mulai proyek kustom.")}`;
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-black py-20">
      {/* Background Decorative Element (Hexagon subtle pattern) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 h-64 w-64 border-2 border-yellow-400/20 rotate-45 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center px-6">
        <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-yellow-400">
          Professional Convection Service
        </h2>
        <h1 className="max-w-4xl text-5xl font-extrabold leading-tight text-white md:text-7xl">
          BAWA KOMUNITAS ANDA LEBIH DEKAT DENGAN <span className="italic text-zinc-500">KAOS KUSTOM.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
          Dari reuni akbar hingga seragam perusahaan, Erkaha Cloth mewujudkan identitas Anda melalui jahitan presisi dan sablon berkualitas tinggi.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-yellow-400 px-8 py-4 text-sm font-black text-black hover:bg-yellow-500 transition-all text-center"
          >
            MULAI PROYEK ANDA
          </a>
          <Link 
            href="#portfolio"
            className="w-full sm:w-auto border border-zinc-700 bg-white/5 px-8 py-4 text-sm font-bold text-white hover:bg-white/10 backdrop-blur-sm transition-all text-center"
          >
            LIHAT PORTOFOLIO
          </Link>
        </div>
      </div>
    </section>
  );
};