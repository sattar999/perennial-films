import React from 'react';
import { Film as FilmIcon, ShoppingBag, Menu, X, Play, BookOpen, User, Layers } from 'lucide-react';
import { PERENNIAL_BRAND } from '../data/perennialFilmsData';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cartCount: number;
  openCart: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  onOpenAudit: () => void;
  onOpenLibrary: () => void;
  hasPurchasedFilms: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  openCart,
  mobileMenuOpen,
  setMobileMenuOpen,
  onOpenAudit,
  onOpenLibrary,
  hasPurchasedFilms
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#121212]/95 backdrop-blur-md border-b border-[#27272a] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark (Single text element in editorial face) */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => {
              setActiveTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-left group cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C29B38]"
          >
            <span className="font-serif text-2xl sm:text-3xl font-normal tracking-wide text-[#F4F4F5] group-hover:text-[#C29B38] transition-colors">
              {PERENNIAL_BRAND.name}
            </span>
            <span className="block text-[11px] uppercase tracking-[0.2em] text-[#A1A1AA] font-sans font-light -mt-1 group-hover:text-[#D4D4D8] transition-colors">
              {PERENNIAL_BRAND.tagline}
            </span>
          </button>
        </div>

        {/* Zone 2: Clean text navigation links (4-5 links, text with hover underlines) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <button
            onClick={() => setActiveTab('home')}
            className={`transition-colors pb-1 cursor-pointer ${
              activeTab === 'home'
                ? 'text-[#F4F4F5] border-b-2 border-[#C29B38]'
                : 'text-[#A1A1AA] hover:text-[#F4F4F5]'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('films')}
            className={`transition-colors pb-1 cursor-pointer ${
              activeTab === 'films'
                ? 'text-[#F4F4F5] border-b-2 border-[#C29B38]'
                : 'text-[#A1A1AA] hover:text-[#F4F4F5]'
            }`}
          >
            Films & Catalog
          </button>
          <button
            onClick={() => setActiveTab('licensing')}
            className={`transition-colors pb-1 cursor-pointer ${
              activeTab === 'licensing'
                ? 'text-[#F4F4F5] border-b-2 border-[#C29B38]'
                : 'text-[#A1A1AA] hover:text-[#F4F4F5]'
            }`}
          >
            Purchase & Licensing
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`transition-colors pb-1 cursor-pointer ${
              activeTab === 'about'
                ? 'text-[#F4F4F5] border-b-2 border-[#C29B38]'
                : 'text-[#A1A1AA] hover:text-[#F4F4F5]'
            }`}
          >
            About Joanne
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`transition-colors pb-1 cursor-pointer ${
              activeTab === 'contact'
                ? 'text-[#F4F4F5] border-b-2 border-[#C29B38]'
                : 'text-[#A1A1AA] hover:text-[#F4F4F5]'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: Primary Actions (Audit Report, Library, Cart & Mobile Toggle) */}
        <div className="flex items-center gap-3">
          {/* Strategy & Audit Brief Trigger */}
          <button
            onClick={onOpenAudit}
            className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#A1A1AA] hover:text-[#F4F4F5] bg-[#1c1c1f] hover:bg-[#27272a] rounded border border-[#2e2e33] transition-colors cursor-pointer"
            title="View 10-Phase Redesign Strategy & Content Audit"
          >
            <Layers className="w-3.5 h-3.5 text-[#C29B38]" />
            <span>Design Audit & Specs</span>
          </button>

          {/* My Library Button */}
          <button
            onClick={onOpenLibrary}
            className={`hidden sm:inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded border transition-colors cursor-pointer ${
              hasPurchasedFilms
                ? 'bg-[#18181b] text-[#E4E4E7] border-[#C29B38]/50 hover:border-[#C29B38]'
                : 'bg-transparent text-[#A1A1AA] border-[#27272a] hover:text-[#F4F4F5] hover:border-[#3f3f46]'
            }`}
          >
            <User className="w-3.5 h-3.5 text-[#C29B38]" />
            <span>My Library</span>
            {hasPurchasedFilms && (
              <span className="w-2 h-2 rounded-full bg-[#C29B38]" />
            )}
          </button>

          {/* Cart Icon Button */}
          <button
            onClick={openCart}
            className="relative p-2 text-[#A1A1AA] hover:text-[#F4F4F5] bg-[#1c1c1f] hover:bg-[#27272a] rounded-lg border border-[#2e2e33] transition-colors cursor-pointer"
            aria-label="View Shopping Cart"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#C29B38] text-[10px] font-bold text-black tabular-nums">
                {cartCount}
              </span>
            )}
          </button>

          {/* Streamlined Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#A1A1AA] hover:text-[#F4F4F5] bg-[#1c1c1f] hover:bg-[#27272a] rounded-lg border border-[#2e2e33] transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>
  );
};
