import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t bg-white border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-4">
        <p>© {new Date().getFullYear()} Clickall — Marketplace de Infoproductos Digitales.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-navy transition-colors">Política de Privacidad</a>
          <a href="#" className="hover:text-navy transition-colors">Ayuda</a>
          <a href="#" className="hover:text-navy transition-colors">Contacto</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
