import React, { useState } from 'react';
import { Film as FilmIcon, X, ChevronRight, Play, ShoppingBag, BookOpen, User, Mail, Sparkles, Layers } from 'lucide-react';
import { FILMS, PERENNIAL_BRAND } from '../data/perennialFilmsData';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onSelectFilm: (filmId: string) => void;
  onOpenAudit: () => void;
  onOpenLibrary: () => void;
  cartCount: number;
  openCart: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activeTab,
  setActiveTab,
  onSelectFilm,
  onOpenAudit,
  onOpenLibrary,
  cartCount,
  openCart
}) => {
  const [showFilmsSubmenu, setShowFilmsSubmenu] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden bg-[#0c0c0e]/98 backdrop-blur-xl flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200">
      {/* Top Bar inside Menu */}
      <div className="px-6 py-5 flex items-center justify-between border-b border-[#27272a]">
        <div>
          <span className="font-serif text-2xl font-normal tracking-wide text-[#F4F4F5]">
            {PERENNIAL_BRAND.name}
          </span>
          <span className="block text-[10px] uppercase tracking-[0.2em] text-[#A1A1AA] font-light">
            {PERENNIAL_BRAND.tagline}
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-2.5 rounded-lg bg-[#18181b] text-[#A1A1AA] hover:text-white border border-[#2e2e33] active:scale-95 transition-transform"
          aria-label="Close Navigation"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Navigation List */}
      <div className="flex-1 px-6 py-8 space-y-6">
        <div className="space-y-1">
          <p className="text-[11px] font-mono tracking-wider uppercase text-[#71717A] mb-3">
            Navigation
          </p>

          <button
            onClick={() => {
              setActiveTab('home');
              onClose();
            }}
            className={`w-full flex items-center justify-between py-3 text-left font-serif text-2xl tracking-wide transition-colors ${
              activeTab === 'home' ? 'text-[#C29B38]' : 'text-[#F4F4F5] hover:text-[#C29B38]'
            }`}
          >
            <span>Overview & Cinema</span>
            <ChevronRight className="w-5 h-5 text-[#52525B]" />
          </button>

          {/* Films Expandable Accordion */}
          <div className="border-t border-b border-[#27272a]/60 py-1">
            <button
              onClick={() => setShowFilmsSubmenu(!showFilmsSubmenu)}
              className="w-full flex items-center justify-between py-3 text-left font-serif text-2xl text-[#F4F4F5] hover:text-[#C29B38] transition-colors"
            >
              <span>The Film Archive ({FILMS.length})</span>
              <ChevronRight
                className={`w-5 h-5 text-[#52525B] transition-transform duration-200 ${
                  showFilmsSubmenu ? 'rotate-90 text-[#C29B38]' : ''
                }`}
              />
            </button>

            {showFilmsSubmenu && (
              <div className="pl-3 pr-1 py-2 space-y-2.5 bg-[#141416] rounded-lg my-2 border border-[#27272a]">
                <button
                  onClick={() => {
                    setActiveTab('films');
                    onClose();
                  }}
                  className="w-full text-left py-1.5 text-xs font-mono uppercase tracking-wider text-[#C29B38] hover:underline"
                >
                  View Complete Catalog →
                </button>
                {FILMS.map((film) => (
                  <button
                    key={film.id}
                    onClick={() => {
                      onSelectFilm(film.id);
                      onClose();
                    }}
                    className="w-full flex items-center justify-between py-2 text-left text-sm text-[#D4D4D8] hover:text-white border-b border-[#27272a]/40 last:border-0"
                  >
                    <span className="truncate pr-2 font-medium">{film.title}</span>
                    <span className="text-[11px] text-[#71717A] shrink-0 font-mono">
                      {film.runtime}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => {
              setActiveTab('licensing');
              onClose();
            }}
            className={`w-full flex items-center justify-between py-3 text-left font-serif text-2xl tracking-wide transition-colors ${
              activeTab === 'licensing' ? 'text-[#C29B38]' : 'text-[#F4F4F5] hover:text-[#C29B38]'
            }`}
          >
            <span>Educational & VOD Licensing</span>
            <ChevronRight className="w-5 h-5 text-[#52525B]" />
          </button>

          <button
            onClick={() => {
              setActiveTab('about');
              onClose();
            }}
            className={`w-full flex items-center justify-between py-3 text-left font-serif text-2xl tracking-wide transition-colors ${
              activeTab === 'about' ? 'text-[#C29B38]' : 'text-[#F4F4F5] hover:text-[#C29B38]'
            }`}
          >
            <span>About Director Joanne</span>
            <ChevronRight className="w-5 h-5 text-[#52525B]" />
          </button>

          <button
            onClick={() => {
              setActiveTab('contact');
              onClose();
            }}
            className={`w-full flex items-center justify-between py-3 text-left font-serif text-2xl tracking-wide transition-colors ${
              activeTab === 'contact' ? 'text-[#C29B38]' : 'text-[#F4F4F5] hover:text-[#C29B38]'
            }`}
          >
            <span>Contact & Speaking</span>
            <ChevronRight className="w-5 h-5 text-[#52525B]" />
          </button>
        </div>

        {/* Quick Utility Actions on Mobile */}
        <div className="pt-4 border-t border-[#27272a] grid grid-cols-2 gap-3">
          <button
            onClick={() => {
              onOpenLibrary();
              onClose();
            }}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#18181b] border border-[#2e2e33] text-sm text-[#E4E4E7] active:bg-[#27272a]"
          >
            <User className="w-4 h-4 text-[#C29B38]" />
            <span>My Library</span>
          </button>

          <button
            onClick={() => {
              openCart();
              onClose();
            }}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#18181b] border border-[#2e2e33] text-sm text-[#E4E4E7] active:bg-[#27272a]"
          >
            <ShoppingBag className="w-4 h-4 text-[#C29B38]" />
            <span>Cart ({cartCount})</span>
          </button>

          <button
            onClick={() => {
              onOpenAudit();
              onClose();
            }}
            className="col-span-2 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#1c1c20] border border-[#27272a] text-xs font-mono text-[#A1A1AA] active:bg-[#27272a]"
          >
            <Layers className="w-4 h-4 text-[#C29B38]" />
            <span>10-Phase Design Audit & WordPress Specs</span>
          </button>
        </div>
      </div>

      {/* Mobile Footer Note */}
      <div className="p-6 bg-[#09090b] border-t border-[#27272a] text-xs text-[#71717A]">
        <p className="font-serif italic text-sm text-[#A1A1AA] mb-1">
          "films that make a difference"
        </p>
        <p className="text-[11px]">
          In permanent collections of 500+ universities worldwide.
        </p>
      </div>
    </div>
  );
};
