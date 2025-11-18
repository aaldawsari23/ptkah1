import { Product } from '@/types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  title?: string;
}

export default function ProductGrid({ products, title }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12 md:py-16">
        <div className="text-4xl md:text-5xl mb-4">🔍</div>
        <p className="text-text-secondary text-base md:text-lg">لا توجد منتجات متاحة</p>
      </div>
    );
  }

  return (
    <div>
      {title && (
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">{title}</h2>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className={
              product.type === 'bike'
                ? 'col-span-2 md:col-span-2 lg:col-span-2'
                : 'col-span-1'
            }
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
