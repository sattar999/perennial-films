import React, { useState } from 'react';
import { X, Check, ShieldCheck, Film as FilmIcon, CreditCard, Building, Home, FileText } from 'lucide-react';
import { Film } from '../data/perennialFilmsData';

export interface CartItem {
  id: string;
  filmId: string;
  filmTitle: string;
  licenseType: string;
  price: number;
  terms: string;
  runtime: string;
  coverImage: string;
}

interface VodPurchaseModalProps {
  film: Film | null;
  onClose: () => void;
  onAddToCart: (item: CartItem) => void;
  onInstantBuy: (item: CartItem) => void;
}

export const VodPurchaseModal: React.FC<VodPurchaseModalProps> = ({
  film,
  onClose,
  onAddToCart,
  onInstantBuy
}) => {
  const [selectedLicense, setSelectedLicense] = useState<'univ' | 'nonprofit' | 'buy' | 'rent'>('univ');
  const [agreeTerms, setAgreeTerms] = useState(true);

  if (!film) return null;

  const getSelectedItem = (): CartItem => {
    switch (selectedLicense) {
      case 'univ':
        return {
          id: `${film.id}-univ-${Date.now()}`,
          filmId: film.id,
          filmTitle: film.title,
          licenseType: 'University & College Life of File Streaming License',
          price: film.pricing.universityLicense?.price || 200,
          terms: 'Public Performance Rights (PPR) & Digital Site Licensing (DSL) for campus-wide intranet or classroom streaming.',
          runtime: film.runtime,
          coverImage: film.coverImage
        };
      case 'nonprofit':
        return {
          id: `${film.id}-nonprofit-${Date.now()}`,
          filmId: film.id,
          filmTitle: film.title,
          licenseType: 'Non-Profit & 2-Year College License',
          price: film.pricing.nonProfitLicense?.price || 150,
          terms: 'Public Performance Rights (PPR) for community, civic, or organizational screenings and student workshops.',
          runtime: film.runtime,
          coverImage: film.coverImage
        };
      case 'buy':
        return {
          id: `${film.id}-buy-${Date.now()}`,
          filmId: film.id,
          filmTitle: film.title,
          licenseType: 'Home Digital Lifetime Stream & Download',
          price: film.pricing.homePurchase?.price || 14.99,
          terms: 'Personal home viewing only; unauthorized public screening prohibited.',
          runtime: film.runtime,
          coverImage: film.coverImage
        };
      case 'rent':
        return {
          id: `${film.id}-rent-${Date.now()}`,
          filmId: film.id,
          filmTitle: film.title,
          licenseType: 'Home 48-Hour On-Demand Stream',
          price: film.pricing.homeRental?.price || 4.99,
          terms: 'Personal home viewing for 48 hours upon first play.',
          runtime: film.runtime,
          coverImage: film.coverImage
        };
    }
  };

  const handleAdd = () => {
    onAddToCart(getSelectedItem());
    onClose();
  };

  const handleInstant = () => {
    onInstantBuy(getSelectedItem());
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#141416] border border-[#2e2e33] rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-[#27272a] flex items-center justify-between bg-[#18181b]">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C29B38]">
              Perennial Films VOD & Licensing
            </span>
            <h3 className="font-serif text-2xl text-[#F4F4F5] font-normal">
              Select Viewing or License Tier
            </h3>
            <p className="text-xs text-[#A1A1AA] mt-0.5">
              for "{film.title}" ({film.runtime})
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#27272a] text-[#A1A1AA] hover:text-white hover:bg-[#3f3f46] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* License Selection Options */}
          <div className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-[#71717A]">
              1. Institutional / Higher Education Licenses (PPR & DSL)
            </p>

            {film.pricing.universityLicense && (
              <label
                onClick={() => setSelectedLicense('univ')}
                className={`flex items-start justify-between p-4 rounded-xl border cursor-pointer transition-colors ${
                  selectedLicense === 'univ'
                    ? 'bg-[#1e1e24] border-[#C29B38] ring-1 ring-[#C29B38]'
                    : 'bg-[#18181b] border-[#27272a] hover:border-[#3f3f46]'
                }`}
              >
                <div className="flex items-start gap-3">
                  <input
                    type="radio"
                    name="license"
                    checked={selectedLicense === 'univ'}
                    onChange={() => setSelectedLicense('univ')}
                    className="mt-1 accent-[#C29B38]"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-[#C29B38]" />
                      <span className="text-sm font-medium text-[#F4F4F5]">
                        University & College Life of File Streaming License
                      </span>
                    </div>
                    <p className="text-xs text-[#A1A1AA] mt-1 leading-relaxed">
                      Includes Public Performance Rights (PPR) and Digital Site Licensing (DSL) for university-wide intranet or classroom streaming.
                    </p>
                  </div>
                </div>
                <span className="text-base font-mono font-semibold text-[#F4F4F5] tabular-nums shrink-0 ml-4">
                  ${film.pricing.universityLicense.price.toFixed(2)}
                </span>
              </label>
            )}

            {film.pricing.nonProfitLicense && (
              <label
                onClick={() => setSelectedLicense('nonprofit')}
                className={`flex items-start justify-between p-4 rounded-xl border cursor-pointer transition-colors ${
                  selectedLicense === 'nonprofit'
                    ? 'bg-[#1e1e24] border-[#C29B38] ring-1 ring-[#C29B38]'
                    : 'bg-[#18181b] border-[#27272a] hover:border-[#3f3f46]'
                }`}
              >
                <div className="flex items-start gap-3">
                  <input
                    type="radio"
                    name="license"
                    checked={selectedLicense === 'nonprofit'}
                    onChange={() => setSelectedLicense('nonprofit')}
                    className="mt-1 accent-[#C29B38]"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#C29B38]" />
                      <span className="text-sm font-medium text-[#F4F4F5]">
                        Non-Profit Organizations & 2-Year Colleges
                      </span>
                    </div>
                    <p className="text-xs text-[#A1A1AA] mt-1 leading-relaxed">
                      Public performance rights for non-profit community screenings, public libraries, and two-year colleges.
                    </p>
                  </div>
                </div>
                <span className="text-base font-mono font-semibold text-[#F4F4F5] tabular-nums shrink-0 ml-4">
                  ${film.pricing.nonProfitLicense.price.toFixed(2)}
                </span>
              </label>
            )}

            <p className="text-xs font-mono uppercase tracking-wider text-[#71717A] pt-3">
              2. Individual & Home Viewing
            </p>

            {film.pricing.homePurchase && (
              <label
                onClick={() => setSelectedLicense('buy')}
                className={`flex items-start justify-between p-4 rounded-xl border cursor-pointer transition-colors ${
                  selectedLicense === 'buy'
                    ? 'bg-[#1e1e24] border-[#C29B38] ring-1 ring-[#C29B38]'
                    : 'bg-[#18181b] border-[#27272a] hover:border-[#3f3f46]'
                }`}
              >
                <div className="flex items-start gap-3">
                  <input
                    type="radio"
                    name="license"
                    checked={selectedLicense === 'buy'}
                    onChange={() => setSelectedLicense('buy')}
                    className="mt-1 accent-[#C29B38]"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <Home className="w-4 h-4 text-[#C29B38]" />
                      <span className="text-sm font-medium text-[#F4F4F5]">
                        Home Digital Purchase (Lifetime Streaming)
                      </span>
                    </div>
                    <p className="text-xs text-[#A1A1AA] mt-1 leading-relaxed">
                      Permanent streaming access on all personal devices + closed captions.
                    </p>
                  </div>
                </div>
                <span className="text-base font-mono font-semibold text-[#F4F4F5] tabular-nums shrink-0 ml-4">
                  ${film.pricing.homePurchase.price.toFixed(2)}
                </span>
              </label>
            )}

            {film.pricing.homeRental && (
              <label
                onClick={() => setSelectedLicense('rent')}
                className={`flex items-start justify-between p-4 rounded-xl border cursor-pointer transition-colors ${
                  selectedLicense === 'rent'
                    ? 'bg-[#1e1e24] border-[#C29B38] ring-1 ring-[#C29B38]'
                    : 'bg-[#18181b] border-[#27272a] hover:border-[#3f3f46]'
                }`}
              >
                <div className="flex items-start gap-3">
                  <input
                    type="radio"
                    name="license"
                    checked={selectedLicense === 'rent'}
                    onChange={() => setSelectedLicense('rent')}
                    className="mt-1 accent-[#C29B38]"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <FilmIcon className="w-4 h-4 text-[#C29B38]" />
                      <span className="text-sm font-medium text-[#F4F4F5]">
                        Home Rental (48-Hour Streaming Window)
                      </span>
                    </div>
                    <p className="text-xs text-[#A1A1AA] mt-1 leading-relaxed">
                      48 hours of access once playback commences.
                    </p>
                  </div>
                </div>
                <span className="text-base font-mono font-semibold text-[#F4F4F5] tabular-nums shrink-0 ml-4">
                  ${film.pricing.homeRental.price.toFixed(2)}
                </span>
              </label>
            )}
          </div>

          {/* Terms checkbox */}
          <div className="p-3.5 rounded-lg bg-[#18181b] border border-[#27272a] flex items-start gap-2.5">
            <input
              type="checkbox"
              id="terms-check"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="mt-0.5 accent-[#C29B38]"
            />
            <label htmlFor="terms-check" className="text-xs text-[#A1A1AA] leading-relaxed cursor-pointer">
              I agree to the <span className="text-[#E4E4E7] underline">Perennial Films Streaming License Agreement</span>. Licensed for educational, public performance, or individual viewing as selected above. Closed-captioned.
            </label>
          </div>

          {/* P.O. reminder */}
          <p className="text-[11px] text-[#71717A] font-mono">
            * To order using an official institutional Purchase Order (P.O.), contact <a href="mailto:info@perennial-films.com" className="text-[#C29B38] underline">info@perennial-films.com</a>.
          </p>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-[#18181b] border-t border-[#27272a] flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase text-[#71717A] block">Selected Tier</span>
            <span className="text-sm font-medium text-[#F4F4F5]">
              {getSelectedItem().licenseType}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleAdd}
              disabled={!agreeTerms}
              className="px-4 py-2.5 rounded-lg bg-[#27272a] hover:bg-[#3f3f46] disabled:opacity-50 text-[#F4F4F5] text-xs font-medium tracking-wide uppercase transition-colors cursor-pointer"
            >
              Add to Cart
            </button>
            <button
              onClick={handleInstant}
              disabled={!agreeTerms}
              className="px-5 py-2.5 rounded-lg bg-[#C29B38] hover:bg-[#d6ac42] disabled:opacity-50 text-black font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer shadow-lg shadow-[#C29B38]/10"
            >
              Instant Checkout (${getSelectedItem().price.toFixed(2)})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
