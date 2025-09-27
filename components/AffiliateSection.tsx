import React from 'react';
import { Icon } from './ui/Icon';

const AffiliateSection: React.FC = () => {
  return (
    <section className="mt-16">
      <div className="bg-gradient-to-r from-navy to-blue-900 text-white p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-center">Programa de Afiliados y Gestores</h3>
        <p className="text-lg text-blue-200 max-w-3xl mx-auto mt-3 text-center">
          Los creadores pueden permitir afiliación y establecer comisiones. Los afiliados obtienen enlaces únicos que rastrean ventas y generan ingresos pasivos.
        </p>
         <p className="text-sm text-blue-300 max-w-3xl mx-auto mt-2 text-center">
          (Nota: Para fines de esta plataforma, "Afiliado" y "Gestor" se refieren al mismo rol).
        </p>
        <div className="mt-8 flex justify-center">
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 max-w-md w-full">
            <div className="flex items-center gap-4">
               <div className="bg-gold p-3 rounded-full">
                <Icon type="link" className="w-6 h-6 text-white"/>
              </div>
              <h4 className="font-bold text-xl">Como Afiliado / Gestor</h4>
            </div>
            <ul className="text-base text-blue-200 list-disc ml-5 mt-4 space-y-2">
              <li>Solicita la afiliación a los productos que te interesen.</li>
              <li>Copia tu enlace único y compártelo en tus redes.</li>
              <li>Gana una comisión por cada venta confirmada a través de tu enlace.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliateSection;
