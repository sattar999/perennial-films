import React, { useState } from 'react';
import { Play, ShieldCheck, Film as FilmIcon, FileText, ArrowRight, Download, CheckCircle, ExternalLink } from 'lucide-react';
import { Film, FILMS } from '../data/perennialFilmsData';

export interface LicensedFilmRecord {
  film: Film;
  licenseType: string;
  orderDate: string;
  orderNumber: string;
  organization: string;
  pprCertificateId: string;
}

interface MyLibraryProps {
  licensedFilms: LicensedFilmRecord[];
  onWatchFilm: (film: Film) => void;
  onBrowseCatalog: () => void;
}

export const MyLibrary: React.FC<MyLibraryProps> = ({
  licensedFilms,
  onWatchFilm,
  onBrowseCatalog
}) => {
  const [selectedCert, setSelectedCert] = useState<LicensedFilmRecord | null>(null);

  return (
    <div className="w-full bg-[#121212] text-[#E4E4E7] min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Library Header */}
        <div className="border-b border-[#27272a] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C29B38]">
              Perennial VOD Screening Portal
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#F4F4F5] font-normal tracking-wide mt-1">
              My Film Library & Licenses
            </h1>
            <p className="text-xs sm:text-sm text-[#A1A1AA] mt-1 font-light">
              Authorized digital streams, campus intranet digital site licenses (DSL), and public performance rights.
            </p>
          </div>

          <button
            onClick={onBrowseCatalog}
            className="text-xs font-mono uppercase tracking-wider text-[#C29B38] hover:underline cursor-pointer flex items-center gap-1"
          >
            <span>Browse Full Catalog →</span>
          </button>
        </div>

        {/* Films Grid */}
        {licensedFilms.length === 0 ? (
          <div className="p-16 text-center bg-[#18181b] rounded-2xl border border-[#27272a] space-y-4">
            <FilmIcon className="w-12 h-12 text-[#3f3f46] mx-auto" />
            <h3 className="font-serif text-2xl text-[#F4F4F5]">No Active Licenses Yet</h3>
            <p className="text-xs text-[#A1A1AA] max-w-md mx-auto">
              You haven't acquired any films or institutional licenses yet. Choose any documentary to rent, buy, or license for educational use.
            </p>
            <button
              onClick={onBrowseCatalog}
              className="mt-2 px-6 py-2.5 rounded-lg bg-[#C29B38] text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#d6ac42] transition-colors"
            >
              Explore Documentary Archive
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {licensedFilms.map((record) => (
              <div
                key={record.orderNumber}
                className="bg-[#18181b] border border-[#2e2e33] rounded-xl overflow-hidden flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-[#0c0c0e]">
                    <img
                      src={record.film.coverImage}
                      alt={record.film.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#18181b] via-transparent to-transparent opacity-80" />

                    <div className="absolute top-3 left-3 bg-black/80 px-2.5 py-1 rounded text-[10px] font-mono text-[#C29B38] border border-[#C29B38]/30 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      <span>LICENSED</span>
                    </div>

                    <div className="absolute bottom-3 right-3 text-[11px] font-mono bg-black/80 px-2 py-0.5 rounded text-[#D4D4D8]">
                      {record.film.runtime}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="font-serif text-2xl text-[#F4F4F5] font-normal leading-snug">
                      {record.film.title}
                    </h3>

                    <div className="space-y-1 text-xs">
                      <p className="text-[#C29B38] font-medium">
                        {record.licenseType}
                      </p>
                      <p className="text-[#71717A] text-[11px] font-mono">
                        Licensee: {record.organization} · Acquired {record.orderDate}
                      </p>
                      <p className="text-[#71717A] text-[11px] font-mono">
                        PPR Certificate: {record.pprCertificateId}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#27272a] mt-4 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onWatchFilm(record.film)}
                    className="flex-1 py-2.5 px-4 rounded-lg bg-[#C29B38] hover:bg-[#d6ac42] text-black text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow"
                  >
                    <Play className="w-3.5 h-3.5 fill-black" />
                    <span>Watch Film</span>
                  </button>

                  <button
                    onClick={() => setSelectedCert(record)}
                    className="py-2.5 px-3 rounded-lg bg-[#27272a] hover:bg-[#3f3f46] text-[#E4E4E7] text-xs font-mono transition-colors"
                    title="View Public Performance License Certificate"
                  >
                    <FileText className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certificate Modal */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
            <div className="bg-[#18181b] border border-[#2e2e33] rounded-2xl max-w-lg w-full p-8 space-y-6 shadow-2xl relative text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-[#C29B38]/10 border border-[#C29B38] flex items-center justify-center text-[#C29B38]">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C29B38]">
                  Official License Document
                </span>
                <h3 className="font-serif text-2xl text-[#F4F4F5] mt-1">
                  Certificate of Public Performance Rights
                </h3>
                <p className="text-xs font-mono text-[#A1A1AA] mt-1">
                  ID: {selectedCert.pprCertificateId}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#121212] border border-[#27272a] text-xs text-[#D4D4D8] space-y-2 text-left">
                <p><strong>Film:</strong> {selectedCert.film.title}</p>
                <p><strong>Director:</strong> {selectedCert.film.director}</p>
                <p><strong>Grantee:</strong> {selectedCert.organization}</p>
                <p><strong>Terms:</strong> {selectedCert.licenseType} (Public Performance Rights for non-theatrical, educational, and classroom exhibition; closed-captioned).</p>
                <p><strong>Issued by:</strong> Perennial Films (Joanne Hershfield)</p>
              </div>

              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-2 rounded-lg bg-[#27272a] hover:bg-[#3f3f46] text-xs text-[#F4F4F5]"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    alert('Certificate downloaded for institutional records.');
                    setSelectedCert(null);
                  }}
                  className="px-5 py-2 rounded-lg bg-[#C29B38] text-black font-semibold text-xs flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF Certificate</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
