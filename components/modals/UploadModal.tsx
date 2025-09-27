import React, { useState } from 'react';
import { Product, Category } from '../../types';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import { Icon } from '../ui/Icon';

interface UploadModalProps {
  onClose: () => void;
  onOpenModal: (modal: 'checkout', product?: Product) => void;
}

const UploadModal: React.FC<UploadModalProps> = ({ onClose, onOpenModal }) => {
  const [acceptsAffiliates, setAcceptsAffiliates] = useState(false);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  // Mock product for promotion payment
  const promotionProduct: Product = {
    id: 'PROMO-01',
    title: 'Plan de Promoción Clickall',
    description: '3 meses de promoción para hasta 3 productos.',
    price: 400,
    format: Category.PDF, // Placeholder format
    excerpt: 'Acceso para vender en la plataforma.',
    thumbnail: '',
    rating: 0,
    reviews: 0,
  };

  const handlePayPromotion = () => {
    // This would trigger an API call to create a promotion order.
    // For now, it just opens the checkout modal with the promotion details.
    console.log("Backend Call (Placeholder): Create promotion order.");
    onOpenModal('checkout', promotionProduct);
  };
  
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      // FIX: Explicitly type the 'file' parameter in forEach as 'File'.
      // This resolves TypeScript errors where 'file' was inferred as 'unknown',
      // causing issues with accessing 'file.type' and using 'file' as an argument for FileReader.
      files.forEach((file: File) => {
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setImagePreviews(prev => [...prev, reader.result as string]);
          };
          reader.readAsDataURL(file);
        }
      });
    }
  };

  const handleRemoveImage = (indexToRemove: number) => {
    setImagePreviews(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <Modal title="Promocionar mi Producto" onClose={onClose}>
      <div className="grid gap-5">
        <div>
          <label htmlFor="title" className="text-sm font-medium text-gray-700">Título del Producto</label>
          <input id="title" type="text" className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-teal focus:border-teal" placeholder="Ej: Guía de Marketing Digital" />
        </div>
         <div>
          <label htmlFor="price" className="text-sm font-medium text-gray-700">Precio (CUP)</label>
          <input id="price" type="number" className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-teal focus:border-teal" placeholder="Ej: 350.00" />
        </div>
        <div>
          <label htmlFor="description" className="text-sm font-medium text-gray-700">Descripción</label>
          <textarea id="description" rows={3} className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-teal focus:border-teal" placeholder="Describe tu producto en detalle..."></textarea>
        </div>
        <div>
          <label htmlFor="file-upload" className="text-sm font-medium text-gray-700">Archivo Principal del Producto</label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <Icon type="upload" className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label htmlFor="file-upload-input" className="relative cursor-pointer bg-white rounded-md font-medium text-teal hover:text-teal focus-within:outline-none">
                  <span>Sube un archivo</span>
                  <input id="file-upload-input" name="file-upload" type="file" className="sr-only" />
                </label>
                <p className="pl-1">o arrastra y suelta</p>
              </div>
              <p className="text-xs text-gray-500">PDF, MP3, MP4, etc. (Hasta 100MB)</p>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="image-upload" className="text-sm font-medium text-gray-700">Imágenes Promocionales</label>
          {imagePreviews.length > 0 && (
            <div className="mt-2 grid grid-cols-3 sm:grid-cols-4 gap-3">
              {imagePreviews.map((src, index) => (
                <div key={index} className="relative group aspect-square">
                  <img src={src} alt={`Preview ${index + 1}`} className="w-full h-full object-cover rounded-md" />
                  <button 
                    onClick={() => handleRemoveImage(index)} 
                    className="absolute top-1 right-1 bg-black/60 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Eliminar imagen"
                  >
                    <Icon type="trash" className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
          <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <Icon type="upload" className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label htmlFor="image-upload-input" className="relative cursor-pointer bg-white rounded-md font-medium text-teal hover:text-teal focus-within:outline-none">
                  <span>Sube imágenes</span>
                  <input id="image-upload-input" name="image-upload" type="file" className="sr-only" multiple accept="image/*" onChange={handleImageChange} />
                </label>
                <p className="pl-1">o arrastra y suelta</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG hasta 10MB</p>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-navy mb-3">Programa de Afiliados</h4>
            <div className="flex items-center justify-between">
              <label htmlFor="affiliates" className="text-sm text-gray-700">Aceptar afiliados para este producto</label>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" id="affiliates" className="sr-only peer" checked={acceptsAffiliates} onChange={() => setAcceptsAffiliates(!acceptsAffiliates)} />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal"></div>
              </label>
            </div>
            {acceptsAffiliates && (
              <div className="mt-4">
                <label htmlFor="commission" className="text-sm font-medium text-gray-700">Comisión por venta (%)</label>
                <input id="commission" type="number" className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-teal focus:border-teal" placeholder="Ej: 20" />
              </div>
            )}
        </div>


        <div className="bg-blue-50 border-l-4 border-navy p-4 rounded-r-lg">
            <h4 className="font-bold text-navy">Plan de Promoción</h4>
            <p className="text-sm text-gray-700">Pago único: <strong>400 CUP</strong> por 3 meses, para un máximo de 3 productos.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-end">
          <Button variant="secondary">Guardar Borrador</Button>
          <Button variant="primary" onClick={handlePayPromotion} className="bg-teal hover:bg-opacity-90">
            Pagar Promoción y Publicar
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default UploadModal;
