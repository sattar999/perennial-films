import React, { useState } from 'react';
import { ArrowLeft, Maximize2, Volume2, Subtitles, BookOpen, Clock, FileText, CheckCircle } from 'lucide-react';
import { Film } from '../data/perennialFilmsData';

interface CinemaPlayerProps {
  film: Film;
  onExit: () => void;
}

export const CinemaPlayer: React.FC<CinemaPlayerProps> = ({ film, onExit }) => {
  const [showNotes, setShowNotes] = useState(false);
  const [captionsActive, setCaptionsActive] = useState(true);

  const embedUrl = film.trailerVimeoId
    ? `https://player.vimeo.com/video/${film.trailerVimeoId}?autoplay=1&dnt=1`
    : `https://player.vimeo.com/video/916786865?autoplay=1&dnt=1`;

  return (
    <div className="fixed inset-0 z-50 bg-[#050505] text-[#E4E4E7] flex flex-col justify-between overflow-hidden animate-in fade-in duration-300">
      {/* Top Screening Room Bar */}
      <div className="px-6 py-4 border-b border-[#1c1c1f] flex items-center justify-between bg-[#0a0a0c]/90 backdrop-blur-md z-10">
        <div className="flex items-center gap-4">
          <button
            onClick={onExit}
            className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA] hover:text-[#F4F4F5] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Exit Screening Room</span>
          </button>
          <span className="text-[#3f3f46]">|</span>
          <div>
            <h2 className="font-serif text-lg text-[#F4F4F5] font-normal leading-tight">
              {film.title}
            </h2>
            <div className="flex items-center gap-2 text-[10px] font-mono text-[#71717A]">
              <span>{film.runtime}</span>
              <span>·</span>
              <span>Directed by {film.director}</span>
              <span>·</span>
              <span className="text-[#C29B38]">PPR & DSL ACTIVE</span>
            </div>
          </div>
        </div>

        {/* Player Controls Bar */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setCaptionsActive(!captionsActive)}
            className={`px-3 py-1.5 rounded text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer ${
              captionsActive
                ? 'bg-[#C29B38]/20 text-[#C29B38] border border-[#C29B38]/40'
                : 'bg-[#18181b] text-[#71717A] border border-[#27272a]'
            }`}
            title="Toggle Closed Captions (CC)"
          >
            <Subtitles className="w-3.5 h-3.5" />
            <span>CC: {captionsActive ? 'ON' : 'OFF'}</span>
          </button>

          <button
            onClick={() => setShowNotes(!showNotes)}
            className={`px-3 py-1.5 rounded text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer ${
              showNotes
                ? 'bg-[#27272a] text-[#F4F4F5] border border-[#3f3f46]'
                : 'bg-[#18181b] text-[#A1A1AA] border border-[#27272a]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-[#C29B38]" />
            <span>Classroom Study Guide</span>
          </button>
        </div>
      </div>

      {/* Main Video Viewport & Optional Notes Drawer */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Cinema Video Canvas */}
        <div className="flex-1 bg-black flex items-center justify-center relative">
          <div className="w-full h-full max-h-[85vh] aspect-video">
            <iframe
              src={embedUrl}
              title={`${film.title} Cinema Screening`}
              className="w-full h-full border-0 shadow-2xl"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Classroom & Seminar Discussion Sidebar */}
        {showNotes && (
          <div className="w-80 md:w-96 bg-[#0e0e10] border-l border-[#1f1f23] p-6 overflow-y-auto space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="border-b border-[#27272a] pb-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C29B38]">
                  Curriculum Companion
                </span>
                <h3 className="font-serif text-xl text-[#F4F4F5] mt-0.5">
                  Educational Discussion Guide
                </h3>
              </div>

              {/* Course suggestions */}
              <div className="space-y-2">
                <p className="text-xs font-mono uppercase tracking-wider text-[#71717A]">
                  Course Alignments
                </p>
                <div className="flex flex-wrap gap-1.5 text-xs text-[#D4D4D8]">
                  {film.disciplines.map((d, i) => (
                    <span key={i} className="bg-[#18181b] px-2 py-1 rounded border border-[#27272a]">
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              {/* Discussion Prompts */}
              <div className="space-y-2">
                <p className="text-xs font-mono uppercase tracking-wider text-[#71717A]">
                  Suggested Seminar Questions
                </p>
                <ul className="text-xs text-[#A1A1AA] space-y-2.5 list-disc pl-4 leading-relaxed font-light">
                  <li>How does the visual documentary medium enhance comprehension beyond written sociological or ecological text?</li>
                  <li>In what ways do individual or local community interventions challenge systemic inertia in this film?</li>
                  <li>How does the director balance stark realism with agency, resilience, and optimism?</li>
                </ul>
              </div>

              {/* Film Synopsis */}
              <div className="space-y-2">
                <p className="text-xs font-mono uppercase tracking-wider text-[#71717A]">
                  Documentary Logline
                </p>
                <p className="text-xs text-[#D4D4D8] leading-relaxed">
                  {film.shortDesc}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#27272a] text-[11px] font-mono text-[#71717A]">
              Perennial Films Institutional Streaming Platform · Closed-Captioned
            </div>
          </div>
        )}
      </div>

      {/* Subtle Bottom Ambient Bar */}
      <div className="px-6 py-2.5 bg-[#08080a] border-t border-[#1c1c1f] flex items-center justify-between text-[11px] font-mono text-[#71717A]">
        <span>STREAMING IN HIGH DEFINITION · CLOSED CAPTIONS VERIFIED</span>
        <button
          onClick={onExit}
          className="text-[#C29B38] hover:underline cursor-pointer"
        >
          Return to Catalog
        </button>
      </div>
    </div>
  );
};
