import Link from 'next/link';
import { Menu } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-[#111111]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-white p-1">
             {/* Placeholder untuk Logo Hexagon */}
             <div className="h-8 w-8 bg-black flex items-center justify-center font-bold text-white text-xs">EC</div>
          </div>
          <span className="text-xl font-bold tracking-tighter text-white">
            ERKAHA <span className="text-yellow-400">CLOTH</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="text-yellow-400">Beranda</Link>
          <Link href="#portfolio" className="text-zinc-400 hover:text-white transition-colors">Portofolio</Link>
          <Link href="#layanan" className="text-zinc-400 hover:text-white transition-colors">Layanan</Link>
          <Link href="/about" className="text-zinc-400 hover:text-white transition-colors">Tentang</Link>
          <button className="bg-yellow-400 px-5 py-2 text-black font-bold rounded-sm hover:bg-yellow-500 transition-transform active:scale-95">
            HUBUNGI KAMI
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};