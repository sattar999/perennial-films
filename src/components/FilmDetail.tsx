import React, { useState } from 'react';
import { Play, ArrowLeft, ArrowRight, BookOpen, Clock, ShieldCheck, Award, Check, FileText, Share2, HelpCircle } from 'lucide-react';
import { Film, FILMS } from '../data/perennialFilmsData';

interface FilmDetailProps {
  film: Film;
  onBack: () => void;
  onSelectFilm: (filmId: string) => void;
  onOpenTrailer: (film: Film) => void;
  onOpenPurchase: (film: Film) => void;
  onWatchNow?: (film: Film) => void;
}

export const FilmDetail: React.FC<FilmDetailProps> = ({
  film,
  onBack,
  onSelectFilm,
  onOpenTrailer,
  onOpenPurchase,
  onWatchNow
}) => {
  const [selectedPricingTab, setSelectedPricingTab] = useState<'institutional' | 'home'>('institutional');
  const [copiedLink, setCopiedLink] = useState(false);

  const relatedFilms = FILMS.filter((f) => f.id !== film.id).slice(0, 3);

  const handleCopyShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="w-full bg-[#121212] text-[#E4E4E7] pb-24">
      {/* Top Breadcrumb & Navigation */}
      <div className="border-b border-[#27272a] bg-[#141416]/60 backdrop-blur-sm sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between text-xs font-mono text-[#A1A1AA]">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 hover:text-[#F4F4F5] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Films</span>
          </button>
          
          <div className="flex items-center gap-4">
            <button
              onClick={handleCopyShare}
              className="flex items-center gap-1 hover:text-[#C29B38] transition-colors cursor-pointer"
              title="Copy link to film"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Cinematic Film Hero Banner */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-end overflow-hidden border-b border-[#27272a] bg-[#0c0c0e]">
        <div className="absolute inset-0">
          <img
            src={film.coverImage}
            alt={film.title}
            className="w-full h-full object-cover object-center brightness-50 contrast-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full space-y-6">
          {/* Metadata line without pills */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#A1A1AA]">
            <span>{film.year || 'Documentary'}</span>
            <span aria-hidden="true">·</span>
            <span>{film.runtime}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#C29B38] font-semibold">CLOSED CAPTIONS</span>
            <span aria-hidden="true">·</span>
            <span>Director: {film.director}</span>
          </div>

          <div className="space-y-2">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F4F4F5] font-normal tracking-tight">
              {film.title}
            </h1>
            {film.tagline && (
              <p className="font-serif italic text-xl sm:text-2xl text-[#C29B38] font-light">
                {film.tagline}
              </p>
            )}
          </div>

          {/* Quick Actions in Hero */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenTrailer(film)}
              className="px-6 py-3 rounded-lg bg-[#C29B38] hover:bg-[#d6ac42] text-black font-semibold text-sm tracking-wide transition-all flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <Play className="w-4 h-4 fill-black text-black" />
              <span>Watch Trailer</span>
            </button>
            <button
              onClick={() => onOpenPurchase(film)}
              className="px-6 py-3 rounded-lg bg-[#1c1c20] hover:bg-[#27272a] text-[#F4F4F5] border border-[#3f3f46] font-medium text-sm tracking-wide transition-colors cursor-pointer"
            >
              Order Streaming License / DVD
            </button>
            {onWatchNow && (
              <button
                onClick={() => onWatchNow(film)}
                className="px-5 py-3 rounded-lg bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 border border-emerald-600/40 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
              >
                Access Screening Room →
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Layout: 2 Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Editorial Body (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Featured Literary / Press Quote */}
            {film.featuredQuote && (
              <div className="p-6 rounded-xl bg-[#18181b] border-l-4 border-[#C29B38] border-[#27272a] space-y-3">
                <blockquote className="font-serif italic text-base sm:text-lg text-[#E4E4E7] leading-relaxed">
                  "{film.featuredQuote.quote}"
                </blockquote>
                <p className="text-xs font-mono text-[#A1A1AA] uppercase tracking-wider">
                  — {film.featuredQuote.attribution}
                </p>
              </div>
            )}

            {/* Synopsis & Overview */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#F4F4F5] font-normal border-b border-[#27272a] pb-3">
                Film Synopsis
              </h2>
              <div className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed space-y-4 font-light whitespace-pre-line">
                {film.fullDescription}
              </div>
            </div>

            {/* Academic Courses & Curriculum Relevance */}
            <div className="p-6 rounded-xl bg-[#18181b] border border-[#27272a] space-y-4">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#C29B38]" />
                <h3 className="font-serif text-xl text-[#F4F4F5] font-normal">
                  Educational & Course Relevance
                </h3>
              </div>
              <p className="text-xs font-mono uppercase tracking-wider text-[#71717A]">
                Recommended for courses in:
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-[#E4E4E7]">
                {film.disciplines.map((discipline, idx) => (
                  <span
                    key={idx}
                    className="bg-[#242428] px-3 py-1.5 rounded-md border border-[#333338]"
                  >
                    {discipline}
                  </span>
                ))}
              </div>
            </div>

            {/* Extended Long-Form Editorial Sections (Preserved Unabridged from live site) */}
            {film.extendedSections && film.extendedSections.length > 0 && (
              <div className="space-y-10 pt-4">
                {film.extendedSections.map((sec, i) => (
                  <div key={i} className="space-y-3 border-t border-[#27272a] pt-8">
                    <h3 className="font-serif text-2xl text-[#F4F4F5] font-normal tracking-wide">
                      {sec.heading}
                    </h3>
                    <div className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed space-y-3 font-light">
                      {sec.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Supporting Imagery / Film Stills */}
            {film.stills && film.stills.length > 0 && (
              <div className="space-y-4 border-t border-[#27272a] pt-8">
                <h3 className="font-serif text-2xl text-[#F4F4F5] font-normal">
                  Production Photography & Laurels
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {film.stills.map((still, idx) => (
                    <div key={idx} className="rounded-lg overflow-hidden border border-[#27272a] bg-[#0c0c0e]">
                      <img
                        src={still}
                        alt={`${film.title} production still ${idx + 1}`}
                        className="w-full h-48 sm:h-56 object-cover hover:scale-102 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Academic Reviews & Testimonials */}
            {film.reviews && film.reviews.length > 0 && (
              <div className="space-y-6 border-t border-[#27272a] pt-8">
                <div className="flex items-center justify-between border-b border-[#27272a] pb-3">
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#F4F4F5] font-normal">
                    Critical & Academic Reception
                  </h2>
                  <span className="text-xs font-mono text-[#71717A]">
                    {film.reviews.length} REVIEWS
                  </span>
                </div>

                <div className="space-y-6">
                  {film.reviews.map((rev, revIdx) => (
                    <div
                      key={revIdx}
                      className="p-6 rounded-xl bg-[#18181b] border border-[#27272a] space-y-3"
                    >
                      <blockquote className="font-serif italic text-sm sm:text-base text-[#D4D4D8] leading-relaxed">
                        "{rev.quote}"
                      </blockquote>
                      <div className="pt-2 border-t border-[#27272a] flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                        <span className="font-medium text-[#F4F4F5]">
                          {rev.author}
                        </span>
                        {rev.titleOrOrg && (
                          <span className="text-[#A1A1AA] font-light">
                            {rev.titleOrOrg}
                          </span>
                        )}
                        {rev.source && (
                          <span className="text-[#C29B38] font-mono text-[11px]">
                            [{rev.source}]
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar / VOD & Licensing Panel (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Purchase & Licensing Sticky Box */}
            <div className="bg-[#18181b] border border-[#2e2e33] rounded-2xl p-6 space-y-6 sticky top-36 shadow-xl">
              <div className="border-b border-[#27272a] pb-4">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C29B38]">
                  Ordering Options
                </span>
                <h3 className="font-serif text-2xl text-[#F4F4F5] font-normal mt-1">
                  Watch or License Film
                </h3>
                <p className="text-xs text-[#A1A1AA] mt-1 font-light">
                  Public performance rights (PPR), digital site licensing (DSL), or home viewing.
                </p>
              </div>

              {/* Toggle Segmented Control for Licensing Type */}
              <div className="flex rounded-lg bg-[#121212] p-1 border border-[#27272a]">
                <button
                  onClick={() => setSelectedPricingTab('institutional')}
                  className={`flex-1 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                    selectedPricingTab === 'institutional'
                      ? 'bg-[#27272a] text-[#F4F4F5] shadow'
                      : 'text-[#A1A1AA] hover:text-[#F4F4F5]'
                  }`}
                >
                  Educational / PPR
                </button>
                <button
                  onClick={() => setSelectedPricingTab('home')}
                  className={`flex-1 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                    selectedPricingTab === 'home'
                      ? 'bg-[#27272a] text-[#F4F4F5] shadow'
                      : 'text-[#A1A1AA] hover:text-[#F4F4F5]'
                  }`}
                >
                  Home Viewing
                </button>
              </div>

              {/* Institutional Options Tab */}
              {selectedPricingTab === 'institutional' && (
                <div className="space-y-4">
                  {film.pricing.universityLicense && (
                    <div className="p-4 rounded-xl bg-[#121212] border border-[#2e2e33] space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono uppercase text-[#A1A1AA]">
                          University & College
                        </span>
                        <span className="text-lg font-mono font-semibold text-[#F4F4F5] tabular-nums">
                          ${film.pricing.universityLicense.price.toFixed(2)}
                        </span>
                      </div>
                      <p className="text-xs text-[#D4D4D8] font-medium leading-snug">
                        {film.pricing.universityLicense.label}
                      </p>
                      <p className="text-[11px] text-[#71717A] leading-tight">
                        {film.pricing.universityLicense.terms}
                      </p>
                      <button
                        onClick={() => onOpenPurchase(film)}
                        className="w-full mt-2 py-2 px-3 rounded bg-[#C29B38] hover:bg-[#d6ac42] text-black text-xs font-semibold tracking-wide transition-colors cursor-pointer"
                      >
                        Order University License
                      </button>
                    </div>
                  )}

                  {film.pricing.nonProfitLicense && (
                    <div className="p-4 rounded-xl bg-[#121212] border border-[#2e2e33] space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono uppercase text-[#A1A1AA]">
                          Non-Profit / 2-Year
                        </span>
                        <span className="text-lg font-mono font-semibold text-[#F4F4F5] tabular-nums">
                          ${film.pricing.nonProfitLicense.price.toFixed(2)}
                        </span>
                      </div>
                      <p className="text-xs text-[#D4D4D8] font-medium leading-snug">
                        {film.pricing.nonProfitLicense.label}
                      </p>
                      <p className="text-[11px] text-[#71717A] leading-tight">
                        {film.pricing.nonProfitLicense.terms}
                      </p>
                      <button
                        onClick={() => onOpenPurchase(film)}
                        className="w-full mt-2 py-2 px-3 rounded bg-[#27272a] hover:bg-[#3f3f46] text-[#F4F4F5] text-xs font-medium tracking-wide transition-colors cursor-pointer"
                      >
                        Order Non-Profit License
                      </button>
                    </div>
                  )}

                  {/* Purchase Order (P.O.) notice */}
                  <div className="p-3 rounded-lg bg-[#141416] border border-[#27272a] text-[11px] text-[#A1A1AA] leading-relaxed">
                    <span className="font-mono text-[#E4E4E7]">Purchase Orders (P.O.): </span>
                    We accept institutional purchase orders. Inquire directly at{' '}
                    <a href="mailto:info@perennial-films.com" className="text-[#C29B38] underline">
                      info@perennial-films.com
                    </a>.
                  </div>
                </div>
              )}

              {/* Home Viewing Tab */}
              {selectedPricingTab === 'home' && (
                <div className="space-y-4">
                  {film.pricing.homeRental && (
                    <div className="p-4 rounded-xl bg-[#121212] border border-[#2e2e33] space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono uppercase text-[#A1A1AA]">
                          Digital Stream Rent
                        </span>
                        <span className="text-lg font-mono font-semibold text-[#F4F4F5] tabular-nums">
                          ${film.pricing.homeRental.price.toFixed(2)}
                        </span>
                      </div>
                      <p className="text-xs text-[#D4D4D8] font-medium">
                        {film.pricing.homeRental.period}
                      </p>
                      <button
                        onClick={() => onOpenPurchase(film)}
                        className="w-full mt-2 py-2 px-3 rounded bg-[#27272a] hover:bg-[#3f3f46] text-[#F4F4F5] text-xs font-medium tracking-wide transition-colors cursor-pointer"
                      >
                        Rent 48-Hour Stream
                      </button>
                    </div>
                  )}

                  {film.pricing.homePurchase && (
                    <div className="p-4 rounded-xl bg-[#121212] border border-[#2e2e33] space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono uppercase text-[#A1A1AA]">
                          Digital Purchase
                        </span>
                        <span className="text-lg font-mono font-semibold text-[#F4F4F5] tabular-nums">
                          ${film.pricing.homePurchase.price.toFixed(2)}
                        </span>
                      </div>
                      <p className="text-xs text-[#D4D4D8] font-medium">
                        {film.pricing.homePurchase.format}
                      </p>
                      <button
                        onClick={() => onOpenPurchase(film)}
                        className="w-full mt-2 py-2 px-3 rounded bg-[#C29B38] hover:bg-[#d6ac42] text-black text-xs font-semibold tracking-wide transition-colors cursor-pointer"
                      >
                        Buy Lifetime Digital
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Festival selections / Laurels */}
              {film.awardsAndLaurels && film.awardsAndLaurels.length > 0 && (
                <div className="pt-4 border-t border-[#27272a] space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#71717A]">
                    Selections & Recognition
                  </span>
                  <div className="space-y-1.5">
                    {film.awardsAndLaurels.map((al, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#D4D4D8]">
                        <Award className="w-3.5 h-3.5 text-[#C29B38] shrink-0 mt-0.5" />
                        <span className="leading-snug">{al}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quick Catalog Switcher */}
            <div className="p-5 rounded-xl bg-[#18181b] border border-[#27272a] space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#A1A1AA]">
                Switch to Another Film
              </h4>
              <div className="space-y-1">
                {FILMS.map((otherFilm) => (
                  <button
                    key={otherFilm.id}
                    onClick={() => onSelectFilm(otherFilm.id)}
                    className={`w-full text-left py-2 px-3 rounded text-xs transition-colors flex items-center justify-between cursor-pointer ${
                      otherFilm.id === film.id
                        ? 'bg-[#C29B38]/10 text-[#C29B38] font-semibold'
                        : 'text-[#A1A1AA] hover:text-[#F4F4F5] hover:bg-[#27272a]'
                    }`}
                  >
                    <span className="truncate pr-2">{otherFilm.title}</span>
                    <span className="text-[10px] font-mono text-[#71717A] shrink-0">
                      {otherFilm.runtime}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Films Row */}
        <div className="mt-20 pt-12 border-t border-[#27272a] space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-2xl text-[#F4F4F5] font-normal">
              Other Documentaries by Joanne Hershfield
            </h3>
            <button
              onClick={onBack}
              className="text-xs font-mono uppercase text-[#C29B38] hover:underline cursor-pointer"
            >
              View All 6 Documentaries →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedFilms.map((rf) => (
              <div
                key={rf.id}
                onClick={() => onSelectFilm(rf.id)}
                className="group cursor-pointer bg-[#18181b] border border-[#27272a] hover:border-[#3f3f46] rounded-xl overflow-hidden transition-all duration-200"
              >
                <div className="aspect-[16/10] bg-[#0c0c0e] relative overflow-hidden">
                  <img
                    src={rf.coverImage}
                    alt={rf.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-2 left-2 text-[10px] font-mono bg-black/80 px-2 py-0.5 rounded text-[#D4D4D8]">
                    {rf.runtime}
                  </div>
                </div>
                <div className="p-4 space-y-1">
                  <h4 className="font-serif text-lg text-[#F4F4F5] group-hover:text-[#C29B38] transition-colors leading-snug">
                    {rf.title}
                  </h4>
                  <p className="text-xs text-[#A1A1AA] line-clamp-2">
                    {rf.shortDesc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
