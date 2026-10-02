import React, { useState, useEffect } from 'react';
import { Navbar, PageRoute } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { RestaurantPage } from './pages/RestaurantPage';
import { CateringPage } from './pages/CateringPage';
import { CafePage } from './pages/CafePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ReservationModal } from './components/ReservationModal';
import { MenuModal } from './components/MenuModal';
import { LightboxModal } from './components/LightboxModal';
import { MobileActionBar } from './components/MobileActionBar';
import { Toast } from './components/Toast';
import { GalleryItem } from './types';

export const App: React.FC = () => {
  // Page Routing State with Hash synchronization
  const [currentPage, setCurrentPage] = useState<PageRoute>(() => {
    const rawHash = window.location.hash.toLowerCase().replace('#/', '').replace('#', '');
    if (
      rawHash === 'restaurant' ||
      rawHash === 'catering' ||
      rawHash === 'cafe' ||
      rawHash === 'about' ||
      rawHash === 'contact'
    ) {
      return rawHash as PageRoute;
    }
    return 'home';
  });

  // Modal states
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [reservationExperience, setReservationExperience] = useState<
    'restaurant' | 'catering' | 'cafe'
  >('restaurant');

  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const [menuInitialTab, setMenuInitialTab] = useState<'restaurant' | 'cafe'>('restaurant');

  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Hash change listener for browser back/forward buttons & URL navigation
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.toLowerCase().replace('#/', '').replace('#', '');
      if (
        rawHash === 'restaurant' ||
        rawHash === 'catering' ||
        rawHash === 'cafe' ||
        rawHash === 'about' ||
        rawHash === 'contact'
      ) {
        setCurrentPage(rawHash as PageRoute);
      } else {
        setCurrentPage('home');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageRoute) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '/' : `/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenReserve = (exp: 'restaurant' | 'catering' | 'cafe' = 'restaurant') => {
    setReservationExperience(exp);
    setReservationModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F5F2EA] flex flex-col font-sans selection:bg-accent-champagne/30 selection:text-[#F5F2EA]">
      {/* Sticky Top Navbar - 100% Uniform & Consistent on All Pages */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenReserve={handleOpenReserve}
      />

      {/* Dynamic Page Views */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigateToPage={navigateTo}
            onOpenReserve={handleOpenReserve}
            onOpenLightbox={(item) => setActiveLightboxItem(item)}
          />
        )}

        {currentPage === 'restaurant' && (
          <RestaurantPage
            onBackToHome={() => navigateTo('home')}
            onOpenReserve={() => handleOpenReserve('restaurant')}
          />
        )}

        {currentPage === 'catering' && (
          <CateringPage
            onBackToHome={() => navigateTo('home')}
            onSuccessToast={(msg) => setToastMessage(msg)}
          />
        )}

        {currentPage === 'cafe' && (
          <CafePage
            onBackToHome={() => navigateTo('home')}
            onOpenReserve={() => handleOpenReserve('cafe')}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onBackToHome={() => navigateTo('home')}
            onNavigateToService={(svc) => navigateTo(svc)}
            onOpenReserve={handleOpenReserve}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onBackToHome={() => navigateTo('home')}
            onOpenReserve={handleOpenReserve}
            onSuccessToast={(msg) => setToastMessage(msg)}
          />
        )}
      </main>

      {/* Footer with Route Navigation */}
      <Footer onNavigate={navigateTo} />

      {/* Sticky Mobile Quick Action Bar (Visible only on < sm screens) */}
      <MobileActionBar onNavigate={navigateTo} />

      {/* Modals & Overlays */}
      <ReservationModal
        isOpen={reservationModalOpen}
        initialExperience={reservationExperience}
        onClose={() => setReservationModalOpen(false)}
        onSuccess={(msg) => setToastMessage(msg)}
      />

      <MenuModal
        isOpen={menuModalOpen}
        initialTab={menuInitialTab}
        onClose={() => setMenuModalOpen(false)}
        onOpenReserve={() => {
          setMenuModalOpen(false);
          handleOpenReserve('restaurant');
        }}
      />

      <LightboxModal
        item={activeLightboxItem}
        onClose={() => setActiveLightboxItem(null)}
      />

      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
};

export default App;
