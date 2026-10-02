import React from 'react';
import { PERENNIAL_BRAND, FILMS } from '../data/perennialFilmsData';
import { Mail, Film as FilmIcon, ShieldCheck, Award } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onSelectFilm: (filmId: string) => void;
  onOpenAudit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onSelectFilm, onOpenAudit }) => {
  return (
    <footer className="w-full bg-[#0a0a0c] border-t border-[#27272a] text-[#A1A1AA] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#27272a]">
          {/* Brand & Editorial Statement */}
          <div className="md:col-span-6 space-y-4">
            <div>
              <h3 className="font-serif text-3xl text-[#F4F4F5] font-normal tracking-wide">
                {PERENNIAL_BRAND.name}
              </h3>
              <p className="text-xs uppercase tracking-[0.25em] text-[#C29B38] font-mono mt-0.5">
                {PERENNIAL_BRAND.tagline}
              </p>
            </div>

            <blockquote className="font-serif italic text-base sm:text-lg text-[#D4D4D8] border-l-2 border-[#C29B38]/60 pl-4 py-1 leading-relaxed">
              "{PERENNIAL_BRAND.directorStatement}"
            </blockquote>

            <p className="text-xs text-[#71717A] font-mono pt-1">
              — {PERENNIAL_BRAND.director}
            </p>

            <div className="pt-2 text-sm text-[#D4D4D8]">
              <p className="inline-block bg-[#18181b] border border-[#27272a] px-3.5 py-2 rounded-md">
                {PERENNIAL_BRAND.speakingNote.split('Contact me here.')[0]}
                <button
                  onClick={() => setActiveTab('contact')}
                  className="text-[#C29B38] underline hover:text-[#e4be58] font-medium ml-1 cursor-pointer"
                >
                  Contact me here.
                </button>
              </p>
            </div>
          </div>

          {/* Film Catalog Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#E4E4E7]">
              The Film Archive
            </h4>
            <ul className="space-y-2 text-sm">
              {FILMS.map((f) => (
                <li key={f.id}>
                  <button
                    onClick={() => onSelectFilm(f.id)}
                    className="hover:text-[#F4F4F5] transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                  >
                    <span className="text-[#C29B38] text-xs">/</span>
                    <span className="hover:underline">{f.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Institutional Licensing & Navigation */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#E4E4E7]">
              Institutional & VOD
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => setActiveTab('licensing')}
                  className="hover:text-[#F4F4F5] transition-colors hover:underline text-left cursor-pointer"
                >
                  University & College Streaming (DSL / PPR)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('licensing')}
                  className="hover:text-[#F4F4F5] transition-colors hover:underline text-left cursor-pointer"
                >
                  Non-Profit Organization Licenses
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('contact')}
                  className="hover:text-[#F4F4F5] transition-colors hover:underline text-left cursor-pointer"
                >
                  Purchase Orders (P.O.) & Invoices
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('about')}
                  className="hover:text-[#F4F4F5] transition-colors hover:underline text-left cursor-pointer"
                >
                  About Joanne Hershfield
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAudit}
                  className="text-[#C29B38] hover:text-[#e4be58] transition-colors hover:underline text-left flex items-center gap-1 cursor-pointer font-mono text-xs"
                >
                  Redesign Audit & WordPress Specs →
                </button>
              </li>
            </ul>

            <div className="pt-3 border-t border-[#27272a]/60">
              <a
                href={`mailto:${PERENNIAL_BRAND.email}`}
                className="text-xs text-[#A1A1AA] hover:text-[#F4F4F5] flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5 text-[#C29B38]" />
                <span>{PERENNIAL_BRAND.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Metadata & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#71717A] gap-4">
          <p>© {new Date().getFullYear()} Perennial Films. All rights reserved.</p>
          <div className="flex items-center gap-6 text-[11px] font-mono">
            <span>STANFORD FILM PROGRAM ALUMNA</span>
            <span aria-hidden="true">·</span>
            <span>UNC-CHAPEL HILL PROF. EMERITA</span>
            <span aria-hidden="true">·</span>
            <span>500+ PERMANENT COLLECTIONS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
