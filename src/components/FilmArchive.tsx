import React, { useState, useMemo } from 'react';
import { Search, Play, ArrowRight, BookOpen, Clock, ShieldCheck, Filter } from 'lucide-react';
import { FILMS, Film } from '../data/perennialFilmsData';

interface FilmArchiveProps {
  onSelectFilm: (filmId: string) => void;
  onOpenTrailer: (film: Film) => void;
  onOpenPurchase: (film: Film) => void;
}

export const FilmArchive: React.FC<FilmArchiveProps> = ({
  onSelectFilm,
  onOpenTrailer,
  onOpenPurchase
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDiscipline, setSelectedDiscipline] = useState('All');

  // Extract all distinct disciplines
  const disciplineOptions = [
    'All',
    'Climate & Environmental Studies',
    "Women's & Gender Studies",
    'Disability Studies',
    'African & Diaspora Studies',
    'Criminal Justice & Social Work',
    'Public Health & Sociology'
  ];

  // Filtering logic
  const filteredFilms = useMemo(() => {
    return FILMS.filter((film) => {
      const matchesSearch =
        film.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        film.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        film.disciplines.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase())) ||
        film.themes.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      if (!matchesSearch) return false;

      if (selectedDiscipline === 'All') return true;
      if (selectedDiscipline === 'Climate & Environmental Studies') {
        return film.disciplines.some((d) =>
          ['botany', 'biology', 'climate', 'ecology', 'horticulture'].some((k) =>
            d.toLowerCase().includes(k)
          )
        );
      }
      if (selectedDiscipline === "Women's & Gender Studies") {
        return film.disciplines.some((d) =>
          d.toLowerCase().includes('women') || d.toLowerCase().includes('gender')
        );
      }
      if (selectedDiscipline === 'Disability Studies') {
        return film.disciplines.some((d) =>
          d.toLowerCase().includes('disability') || d.toLowerCase().includes('special education')
        );
      }
      if (selectedDiscipline === 'African & Diaspora Studies') {
        return film.disciplines.some((d) =>
          d.toLowerCase().includes('african') || d.toLowerCase().includes('diaspora')
        );
      }
      if (selectedDiscipline === 'Criminal Justice & Social Work') {
        return film.disciplines.some((d) =>
          d.toLowerCase().includes('criminal') ||
          d.toLowerCase().includes('carceral') ||
          d.toLowerCase().includes('social work')
        );
      }
      if (selectedDiscipline === 'Public Health & Sociology') {
        return film.disciplines.some((d) =>
          d.toLowerCase().includes('public health') || d.toLowerCase().includes('sociology')
        );
      }
      return true;
    });
  }, [searchQuery, selectedDiscipline]);

  return (
    <div className="w-full bg-[#121212] text-[#E4E4E7] min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Archive Editorial Header */}
        <div className="border-b border-[#27272a] pb-8 space-y-4">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#C29B38]">
            Perennial Films Catalog
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#F4F4F5] tracking-tight">
            The Film Archive
          </h1>
          <p className="text-sm sm:text-base text-[#A1A1AA] max-w-3xl font-light leading-relaxed">
            Independent documentaries directed by Joanne Hershfield. Available for educational institutional licensing (PPR & DSL), university library collections, community screenings, and individual digital streaming.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="space-y-4 bg-[#18181b] p-4 sm:p-6 rounded-xl border border-[#27272a]">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#71717A]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by film title, topic, academic discipline (e.g. Botany, Black Panther, Human Rights)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#121212] border border-[#2e2e33] text-sm text-[#F4F4F5] placeholder-[#71717A] focus:outline-none focus:border-[#C29B38] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#71717A] hover:text-[#E4E4E7] font-mono"
              >
                Clear
              </button>
            )}
          </div>

          {/* Interactive Filter Tabs (Buttons allowed by constitution) */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-xs font-mono uppercase tracking-wider text-[#71717A] mr-2 flex items-center gap-1">
              <Filter className="w-3 h-3 text-[#C29B38]" />
              <span>Discipline:</span>
            </span>
            {disciplineOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setSelectedDiscipline(opt)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  selectedDiscipline === opt
                    ? 'bg-[#C29B38] text-black font-semibold shadow-sm'
                    : 'bg-[#121212] text-[#A1A1AA] hover:text-[#F4F4F5] hover:bg-[#27272a]'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Film Results Counter */}
        <div className="flex items-center justify-between text-xs font-mono text-[#71717A]">
          <span>
            SHOWING <strong className="text-[#E4E4E7]">{filteredFilms.length}</strong> OF{' '}
            {FILMS.length} DOCUMENTARIES
          </span>
          {selectedDiscipline !== 'All' && (
            <button
              onClick={() => setSelectedDiscipline('All')}
              className="text-[#C29B38] hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Films Archive Grid */}
        {filteredFilms.length === 0 ? (
          <div className="py-20 text-center space-y-3 bg-[#18181b] rounded-xl border border-[#27272a]">
            <p className="font-serif text-2xl text-[#F4F4F5]">No documentaries found</p>
            <p className="text-xs text-[#A1A1AA] max-w-md mx-auto">
              No films match your search term "{searchQuery}". Try searching for broader terms like "human rights", "plants", "children", or "women".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedDiscipline('All');
              }}
              className="mt-3 px-4 py-2 rounded bg-[#27272a] text-xs font-mono text-[#E4E4E7] hover:bg-[#3f3f46]"
            >
              Clear Search & Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFilms.map((film) => (
              <div
                key={film.id}
                className="group bg-[#18181b] border border-[#27272a] hover:border-[#3f3f46] rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-lg"
              >
                {/* Visual Area */}
                <div>
                  <div className="relative aspect-[16/10] bg-[#0c0c0e] overflow-hidden">
                    <img
                      src={film.coverImage}
                      alt={film.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#18181b] via-transparent to-transparent opacity-85" />

                    {/* Quick Trailer Button Overlay */}
                    <button
                      onClick={() => onOpenTrailer(film)}
                      className="absolute top-3 right-3 p-2 rounded-full bg-black/80 hover:bg-black text-[#F4F4F5] border border-white/20 transition-transform active:scale-95 shadow-md"
                      title="Play Trailer"
                    >
                      <Play className="w-3.5 h-3.5 fill-[#C29B38] text-[#C29B38]" />
                    </button>

                    {/* Metadata strip */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-[#D4D4D8]">
                      <span className="bg-black/80 px-2 py-0.5 rounded border border-white/10">
                        {film.runtime}
                      </span>
                      <span className="text-[#C29B38] font-medium bg-black/80 px-2 py-0.5 rounded border border-white/10">
                        CLOSED CAPTIONS
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    {/* Unboxed Metadata Line (No pills) */}
                    <div className="flex items-center gap-2 text-[11px] font-mono text-[#71717A]">
                      <span>{film.year || 'Documentary'}</span>
                      <span aria-hidden="true">·</span>
                      <span>Dir. {film.director}</span>
                    </div>

                    <h3 className="font-serif text-2xl text-[#F4F4F5] font-normal group-hover:text-[#C29B38] transition-colors leading-snug">
                      {film.title}
                    </h3>

                    {film.tagline && (
                      <p className="font-serif italic text-xs text-[#C29B38] -mt-1">
                        {film.tagline}
                      </p>
                    )}

                    <p className="text-xs text-[#A1A1AA] line-clamp-3 leading-relaxed">
                      {film.shortDesc}
                    </p>

                    {/* Course list */}
                    <div className="pt-2 text-[11px] text-[#71717A] border-t border-[#27272a] space-y-1">
                      <p className="font-mono text-[#A1A1AA]">Recommended Courses:</p>
                      <p className="text-[#D4D4D8] line-clamp-2">
                        {film.disciplines.join(', ')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="p-6 pt-0 border-t border-[#27272a]/40 mt-4 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectFilm(film.id)}
                    className="text-xs font-semibold uppercase tracking-wider text-[#F4F4F5] hover:text-[#C29B38] transition-colors cursor-pointer"
                  >
                    View Synopsis & Reviews →
                  </button>
                  <button
                    onClick={() => onOpenPurchase(film)}
                    className="px-3 py-1.5 rounded bg-[#27272a] hover:bg-[#3f3f46] text-xs font-medium text-[#F4F4F5] border border-[#3f3f46] transition-colors cursor-pointer"
                  >
                    Watch / License
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
