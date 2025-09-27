import React from 'react';
import { Product } from '../types';
import Button from './ui/Button';

interface CtaSectionProps {
  onOpenModal: (modal: 'upload' | 'seller-dashboard', product?: Product) => void;
}

const CtaSection: React.FC<CtaSectionProps> = ({ onOpenModal }) => {
  return (
    <section className="mt-16 bg-white p-8 rounded-2xl shadow-sm">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-navy">Conviértete en Creador en Clickall</h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-3">
          Promociona hasta 3 productos por un pago único de <strong>400 (moneda local)</strong> durante 3 meses. Crea tu ficha, activa afiliados y empieza a vender hoy.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => onOpenModal('upload')} 
            variant="primary" 
            className="bg-teal hover:bg-opacity-90 text-white"
          >
            Subir mi Primer Producto
          </Button>
          <Button 
            onClick={() => onOpenModal('seller-dashboard')} 
            variant="secondary"
          >
            Ir a mi Panel de Vendedor
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
