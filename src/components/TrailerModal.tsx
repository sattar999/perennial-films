import React, { useEffect } from 'react';
import { X, ExternalLink, Play, Film as FilmIcon } from 'lucide-react';
import { Film } from '../data/perennialFilmsData';

interface TrailerModalProps {
  film: Film | null;
  onClose: () => void;
  onOpenPurchase: (film: Film) => void;
}

export const TrailerModal: React.FC<TrailerModalProps> = ({ film, onClose, onOpenPurchase }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!film) return null;

  // Use Vimeo embed if available, otherwise video placeholder
  const embedUrl = film.trailerVimeoId
    ? `https://player.vimeo.com/video/${film.trailerVimeoId}?autoplay=1&dnt=1`
    : `https://player.vimeo.com/video/916786865?autoplay=1&dnt=1`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#141416] border border-[#2e2e33] rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Top Modal Header */}
        <div className="px-6 py-4 border-b border-[#27272a] flex items-center justify-between bg-[#18181b]">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C29B38]">
              Official Film Trailer
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#F4F4F5] font-normal">
              {film.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#27272a] text-[#A1A1AA] hover:text-white hover:bg-[#3f3f46] transition-colors cursor-pointer"
            aria-label="Close Trailer Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 16:9 Video Player Container */}
        <div className="relative aspect-video bg-black w-full overflow-hidden">
          <iframe
            src={embedUrl}
            title={`${film.title} Trailer`}
            className="w-full h-full border-0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Bottom Film Details & Purchase Action */}
        <div className="p-6 bg-[#18181b] border-t border-[#27272a] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA]">
              <span>{film.runtime}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#C29B38]">CLOSED CAPTIONS</span>
              <span aria-hidden="true">·</span>
              <span>Dir. {film.director}</span>
            </div>
            <p className="text-xs text-[#D4D4D8] line-clamp-1">
              Recommended for courses in {film.disciplines.slice(0, 3).join(', ')}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenPurchase(film);
              }}
              className="px-5 py-2.5 rounded-lg bg-[#C29B38] hover:bg-[#d6ac42] text-black font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer"
            >
              Order Streaming License
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
