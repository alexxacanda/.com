import React from 'react';
import { Product } from '../types';
import { Icon } from './ui/Icon';

interface HeaderProps {
  onOpenModal: (modal: 'upload' | 'seller-dashboard', product?: Product) => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  return (
    <header className="bg-white sticky top-0 z-30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-navy to-teal flex items-center justify-center text-white font-bold text-xl">
              C
            </div>
            <div>
              <h1 className="text-xl font-bold text-navy">Clickall</h1>
              <p className="text-xs text-gray-500 -mt-1">Marketplace Digital</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-2">
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-navy px-3 py-2 rounded-md transition-colors">Explorar</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-navy px-3 py-2 rounded-md transition-colors">Afiliados</a>
            <button
              onClick={() => onOpenModal('upload')}
              className="text-sm font-medium bg-teal hover:bg-opacity-90 text-white px-4 py-2 rounded-lg transition-all shadow-sm hover:shadow-md"
            >
              Vender
            </button>
            <button
              onClick={() => onOpenModal('seller-dashboard')}
              className="text-sm font-medium text-gray-600 border border-gray-300 hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors"
            >
              Mi Cuenta
            </button>
          </nav>
           <div className="md:hidden">
             <button className="text-gray-600 hover:text-navy">
                <Icon type="menu" className="w-6 h-6" />
             </button>
           </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
