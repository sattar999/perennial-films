import React from 'react';
import { Mail, Film as FilmIcon, Award, GraduationCap, Globe, ArrowRight } from 'lucide-react';
import { DIRECTOR_BIO, FILMS, PERENNIAL_BRAND } from '../data/perennialFilmsData';

interface AboutDirectorProps {
  onSelectFilm: (filmId: string) => void;
  setActiveTab: (tab: string) => void;
}

export const AboutDirector: React.FC<AboutDirectorProps> = ({ onSelectFilm, setActiveTab }) => {
  return (
    <div className="w-full bg-[#121212] text-[#E4E4E7] py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Profile Hero Header */}
        <div className="border-b border-[#27272a] pb-8 space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C29B38]">
            Filmmaker Biography & Archive
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#F4F4F5] tracking-tight">
            About Joanne Hershfield
          </h1>
          <p className="text-sm font-mono text-[#A1A1AA] uppercase tracking-wider">
            Producer / Director · Perennial Films
          </p>
        </div>

        {/* Editorial Layout: Portrait + Bio */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5 space-y-4">
            <div className="aspect-[4/5] rounded-xl overflow-hidden border border-[#2e2e33] bg-[#0c0c0e] shadow-xl">
              <img
                src={DIRECTOR_BIO.portrait}
                alt={DIRECTOR_BIO.caption}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-xs font-mono text-[#71717A] leading-relaxed">
              {DIRECTOR_BIO.caption}
            </p>

            {/* Quick Metrics */}
            <div className="p-4 rounded-xl bg-[#18181b] border border-[#27272a] space-y-3 text-xs">
              {DIRECTOR_BIO.highlights.map((h, i) => (
                <div key={i} className="space-y-0.5">
                  <span className="font-mono text-[#71717A] uppercase text-[10px] block">
                    {h.label}
                  </span>
                  <span className="text-[#D4D4D8] font-medium leading-snug block">
                    {h.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Exact Body Copy from Live Website */}
          <div className="md:col-span-7 space-y-6">
            <div className="text-base sm:text-lg text-[#D4D4D8] leading-relaxed space-y-6 font-light">
              <p>
                I graduated from the Stanford University film program and have been producing documentary films for forty years. I also taught at the University of North Carolina at Chapel Hill and was Director of the Department of Women's and Gender Studies.
              </p>
              <p>
                My films are in the permanent collections of over five hundred universities and libraries in the U.S., Japan, Canada, and Australia.
              </p>
              <p>
                Recent films distributed nationally and internationally include <em>Gardening for the Planet</em>, a film about the importance of using native plants to address climate change; <em>Benevolence, a Journey From Prison to Home</em>, the story of five formerly incarcerated women who move onto a working rural farm in North Carolina; <em>Mama C: Urban Warrior in the African Bush</em>, the story of Charlotte O’Neal, a former member of the Kansas City Black Panther Party, a poet, musician, artist, and community activist, who has lived for over forty years as an “urban warrior in the African Bush” in the Tanzanian village of Imbaseni; <em>These Are Our Children</em>, a one-hour documentary film that reveals how the devastating effects of poverty, HIV/AIDs, and violence on Kenyan children are successfully being reduced through local grassroots interventions; <em>Men Are Human, Women are Buffalo</em>, a film about violence against women in Thailand.
              </p>
            </div>

            {/* Speaking Engagements Box */}
            <div className="p-6 rounded-xl bg-[#18181b] border border-[#27272a] space-y-3 mt-8">
              <h3 className="font-serif text-xl text-[#F4F4F5] font-normal">
                Speaking Engagements & Classroom Q&As
              </h3>
              <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                Joanne is available for virtual and in-person speaking engagements, university symposia, and classroom film discussions.
              </p>
              <button
                onClick={() => setActiveTab('contact')}
                className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#C29B38] hover:bg-[#d6ac42] text-black font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Contact Joanne for Speaking Inquiries</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Filmography Grid */}
        <div className="pt-12 border-t border-[#27272a] space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-3xl text-[#F4F4F5] font-normal">
              Directed Documentaries
            </h2>
            <button
              onClick={() => setActiveTab('films')}
              className="text-xs font-mono uppercase text-[#C29B38] hover:underline"
            >
              Browse Full Catalog →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FILMS.map((film) => (
              <div
                key={film.id}
                onClick={() => onSelectFilm(film.id)}
                className="group cursor-pointer bg-[#18181b] border border-[#27272a] hover:border-[#3f3f46] rounded-xl overflow-hidden transition-all duration-200"
              >
                <div className="aspect-[16/10] bg-[#0c0c0e] relative overflow-hidden">
                  <img
                    src={film.coverImage}
                    alt={film.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-2 left-2 text-[10px] font-mono bg-black/80 px-2 py-0.5 rounded text-[#D4D4D8]">
                    {film.runtime}
                  </div>
                </div>
                <div className="p-4 space-y-1">
                  <h4 className="font-serif text-lg text-[#F4F4F5] group-hover:text-[#C29B38] transition-colors leading-snug">
                    {film.title}
                  </h4>
                  <p className="text-xs text-[#A1A1AA] line-clamp-2">
                    {film.shortDesc}
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
