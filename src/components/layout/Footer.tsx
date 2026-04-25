import Link from 'next/link';
import { MapPin, Phone } from 'lucide-react';
import { getSiteSettings } from '@/core/use-cases/getSitesSetings';
import { FaInstagram } from "react-icons/fa";

export const Footer = async () => {
  const settings = await getSiteSettings();

  return (
    <footer className="bg-black border-t border-zinc-800 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold tracking-tighter text-white">
                ERKAHA <span className="text-yellow-400">CLOTH</span>
              </span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Konveksi kustom profesional yang fokus pada kualitas bahan dan presisi sablon untuk komunitas Anda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Navigasi</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><Link href="/" className="hover:text-yellow-400">Beranda</Link></li>
              <li><Link href="/about" className="hover:text-yellow-400">Tentang Kami</Link></li>
              <li><Link href="/#portfolio" className="hover:text-yellow-400">Portofolio</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Kontak & Workshop</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-yellow-400 shrink-0" />
                <span>{settings?.address || 'Alamat belum diatur'}</span>
              </li>
              {settings?.instagramUrl && (
                <li className="flex items-center gap-3">
                  <FaInstagram size={18} className="text-yellow-400 shrink-0" />
                  <a href={settings.instagramUrl} target="_blank" className="hover:text-white">@erkahacloth</a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 text-center text-zinc-600 text-xs">
          <p>© {new Date().getFullYear()} Erkaha Cloth. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};