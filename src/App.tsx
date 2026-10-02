import React, { useState } from 'react';
import { FILMS, Film } from './data/perennialFilmsData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileMenu } from './components/MobileMenu';
import { Homepage } from './components/Homepage';
import { FilmArchive } from './components/FilmArchive';
import { FilmDetail } from './components/FilmDetail';
import { AboutDirector } from './components/AboutDirector';
import { InstitutionalLicensingView } from './components/InstitutionalLicensingView';
import { ContactView } from './components/ContactView';
import { TrailerModal } from './components/TrailerModal';
import { VodPurchaseModal, CartItem } from './components/VodPurchaseModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { MyLibrary, LicensedFilmRecord } from './components/MyLibrary';
import { CinemaPlayer } from './components/CinemaPlayer';
import { AuditStrategyModal } from './components/AuditStrategyModal';
import { ViewportBar, ViewportMode } from './components/ViewportBar';

export default function App() {
  const [viewportMode, setViewportMode] = useState<ViewportMode>('responsive');
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedFilmId, setSelectedFilmId] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Modals & Drawers state
  const [trailerFilm, setTrailerFilm] = useState<Film | null>(null);
  const [purchaseFilm, setPurchaseFilm] = useState<Film | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [screeningFilm, setScreeningFilm] = useState<Film | null>(null);
  const [auditOpen, setAuditOpen] = useState(false);
  const [showingLibrary, setShowingLibrary] = useState(false);

  // Cart & Orders State
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [licensedFilms, setLicensedFilms] = useState<LicensedFilmRecord[]>([
    {
      film: FILMS[0], // Gardening for the Planet
      licenseType: 'University & College Life of File Streaming License (DSL + PPR)',
      orderDate: 'October 2, 2026',
      orderNumber: 'ORD-2026-UNC-9021',
      organization: 'Department of Environmental Studies & Library',
      pprCertificateId: 'PPR-DSL-GFTP-2026-9021'
    }
  ]);

  // Handlers
  const handleSelectFilm = (filmId: string) => {
    setSelectedFilmId(filmId);
    setShowingLibrary(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToFilms = () => {
    setSelectedFilmId(null);
    setActiveTab('films');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSelectedFilmId(null);
    setShowingLibrary(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (item: CartItem) => {
    setCartItems((prev) => [...prev, item]);
    setCartOpen(true);
  };

  const handleInstantBuy = (item: CartItem) => {
    setCartItems([item]);
    setCheckoutOpen(true);
  };

  const handleRemoveCartItem = (id: string) => {
    setCartItems((prev) => prev.filter((it) => it.id !== id));
  };

  const handleCompleteOrder = (orderData: {
    customerName: string;
    customerEmail: string;
    organization: string;
    paymentMethod: string;
    poNumber?: string;
    licensedFilms: CartItem[];
  }) => {
    const newRecords: LicensedFilmRecord[] = orderData.licensedFilms.map((it, idx) => {
      const foundFilm = FILMS.find((f) => f.id === it.filmId) || FILMS[0];
      return {
        film: foundFilm,
        licenseType: it.licenseType,
        orderDate: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        orderNumber: `ORD-${Date.now().toString().slice(-6)}-${idx}`,
        organization: orderData.organization || orderData.customerName,
        pprCertificateId: `PPR-${foundFilm.id.substring(0, 4).toUpperCase()}-${Date.now().toString().slice(-4)}`
      };
    });

    setLicensedFilms((prev) => [...newRecords, ...prev]);
    setCartItems([]);
    setShowingLibrary(true);
  };

  const currentSelectedFilm = FILMS.find((f) => f.id === selectedFilmId);

  // Content Renderer
  const renderMainContent = () => {
    if (showingLibrary) {
      return (
        <MyLibrary
          licensedFilms={licensedFilms}
          onWatchFilm={(f) => setScreeningFilm(f)}
          onBrowseCatalog={() => {
            setShowingLibrary(false);
            setActiveTab('films');
          }}
        />
      );
    }

    if (currentSelectedFilm) {
      return (
        <FilmDetail
          film={currentSelectedFilm}
          onBack={handleBackToFilms}
          onSelectFilm={handleSelectFilm}
          onOpenTrailer={(f) => setTrailerFilm(f)}
          onOpenPurchase={(f) => setPurchaseFilm(f)}
          onWatchNow={(f) => setScreeningFilm(f)}
        />
      );
    }

    switch (activeTab) {
      case 'home':
        return (
          <Homepage
            onSelectFilm={handleSelectFilm}
            onOpenTrailer={(f) => setTrailerFilm(f)}
            onOpenPurchase={(f) => setPurchaseFilm(f)}
            setActiveTab={handleTabChange}
          />
        );
      case 'films':
        return (
          <FilmArchive
            onSelectFilm={handleSelectFilm}
            onOpenTrailer={(f) => setTrailerFilm(f)}
            onOpenPurchase={(f) => setPurchaseFilm(f)}
          />
        );
      case 'licensing':
        return (
          <InstitutionalLicensingView
            onOpenPurchase={(f) => setPurchaseFilm(f)}
            onSelectFilm={handleSelectFilm}
            setActiveTab={handleTabChange}
          />
        );
      case 'about':
        return (
          <AboutDirector
            onSelectFilm={handleSelectFilm}
            setActiveTab={handleTabChange}
          />
        );
      case 'contact':
        return <ContactView />;
      default:
        return (
          <Homepage
            onSelectFilm={handleSelectFilm}
            onOpenTrailer={(f) => setTrailerFilm(f)}
            onOpenPurchase={(f) => setPurchaseFilm(f)}
            setActiveTab={handleTabChange}
          />
        );
    }
  };

  // Viewport Container Wrapper
  const getContainerStyle = () => {
    switch (viewportMode) {
      case 'desktop':
        return 'max-w-[1440px] mx-auto shadow-2xl border-x border-[#27272a]';
      case 'tablet':
        return 'max-w-[768px] mx-auto shadow-2xl border-x border-[#27272a]';
      case 'mobile':
        return 'max-w-[390px] mx-auto shadow-2xl border-x border-[#27272a] min-h-screen';
      case 'responsive':
      default:
        return 'w-full';
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#E4E4E7] flex flex-col font-sans">
      {/* Top Device Viewport Simulator Bar */}
      <ViewportBar
        currentMode={viewportMode}
        onSetMode={setViewportMode}
        onOpenAudit={() => setAuditOpen(true)}
      />

      {/* Main Viewport Container */}
      <div className={`flex-1 flex flex-col transition-all duration-300 bg-[#121212] ${getContainerStyle()}`}>
        {/* Sticky Header */}
        <Header
          activeTab={selectedFilmId ? 'films' : activeTab}
          setActiveTab={handleTabChange}
          cartCount={cartItems.length}
          openCart={() => setCartOpen(true)}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          onOpenAudit={() => setAuditOpen(true)}
          onOpenLibrary={() => {
            setShowingLibrary(true);
            setSelectedFilmId(null);
          }}
          hasPurchasedFilms={licensedFilms.length > 0}
        />

        {/* Streamlined Mobile Navigation Menu */}
        <MobileMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          activeTab={selectedFilmId ? 'films' : activeTab}
          setActiveTab={handleTabChange}
          onSelectFilm={handleSelectFilm}
          onOpenAudit={() => setAuditOpen(true)}
          onOpenLibrary={() => {
            setShowingLibrary(true);
            setSelectedFilmId(null);
          }}
          cartCount={cartItems.length}
          openCart={() => setCartOpen(true)}
        />

        {/* Page Content */}
        <main className="flex-1">
          {renderMainContent()}
        </main>

        {/* Footer */}
        <Footer
          setActiveTab={handleTabChange}
          onSelectFilm={handleSelectFilm}
          onOpenAudit={() => setAuditOpen(true)}
        />
      </div>

      {/* Overlays and Modals */}
      <TrailerModal
        film={trailerFilm}
        onClose={() => setTrailerFilm(null)}
        onOpenPurchase={(f) => setPurchaseFilm(f)}
      />

      <VodPurchaseModal
        film={purchaseFilm}
        onClose={() => setPurchaseFilm(null)}
        onAddToCart={handleAddToCart}
        onInstantBuy={handleInstantBuy}
      />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveCartItem}
        onProceedCheckout={() => {
          setCartOpen(false);
          setCheckoutOpen(true);
        }}
        onClearCart={() => setCartItems([])}
      />

      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        items={cartItems}
        onCompleteOrder={handleCompleteOrder}
      />

      <AuditStrategyModal
        isOpen={auditOpen}
        onClose={() => setAuditOpen(false)}
      />

      {screeningFilm && (
        <CinemaPlayer
          film={screeningFilm}
          onExit={() => setScreeningFilm(null)}
        />
      )}
    </div>
  );
}
