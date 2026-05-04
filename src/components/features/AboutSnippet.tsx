import Link from "next/link";

export const AboutSnippet = ({ text }: { text: string }) => {
  if (!text) return null;

  const snippet = text.length > 280 ? text.slice(0, 280).trim() + "..." : text;

  return (
    <section className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Mengenal <span className="text-yellow-400">Erkaha Cloth</span>
        </h2>
        <div className="mt-6 text-lg leading-relaxed text-zinc-300 font-serif">
          {snippet}
        </div>
        <Link
          href="/about"
          className="mt-10 inline-flex items-center gap-2 border border-yellow-400 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-yellow-400 transition-all duration-200 hover:bg-yellow-400 hover:text-black"
        >
          Baca Selengkapnya
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </Link>
      </div>
    </section>
  );
};
