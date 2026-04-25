import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/features/Hero";
// import { Services } from "@/components/features/Services";
// import { Testimonials } from "@/components/features/Testimonials";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { USPSection } from "@/components/features/USPSection";
import { FAQSection } from "@/components/features/FAQSection";
import { PortfolioSlider } from "@/components/features/PortofolioSlider";
import { ServicesSlider } from "@/components/features/ServiceSlider";
import { TestimonialsSlider } from "@/components/features/TestimonialsSlider";
import { BrandMarquee } from "@/components/features/BrandMarquee";

import { getPortfolios } from "../core/use-cases/getPortofolios";
import { getServices } from "@/core/use-cases/getServices";
import { getTestimonials } from "@/core/use-cases/getTestimonials";
import { getSiteSettings } from "../core/use-cases/getSitesSetings";
import { getUSPs } from "@/core/use-cases/getUSPs";
import { getFAQs } from "@/core/use-cases/getFAQs";
import { Footer } from "@/components/layout/Footer";

export default async function Home() {
  const portfolios = await getPortfolios();
  const services = await getServices();
  const testimonials = await getTestimonials();
  const usps = await getUSPs();
  const faqs = await getFAQs();
  const siteSettings = await getSiteSettings();


  return (
    <>
      <Navbar />
      <Hero 
        whatsappNumber={siteSettings?.whatsappNumber} 
        whatsappMessage={siteSettings?.whatsappMessage} 
      />
      <USPSection data={usps} />
      
      <section id="portfolio" className="bg-[#111111] py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl font-bold text-white md:text-4xl">Karya Kami</h2>
            <p className="mt-2 text-zinc-400 italic font-serif">
              Eksplorasi desain kustom terbaik Erkaha Cloth.
            </p>
          </div>
          
          <PortfolioSlider data={portfolios} />
        </div>
      </section>
      {/* Layanan Section */}
      <ServicesSlider data={services} />
      
      {/* Testimoni Section */}
      <TestimonialsSlider data={testimonials} />

      

      <FAQSection data={faqs} />

      <BrandMarquee/>

      {/* Tombol WhatsApp Mengambang (Floating) */}
      {siteSettings && (
        <WhatsAppButton 
          number={siteSettings.whatsappNumber} 
          message={siteSettings.whatsappMessage} 
        />
      )}

      {/* Footer Sederhana Menggunakan Data Global */}
              <Footer />

      {/* Footer akan ditambahkan di sini */}
    </>
  );
}