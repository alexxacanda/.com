import React from 'react';
import { Product } from '../types';
import { Icon } from './ui/Icon';
import StarRating from './ui/StarRating';

interface ProductCardProps {
  product: Product;
  onOpenModal: (modal: 'product-detail' | 'checkout', product: Product) => void;
}

const formatTagColor = (format: string) => {
  switch(format) {
    case 'PDF': return 'bg-red-100 text-red-800';
    case 'Audio': return 'bg-blue-100 text-blue-800';
    case 'Video': return 'bg-purple-100 text-purple-800';
    case 'Image': return 'bg-yellow-100 text-yellow-800';
    case 'Podcast': return 'bg-green-100 text-green-800';
    default: return 'bg-gray-100 text-gray-800';
  }
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenModal }) => {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="relative">
        <img src={product.thumbnail} alt={`${product.title} thumbnail`} className="w-full h-48 object-cover" />
        <div className={`absolute top-3 right-3 text-xs font-semibold px-2 py-1 rounded-full ${formatTagColor(product.format)}`}>
          {product.format}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-lg text-navy">{product.title}</h3>
        <p className="text-sm text-gray-600 mt-2 flex-grow">{product.excerpt}</p>
        
        <div className="mt-3">
          <StarRating rating={product.rating} reviewCount={product.reviews} />
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-xl font-extrabold text-navy">
            {product.price.toFixed(2)} <span className="text-lg font-semibold">CUP</span>
          </div>
          <div className="flex gap-2">
             <button 
              onClick={() => onOpenModal('product-detail', product)} 
              className="p-2 border rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Ver detalles"
            >
              <Icon type="eye" className="w-5 h-5"/>
            </button>
            <button 
              onClick={() => onOpenModal('checkout', product)} 
              className="px-4 py-2 bg-teal text-white font-semibold rounded-lg shadow-sm hover:bg-opacity-90 transition-all text-sm flex items-center gap-2"
            >
              <Icon type="cart" className="w-5 h-5"/>
              <span>Comprar</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
