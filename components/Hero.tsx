import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight">
            Compra y Vende Infoproductos con Confianza
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            PDFs, audios, cursos en vídeo y más. Pago seguro con Transfermóvil y entrega automática de enlaces.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-6 py-3 bg-navy text-white font-semibold rounded-xl shadow-md hover:bg-opacity-90 transform hover:-translate-y-1 transition-all">
              Explorar Productos
            </button>
            <button className="px-6 py-3 border-2 border-gray-200 text-navy font-semibold rounded-xl hover:bg-gray-100 transition-colors">
              Cómo Funciona
            </button>
          </div>
        </div>
        <div className="bg-gradient-to-br from-gray-100 to-white p-4 rounded-xl shadow-inner">
          <img 
            src="https://picsum.photos/seed/hero/800/600" 
            alt="Digital products collage" 
            className="rounded-lg object-cover w-full h-72 lg:h-80"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
