import React, { useState } from 'react';
import { ShieldCheck, Building, HelpCircle, FileText, Check, ArrowRight, Mail } from 'lucide-react';
import { FILMS, PERENNIAL_BRAND, Film } from '../data/perennialFilmsData';

interface InstitutionalLicensingViewProps {
  onOpenPurchase: (film: Film) => void;
  onSelectFilm: (filmId: string) => void;
  setActiveTab: (tab: string) => void;
}

export const InstitutionalLicensingView: React.FC<InstitutionalLicensingViewProps> = ({
  onOpenPurchase,
  onSelectFilm,
  setActiveTab
}) => {
  const [showAgreement, setShowAgreement] = useState(false);

  return (
    <div className="w-full bg-[#121212] text-[#E4E4E7] py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="border-b border-[#27272a] pb-8 space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C29B38]">
            Educational & Institutional Distribution
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[#F4F4F5] tracking-tight">
            Purchase & Streaming Licenses
          </h1>
          <p className="text-sm sm:text-base text-[#D4D4D8] max-w-3xl leading-relaxed font-light">
            Licensed for public performance rights for educational use in colleges, universities, and non-profit organizations. All films are closed-captioned.
          </p>
        </div>

        {/* Core Institutional Terms Callout */}
        <div className="p-6 rounded-2xl bg-[#18181b] border border-[#2e2e33] grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-1.5">
            <span className="text-xs font-mono uppercase tracking-wider text-[#C29B38] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>Public Performance Rights (PPR)</span>
            </span>
            <p className="text-xs text-[#A1A1AA] leading-relaxed">
              Permits in-person, hybrid, and campus-wide classroom or student screenings where admission is not charged.
            </p>
          </div>

          <div className="space-y-1.5">
            <span className="text-xs font-mono uppercase tracking-wider text-[#C29B38] flex items-center gap-1.5">
              <Building className="w-4 h-4" />
              <span>Digital Site Licensing (DSL)</span>
            </span>
            <p className="text-xs text-[#A1A1AA] leading-relaxed">
              Life-of-file streaming access hosted on secure password-protected campus intranets or authorized LMS (Canvas, Blackboard).
            </p>
          </div>

          <div className="space-y-1.5">
            <span className="text-xs font-mono uppercase tracking-wider text-[#C29B38] flex items-center gap-1.5">
              <FileText className="w-4 h-4" />
              <span>Purchase Orders (P.O.) Accepted</span>
            </span>
            <p className="text-xs text-[#A1A1AA] leading-relaxed">
              We process university procurement orders with official invoices and NET-30 payment terms via info@perennial-films.com.
            </p>
          </div>
        </div>

        {/* Pricing Catalog Table */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#27272a] pb-3">
            <h2 className="font-serif text-2xl text-[#F4F4F5]">
              Documentary Licensing Price Schedule
            </h2>
            <button
              onClick={() => setShowAgreement(!showAgreement)}
              className="text-xs font-mono text-[#C29B38] hover:underline cursor-pointer flex items-center gap-1"
            >
              <span>{showAgreement ? 'Hide Agreement Terms' : 'View Streaming License Agreement'}</span>
            </button>
          </div>

          {/* Collapsible License Agreement Terms */}
          {showAgreement && (
            <div className="p-6 rounded-xl bg-[#141416] border border-[#2e2e33] space-y-4 text-xs text-[#D4D4D8] leading-relaxed">
              <h3 className="font-serif text-lg text-[#F4F4F5]">
                Perennial Films Digital Streaming License Agreement
              </h3>
              <p>
                This agreement grants the purchasing institution a non-exclusive, non-transferable license to deliver the film via a secure, password-protected streaming system to students, faculty, and authorized staff of the institution for educational purposes.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-[#A1A1AA]">
                <li><strong>Public Performance Rights:</strong> Screenings are permitted on campus in classrooms and auditorium settings for non-paying audiences.</li>
                <li><strong>Life of File:</strong> Streaming access remains active for the operational lifetime of the digital file format.</li>
                <li><strong>Accessibility:</strong> Closed captions are provided on all digital master files.</li>
              </ul>
            </div>
          )}

          {/* Films List with Pricing and CTAs */}
          <div className="space-y-4">
            {FILMS.map((film) => (
              <div
                key={film.id}
                className="p-6 rounded-xl bg-[#18181b] border border-[#27272a] hover:border-[#3f3f46] transition-colors flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                {/* Film Info */}
                <div className="flex items-start gap-4 flex-1">
                  <img
                    src={film.coverImage}
                    alt={film.title}
                    className="w-20 h-24 object-cover rounded bg-[#0c0c0e] shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#71717A]">
                      <span>{film.runtime}</span>
                      <span>·</span>
                      <span className="text-[#C29B38]">CLOSED CAPTIONS</span>
                    </div>

                    <h3
                      onClick={() => onSelectFilm(film.id)}
                      className="font-serif text-2xl text-[#F4F4F5] hover:text-[#C29B38] transition-colors cursor-pointer"
                    >
                      {film.title}
                    </h3>

                    <p className="text-xs text-[#A1A1AA] line-clamp-2 max-w-xl">
                      {film.shortDesc}
                    </p>

                    <p className="text-[11px] text-[#71717A] pt-1">
                      <strong className="text-[#A1A1AA]">Suggested Courses:</strong> {film.disciplines.slice(0, 4).join(', ')}
                    </p>
                  </div>
                </div>

                {/* Price Breakdown & CTAs */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:border-l lg:border-[#27272a] lg:pl-6 shrink-0">
                  <div className="space-y-1 text-right">
                    <div className="text-xs font-mono text-[#A1A1AA]">
                      Higher Ed: <strong className="text-base text-[#F4F4F5] tabular-nums">${film.pricing.universityLicense?.price.toFixed(2)}</strong>
                    </div>
                    <div className="text-xs font-mono text-[#71717A]">
                      Non-Profit: <strong className="text-xs text-[#D4D4D8] tabular-nums">${film.pricing.nonProfitLicense?.price.toFixed(2)}</strong>
                    </div>
                    <div className="text-[11px] font-mono text-[#C29B38]">
                      Home Rent/Buy: ${film.pricing.homeRental?.price.toFixed(2)} / ${film.pricing.homePurchase?.price.toFixed(2)}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                    <button
                      onClick={() => onOpenPurchase(film)}
                      className="px-5 py-2.5 rounded-lg bg-[#C29B38] hover:bg-[#d6ac42] text-black font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer text-center"
                    >
                      Order License
                    </button>
                    <button
                      onClick={() => onSelectFilm(film.id)}
                      className="px-4 py-2.5 rounded-lg bg-[#27272a] hover:bg-[#3f3f46] text-[#E4E4E7] text-xs font-medium transition-colors cursor-pointer text-center"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Purchase Order & Invoicing Box */}
        <div className="p-8 rounded-2xl bg-[#141416] border border-[#2e2e33] space-y-4">
          <div className="space-y-1">
            <h3 className="font-serif text-2xl text-[#F4F4F5] font-normal">
              Ordering with an Institutional Purchase Order (P.O.)
            </h3>
            <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
              Please contact us if you need to order one of our films using an official university or library P.O. at{' '}
              <a href="mailto:info@perennial-films.com" className="text-[#C29B38] underline">
                info@perennial-films.com
              </a>.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setActiveTab('contact')}
              className="px-5 py-2.5 rounded-lg bg-[#27272a] hover:bg-[#3f3f46] text-[#F4F4F5] text-xs font-medium tracking-wide uppercase transition-colors cursor-pointer"
            >
              Submit Purchase Order Inquiry
            </button>
            <span className="text-xs font-mono text-[#71717A]">
              Prompt confirmation & immediate digital streaming provisioning
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
