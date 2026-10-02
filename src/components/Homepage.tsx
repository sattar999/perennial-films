import React from 'react';
import { Play, ArrowRight, BookOpen, Clock, ShieldCheck, Award, Sparkles, ExternalLink } from 'lucide-react';
import { PERENNIAL_BRAND, FILMS, DIRECTOR_BIO, Film } from '../data/perennialFilmsData';

interface HomepageProps {
  onSelectFilm: (filmId: string) => void;
  onOpenTrailer: (film: Film) => void;
  onOpenPurchase: (film: Film) => void;
  setActiveTab: (tab: string) => void;
}

export const Homepage: React.FC<HomepageProps> = ({
  onSelectFilm,
  onOpenTrailer,
  onOpenPurchase,
  setActiveTab
}) => {
  const featuredFilm = FILMS[0]; // Gardening for the Planet
  const archiveFilms = FILMS.slice(1);

  return (
    <div className="w-full bg-[#121212] text-[#E4E4E7] space-y-24 sm:space-y-32 pb-24">
      {/* ========================================================
          SECTION 1: CINEMATIC HERO
          ======================================================== */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-[#27272a]">
        {/* Cinematic Backdrop Image with Measured Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={PERENNIAL_BRAND.heroImage}
            alt={PERENNIAL_BRAND.heroCaption}
            className="w-full h-full object-cover object-center brightness-60 filter contrast-105 scale-102 transition-transform duration-1000 ease-out"
            referrerPolicy="no-referrer"
          />
          {/* Multi-stage measured contrast scrim for AA legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/75 to-[#121212]/50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#121212]/60 to-[#121212]" />
        </div>

        {/* Hero Content Box */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-8">
          {/* Editorial Kicker */}
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#C29B38]">
            <span>Independent Documentary Cinema</span>
            <span aria-hidden="true">·</span>
            <span>Director Joanne Hershfield</span>
          </div>

          {/* Main Title & Tagline */}
          <div className="space-y-3">
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#F4F4F5] max-w-4xl mx-auto leading-[1.08] [text-wrap:balance]">
              {PERENNIAL_BRAND.name}
            </h1>
            <p className="font-serif italic text-xl sm:text-2xl text-[#D4D4D8] font-light max-w-2xl mx-auto">
              "{PERENNIAL_BRAND.tagline}"
            </p>
          </div>

          {/* Director's Introductory Statement */}
          <div className="max-w-3xl mx-auto pt-2">
            <blockquote className="font-serif text-lg sm:text-xl md:text-2xl text-[#E4E4E7]/90 leading-relaxed font-light italic">
              "{PERENNIAL_BRAND.directorStatement}"
            </blockquote>
            <p className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mt-4">
              — {PERENNIAL_BRAND.director}
            </p>
          </div>

          {/* Hero CTAs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onSelectFilm(featuredFilm.id)}
              className="px-6 py-3.5 rounded-lg bg-[#C29B38] hover:bg-[#d6ac42] text-black font-semibold text-sm tracking-wide transition-all shadow-lg shadow-[#C29B38]/10 cursor-pointer flex items-center gap-2"
            >
              <span>Explore Featured Film</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveTab('films')}
              className="px-6 py-3.5 rounded-lg bg-[#18181b]/90 hover:bg-[#27272a] text-[#F4F4F5] border border-[#3f3f46] font-medium text-sm tracking-wide transition-colors cursor-pointer flex items-center gap-2"
            >
              <span>Browse Catalog (6 Films)</span>
            </button>
          </div>

          {/* Caption marker for existing image */}
          <div className="pt-6">
            <span className="inline-block text-[11px] font-mono text-[#71717A] tracking-wider uppercase">
              {PERENNIAL_BRAND.heroCaption}
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 2: FEATURED FILM
          "Gardening for the Planet"
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#27272a] pb-4 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C29B38]">
              Flagship Presentation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F4F4F5] font-normal tracking-wide mt-1">
              Featured Documentary
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('films')}
            className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA] hover:text-[#C29B38] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>View All Films</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Cinematic Film Presentation Card */}
        <div className="bg-[#18181b] border border-[#2e2e33] rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Film Visual Artwork & Poster */}
          <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-[520px] bg-[#0c0c0e]">
            <img
              src={featuredFilm.coverImage}
              alt={featuredFilm.title}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#18181b] via-transparent to-transparent lg:hidden" />
            
            {/* Quick Trailer Button Overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <button
                onClick={() => onOpenTrailer(featuredFilm)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-black/85 hover:bg-black text-[#F4F4F5] text-xs font-medium backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-lg"
              >
                <Play className="w-3.5 h-3.5 text-[#C29B38] fill-[#C29B38]" />
                <span>Watch Official Trailer</span>
              </button>
              <span className="text-[11px] font-mono uppercase tracking-wider bg-black/80 px-2.5 py-1 rounded text-[#D4D4D8] border border-white/10">
                {featuredFilm.runtime}
              </span>
            </div>
          </div>

          {/* Film Content & Metadata */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Unboxed Metadata Line (No static pills!) */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#A1A1AA] font-mono">
                <span>{featuredFilm.year}</span>
                <span aria-hidden="true">·</span>
                <span>{featuredFilm.runtime}</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#C29B38]">CLOSED CAPTIONS</span>
                <span aria-hidden="true">·</span>
                <span>Directed by {featuredFilm.director}</span>
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#F4F4F5] font-normal tracking-tight">
                  {featuredFilm.title}
                </h3>
                {featuredFilm.tagline && (
                  <p className="font-serif italic text-lg text-[#C29B38] mt-1">
                    {featuredFilm.tagline}
                  </p>
                )}
              </div>

              {/* Exact Description */}
              <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed">
                {featuredFilm.shortDesc}
              </p>

              {/* Official Laurels & Festival Selections */}
              <div className="pt-2 border-t border-[#27272a] space-y-1.5">
                <p className="text-[11px] font-mono uppercase tracking-widest text-[#71717A]">
                  Official Selections & Honors
                </p>
                <div className="space-y-1">
                  {featuredFilm.awardsAndLaurels.map((award, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#E4E4E7]">
                      <Award className="w-3.5 h-3.5 text-[#C29B38] shrink-0" />
                      <span>{award}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suggested Courses / Academic Disciplines */}
              <div className="pt-2 border-t border-[#27272a]">
                <p className="text-[11px] font-mono uppercase tracking-widest text-[#71717A] mb-2">
                  Recommended Course Use
                </p>
                <p className="text-xs text-[#D4D4D8] leading-relaxed">
                  For courses in {featuredFilm.disciplines.join(', ')}.
                </p>
              </div>

              {/* Featured Quote / Rebecca Solnit */}
              {featuredFilm.featuredQuote && (
                <div className="bg-[#121212]/80 border-l-2 border-[#C29B38] p-4 rounded-r-lg">
                  <p className="font-serif italic text-xs sm:text-sm text-[#D4D4D8] leading-relaxed">
                    "{featuredFilm.featuredQuote.quote}"
                  </p>
                  <p className="text-[11px] font-mono text-[#A1A1AA] mt-1">
                    — {featuredFilm.featuredQuote.attribution}
                  </p>
                </div>
              )}
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-[#27272a] flex flex-wrap items-center gap-3">
              <button
                onClick={() => onSelectFilm(featuredFilm.id)}
                className="px-5 py-2.5 rounded-lg bg-[#F4F4F5] hover:bg-white text-black font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer"
              >
                Read Film Synopsis & Details
              </button>
              <button
                onClick={() => onOpenPurchase(featuredFilm)}
                className="px-5 py-2.5 rounded-lg bg-[#27272a] hover:bg-[#3f3f46] text-[#F4F4F5] border border-[#3f3f46] font-medium text-xs tracking-wider uppercase transition-colors cursor-pointer"
              >
                Watch / Purchase Options
              </button>
              <button
                onClick={() => onOpenTrailer(featuredFilm)}
                className="px-4 py-2.5 text-xs text-[#A1A1AA] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer ml-auto"
              >
                <Play className="w-3.5 h-3.5 text-[#C29B38]" />
                <span>Trailer</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 3: THE FILM COLLECTION (ARCHIVE)
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#27272a] pb-4 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C29B38]">
              The Perennial Archive
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F4F4F5] font-normal tracking-wide mt-1">
              Documentary Film Collection
            </h2>
            <p className="text-sm text-[#A1A1AA] mt-1 max-w-2xl font-light">
              Carefully researched documentaries exploring human resilience, global human rights, environmental stewardship, and social reform.
            </p>
          </div>
          <button
            onClick={() => setActiveTab('licensing')}
            className="text-xs font-mono uppercase tracking-wider text-[#C29B38] hover:text-[#d6ac42] flex items-center gap-1 cursor-pointer shrink-0"
          >
            <span>University & Non-Profit Licenses →</span>
          </button>
        </div>

        {/* Editorial Grid of Films */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {archiveFilms.map((film) => (
            <div
              key={film.id}
              className="group bg-[#18181b] border border-[#27272a] hover:border-[#3f3f46] rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-lg"
            >
              {/* Card Media Container */}
              <div>
                <div className="relative aspect-[16/10] bg-[#0c0c0e] overflow-hidden">
                  <img
                    src={film.coverImage}
                    alt={film.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18181b] via-transparent to-transparent opacity-80" />
                  
                  {/* Runtime and CC Indicator */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-[#D4D4D8]">
                    <span className="bg-black/80 px-2 py-0.5 rounded border border-white/10">
                      {film.runtime}
                    </span>
                    <span className="text-[#C29B38] font-medium bg-black/80 px-2 py-0.5 rounded border border-white/10">
                      CLOSED CAPTIONS
                    </span>
                  </div>
                </div>

                {/* Card Editorial Info */}
                <div className="p-6 space-y-3">
                  {/* Unboxed Metadata (Rule: No pills) */}
                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#71717A]">
                    <span>{film.year || 'Documentary'}</span>
                    <span aria-hidden="true">·</span>
                    <span>Dir. {film.director}</span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#F4F4F5] font-normal group-hover:text-[#C29B38] transition-colors leading-snug">
                    {film.title}
                  </h3>

                  <p className="text-xs text-[#A1A1AA] line-clamp-3 leading-relaxed">
                    {film.shortDesc}
                  </p>

                  {/* Course subject areas */}
                  <div className="pt-2 text-[11px] text-[#71717A] border-t border-[#27272a]">
                    <span className="font-mono text-[#A1A1AA]">Courses: </span>
                    <span>{film.disciplines.slice(0, 3).join(', ')}...</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-[#27272a]/40 mt-4 flex items-center justify-between">
                <button
                  onClick={() => onSelectFilm(film.id)}
                  className="text-xs font-semibold uppercase tracking-wider text-[#F4F4F5] hover:text-[#C29B38] transition-colors cursor-pointer"
                >
                  View Film Details →
                </button>
                <button
                  onClick={() => onOpenPurchase(film)}
                  className="text-xs text-[#A1A1AA] hover:text-[#F4F4F5] transition-colors cursor-pointer font-mono"
                >
                  Watch / Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          SECTION 4: DIRECTOR PROFILE & SPEAKING ENGAGEMENTS
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#141416] border border-[#27272a] rounded-2xl p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Portrait Image */}
          <div className="lg:col-span-4">
            <div className="aspect-[4/5] rounded-xl overflow-hidden border border-[#2e2e33] bg-[#0c0c0e] relative shadow-xl">
              <img
                src={DIRECTOR_BIO.portrait}
                alt={DIRECTOR_BIO.caption}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/60 to-transparent p-4">
                <p className="text-[11px] font-mono text-[#D4D4D8] leading-tight">
                  {DIRECTOR_BIO.caption}
                </p>
              </div>
            </div>
          </div>

          {/* Biography Text & Speaking Note */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C29B38]">
                Filmmaker & Academic
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F4F4F5] font-normal tracking-wide mt-1">
                {DIRECTOR_BIO.name}
              </h2>
              <p className="text-xs text-[#A1A1AA] font-mono mt-0.5">
                {DIRECTOR_BIO.role}
              </p>
            </div>

            <div className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed space-y-4 font-light">
              <p>
                I graduated from the Stanford University film program and have been producing documentary films for forty years. I also taught at the University of North Carolina at Chapel Hill and was Director of the Department of Women's and Gender Studies.
              </p>
              <p>
                My films are in the permanent collections of over five hundred universities and libraries in the U.S., Japan, Canada, and Australia.
              </p>
            </div>

            {/* Speaking Engagements CTA Box */}
            <div className="p-5 rounded-xl bg-[#1c1c1f] border border-[#2e2e33] space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#F4F4F5]">
                Speaking Engagements & Campus Screenings
              </h4>
              <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                Joanne is available for virtual and in-person speaking engagements, classroom Q&A discussions, and campus screenings.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setActiveTab('contact')}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C29B38] hover:text-[#e4be58] transition-colors cursor-pointer"
                >
                  <span>Inquire for Speaking or Discussion →</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
