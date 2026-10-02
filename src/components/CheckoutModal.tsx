import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, Building, CreditCard, FileCheck, ArrowRight } from 'lucide-react';
import { CartItem } from './VodPurchaseModal';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onCompleteOrder: (orderData: {
    customerName: string;
    customerEmail: string;
    organization: string;
    paymentMethod: string;
    poNumber?: string;
    licensedFilms: CartItem[];
  }) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onCompleteOrder
}) => {
  const [name, setName] = useState('Dr. Sarah Lin');
  const [email, setEmail] = useState('slin@university.edu');
  const [organization, setOrganization] = useState('Department of Environmental Studies');
  const [paymentType, setPaymentType] = useState<'card' | 'po'>('card');
  const [poNumber, setPoNumber] = useState('PO-2026-UNC-0894');
  const [cardNumber, setCardNumber] = useState('•••• •••• •••• 4242');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const total = items.reduce((acc, it) => acc + it.price, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onCompleteOrder({
        customerName: name,
        customerEmail: email,
        organization,
        paymentMethod: paymentType === 'card' ? 'Credit Card' : 'Institutional Purchase Order',
        poNumber: paymentType === 'po' ? poNumber : undefined,
        licensedFilms: items
      });
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#141416] border border-[#2e2e33] rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="p-6 border-b border-[#27272a] flex items-center justify-between bg-[#18181b]">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C29B38]">
              Perennial Films Checkout
            </span>
            <h3 className="font-serif text-2xl text-[#F4F4F5] font-normal">
              Finalize Licensing & Access
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#27272a] text-[#A1A1AA] hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Order Summary Recap */}
          <div className="p-4 rounded-xl bg-[#18181b] border border-[#27272a] space-y-2">
            <p className="text-[11px] font-mono uppercase tracking-wider text-[#71717A]">
              Selected Documentaries ({items.length})
            </p>
            <div className="space-y-1.5">
              {items.map((it) => (
                <div key={it.id} className="flex items-center justify-between text-xs">
                  <span className="text-[#E4E4E7] truncate pr-2">{it.filmTitle} ({it.licenseType})</span>
                  <span className="font-mono text-[#F4F4F5] font-semibold tabular-nums">
                    ${it.price.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            <div className="pt-2 border-t border-[#27272a] flex items-center justify-between text-sm font-semibold">
              <span className="font-mono text-[#A1A1AA]">TOTAL:</span>
              <span className="font-mono text-[#C29B38] text-base tabular-nums">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Customer / Institution Details */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA]">
              Contact & Licensee Information
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-[#A1A1AA] mb-1 font-mono">
                  Full Name (Required)
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#121212] border border-[#2e2e33] text-xs text-[#F4F4F5] focus:border-[#C29B38] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs text-[#A1A1AA] mb-1 font-mono">
                  Institutional Email (Required)
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#121212] border border-[#2e2e33] text-xs text-[#F4F4F5] focus:border-[#C29B38] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-[#A1A1AA] mb-1 font-mono">
                University / Institution / Organization Name
              </label>
              <input
                type="text"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder="e.g. Stanford University Library or Self"
                className="w-full px-3 py-2 rounded-lg bg-[#121212] border border-[#2e2e33] text-xs text-[#F4F4F5] focus:border-[#C29B38] focus:outline-none"
              />
            </div>
          </div>

          {/* Payment Method Selection */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA]">
              Payment or Procurement Method
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setPaymentType('card')}
                className={`p-3 rounded-xl border text-left flex items-center gap-2 cursor-pointer transition-colors ${
                  paymentType === 'card'
                    ? 'bg-[#1e1e24] border-[#C29B38] text-[#F4F4F5]'
                    : 'bg-[#18181b] border-[#27272a] text-[#A1A1AA]'
                }`}
              >
                <CreditCard className="w-4 h-4 text-[#C29B38]" />
                <span className="text-xs font-medium">Credit / Debit Card</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentType('po')}
                className={`p-3 rounded-xl border text-left flex items-center gap-2 cursor-pointer transition-colors ${
                  paymentType === 'po'
                    ? 'bg-[#1e1e24] border-[#C29B38] text-[#F4F4F5]'
                    : 'bg-[#18181b] border-[#27272a] text-[#A1A1AA]'
                }`}
              >
                <Building className="w-4 h-4 text-[#C29B38]" />
                <span className="text-xs font-medium">Purchase Order (P.O.)</span>
              </button>
            </div>

            {paymentType === 'card' ? (
              <div className="p-3.5 rounded-lg bg-[#18181b] border border-[#27272a] space-y-2">
                <label className="block text-[11px] font-mono text-[#A1A1AA]">Card Number</label>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="w-full px-3 py-1.5 rounded bg-[#121212] border border-[#2e2e33] text-xs font-mono text-[#F4F4F5]"
                />
              </div>
            ) : (
              <div className="p-3.5 rounded-lg bg-[#18181b] border border-[#27272a] space-y-2">
                <label className="block text-[11px] font-mono text-[#A1A1AA]">Purchase Order (P.O.) Number</label>
                <input
                  type="text"
                  value={poNumber}
                  onChange={(e) => setPoNumber(e.target.value)}
                  placeholder="e.g. PO-849204"
                  className="w-full px-3 py-1.5 rounded bg-[#121212] border border-[#2e2e33] text-xs font-mono text-[#F4F4F5]"
                />
                <p className="text-[10px] text-[#71717A]">
                  Invoice with NET-30 terms will be emailed alongside instant digital streaming credentials.
                </p>
              </div>
            )}
          </div>

          {/* Institutional Compliance Seal */}
          <div className="flex items-center gap-2 text-xs text-[#A1A1AA] pt-1">
            <ShieldCheck className="w-4 h-4 text-[#C29B38] shrink-0" />
            <span>Digital Certificate of Public Performance Rights delivered upon completion.</span>
          </div>

          <button
            type="submit"
            disabled={isProcessing}
            className="w-full py-3.5 px-4 rounded-lg bg-[#C29B38] hover:bg-[#d6ac42] disabled:opacity-50 text-black font-semibold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            {isProcessing ? (
              <span>Activating Licensing Credentials...</span>
            ) : (
              <>
                <span>Complete Order & Authorize Streaming (${total.toFixed(2)})</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
