import React from 'react';
import { Product, Category, Comment } from '../../types';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import StarRating from '../ui/StarRating';

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
  onOpenModal: (modal: 'checkout', product: Product) => void;
}

const ProductPreview: React.FC<{ product: Product }> = ({ product }) => {
  switch (product.format) {
    case Category.Audio:
    case Category.Podcast:
      return (
        <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-semibold text-sm mb-2 text-gray-700">Vista Previa de Audio</h4>
            <audio controls className="w-full" src={product.previewUrl}>
                Tu navegador no soporta el elemento de audio.
            </audio>
        </div>
      );
    case Category.Video:
      return (
        <video controls className="w-full rounded-lg bg-black" src={product.previewUrl}>
          Tu navegador no soporta el elemento de video.
        </video>
      );
    case Category.PDF:
        return (
            <div className="bg-gray-100 p-4 rounded-lg text-center border">
                <p className="text-sm text-gray-600">La vista previa de PDFs no está disponible en este demo.</p>
                <p className="text-xs text-gray-500 mt-1">Aquí se mostraría un excerpt o una imagen de la portada.</p>
                <img src={product.thumbnail} alt="PDF Preview" className="mt-4 rounded-md shadow-sm w-1/2 mx-auto" />
            </div>
        );
    case Category.Image:
    default:
      return <img src={product.thumbnail} alt={product.title} className="w-full h-64 object-cover rounded-lg" />;
  }
};

const CommentCard: React.FC<{ comment: Comment }> = ({ comment }) => (
    <div className="p-4 border-b last:border-b-0">
        <div className="flex items-center justify-between">
            <p className="font-semibold text-gray-800">{comment.author}</p>
            <p className="text-xs text-gray-500">{comment.date}</p>
        </div>
        <div className="mt-1">
            <StarRating rating={comment.rating} />
        </div>
        <p className="text-sm text-gray-600 mt-2">{comment.text}</p>
    </div>
);


const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose, onOpenModal }) => {
  return (
    <Modal title={product.title} onClose={onClose} size="2xl">
      <div className="mt-2 -ml-1">
        <StarRating rating={product.rating} reviewCount={product.reviews} />
      </div>
      <div className="mt-4 grid gap-6">
        <div className="w-full">
            <ProductPreview product={product} />
        </div>
        <div>
          <p className="text-gray-700 whitespace-pre-wrap">{product.description}</p>
        </div>

        {product.comments && product.comments.length > 0 && (
             <div>
                <h3 className="text-lg font-bold text-navy mb-2">Comentarios y Valoraciones</h3>
                <div className="border rounded-lg bg-gray-50/50 max-h-60 overflow-y-auto">
                    {product.comments.map(c => <CommentCard key={c.id} comment={c} />)}
                </div>
            </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50 p-4 rounded-lg">
          <div className="text-3xl font-extrabold text-navy">
            {product.price.toFixed(2)} <span className="text-2xl font-bold">CUP</span>
          </div>
          <Button 
            variant="primary" 
            className="w-full sm:w-auto"
            onClick={() => onOpenModal('checkout', product)}
          >
            Comprar Ahora
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ProductDetailModal;
