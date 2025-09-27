import React, { useState, useCallback } from 'react';
import { Product } from './types';
import { products } from './constants';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import CtaSection from './components/CtaSection';
import AffiliateSection from './components/AffiliateSection';
import Footer from './components/Footer';
import UploadModal from './components/modals/UploadModal';
import CheckoutModal from './components/modals/CheckoutModal';
import SellerDashboardModal from './components/modals/SellerDashboardModal';
import ProductDetailModal from './components/modals/ProductDetailModal';

type ModalType = 'upload' | 'checkout' | 'seller-dashboard' | 'product-detail' | null;

const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openModal = useCallback((modal: ModalType, product?: Product) => {
    if (product) {
      setSelectedProduct(product);
    }
    setActiveModal(modal);
  }, []);

  const closeModal = useCallback(() => {
    setActiveModal(null);
    setSelectedProduct(null);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-gray text-dark-gray font-sans">
      <Header onOpenModal={openModal} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <Hero />
        <ProductGrid products={products} onOpenModal={openModal} />
        <CtaSection onOpenModal={openModal} />
        <AffiliateSection />
      </main>

      <Footer />

      {activeModal === 'upload' && <UploadModal onClose={closeModal} onOpenModal={openModal} />}
      {activeModal === 'checkout' && selectedProduct && <CheckoutModal product={selectedProduct} onClose={closeModal} />}
      {activeModal === 'seller-dashboard' && <SellerDashboardModal onClose={closeModal} />}
      {activeModal === 'product-detail' && selectedProduct && <ProductDetailModal product={selectedProduct} onClose={closeModal} onOpenModal={openModal} />}
    </div>
  );
};

export default App;
