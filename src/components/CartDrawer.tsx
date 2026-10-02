import React from 'react';
import { X, Trash2, ArrowRight, ShieldCheck, Building, ShoppingBag } from 'lucide-react';
import { CartItem } from './VodPurchaseModal';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (id: string) => void;
  onProceedCheckout: () => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onProceedCheckout,
  onClearCart
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#141416] border-l border-[#2e2e33] flex flex-col justify-between shadow-2xl">
          {/* Header */}
          <div className="p-6 border-b border-[#27272a] flex items-center justify-between bg-[#18181b]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-[#C29B38]" />
              <h3 className="font-serif text-xl text-[#F4F4F5] font-normal">
                Order & Licensing Cart
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#27272a] text-[#A1A1AA] hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4">
            {items.length === 0 ? (
              <div className="py-20 text-center space-y-3">
                <ShoppingBag className="w-10 h-10 text-[#3f3f46] mx-auto" />
                <p className="font-serif text-lg text-[#F4F4F5]">Your cart is currently empty</p>
                <p className="text-xs text-[#71717A] max-w-xs mx-auto">
                  Browse the documentary catalog to select home viewing or institutional streaming licenses.
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between pb-2 border-b border-[#27272a] text-xs font-mono text-[#71717A]">
                  <span>{items.length} {items.length === 1 ? 'ITEM' : 'ITEMS'}</span>
                  <button
                    onClick={onClearCart}
                    className="hover:text-red-400 transition-colors"
                  >
                    Clear All
                  </button>
                </div>

                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-xl bg-[#18181b] border border-[#27272a] flex gap-3 relative group"
                    >
                      <img
                        src={item.coverImage}
                        alt={item.filmTitle}
                        className="w-16 h-20 object-cover rounded bg-[#0c0c0e] shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1 min-w-0 pr-6 space-y-1">
                        <h4 className="font-serif text-base text-[#F4F4F5] truncate">
                          {item.filmTitle}
                        </h4>
                        <p className="text-xs text-[#C29B38] font-medium leading-tight">
                          {item.licenseType}
                        </p>
                        <p className="text-[11px] text-[#71717A] line-clamp-2">
                          {item.terms}
                        </p>
                        <div className="pt-1 flex items-center justify-between font-mono text-xs">
                          <span className="text-[#A1A1AA]">{item.runtime}</span>
                          <span className="font-semibold text-[#F4F4F5] tabular-nums">
                            ${item.price.toFixed(2)}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="absolute top-3 right-3 text-[#71717A] hover:text-red-400 p-1"
                        title="Remove Item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Footer & Checkout */}
          {items.length > 0 && (
            <div className="p-6 bg-[#18181b] border-t border-[#27272a] space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="font-mono text-[#A1A1AA] uppercase">Subtotal:</span>
                <span className="font-mono text-xl font-semibold text-[#F4F4F5] tabular-nums">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <div className="text-[11px] text-[#71717A] leading-relaxed">
                Includes digital streaming activation, public performance rights where selected, and institutional invoice documentation.
              </div>

              <button
                onClick={onProceedCheckout}
                className="w-full py-3.5 px-4 rounded-lg bg-[#C29B38] hover:bg-[#d6ac42] text-black font-semibold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
