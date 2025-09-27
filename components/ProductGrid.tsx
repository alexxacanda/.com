import React, { useState } from 'react';
import { Product, Category } from '../types';
import { CATEGORIES } from '../constants';
import ProductCard from './ProductCard';
import FilterChip from './ui/FilterChip';

interface ProductGridProps {
  products: Product[];
  onOpenModal: (modal: 'product-detail' | 'checkout', product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onOpenModal }) => {
  const [activeFilter, setActiveFilter] = useState<Category | 'All'>('All');

  const filteredProducts = activeFilter === 'All'
    ? products
    : products.filter(p => p.format === activeFilter);

  return (
    <section>
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
        <h2 className="text-3xl font-bold text-navy">Productos Destacados</h2>
        <div className="flex flex-wrap gap-2 justify-center">
          <FilterChip
            label="Todos"
            isActive={activeFilter === 'All'}
            onClick={() => setActiveFilter('All')}
          />
          {CATEGORIES.map(category => (
            <FilterChip
              key={category}
              label={category}
              isActive={activeFilter === category}
              onClick={() => setActiveFilter(category)}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} product={p} onOpenModal={onOpenModal} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
