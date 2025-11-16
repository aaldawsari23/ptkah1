import Link from 'next/link';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const displayName = product.name_ar || product.name_en || 'منتج';
  const isAvailable = product.stock_status === 'available';
  const isPreorder = product.stock_status === 'preorder';

  return (
    <Link href={`/product/${product.id}`}>
      <div className="product-card group h-full flex flex-col">
        {/* Image */}
        <div className="relative h-48 bg-gray-900 rounded-md overflow-hidden mb-3">
          {product.images && product.images.length > 0 ? (
            <img
              src={product.images[0]}
              alt={displayName}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-600">
              <span className="text-4xl">🏍️</span>
            </div>
          )}

          {/* Badges */}
          <div className="absolute top-2 right-2 flex flex-col gap-1">
            {product.is_new && (
              <span className="bg-primary text-white text-xs px-2 py-1 rounded-md font-semibold">
                جديد
              </span>
            )}
            {!isAvailable && (
              <span className="bg-gray-700 text-white text-xs px-2 py-1 rounded-md font-semibold">
                {isPreorder ? 'طلب مسبق' : 'غير متوفر'}
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
            {displayName}
          </h3>

          {/* Specs Preview */}
          {product.specs && Object.keys(product.specs).length > 0 && (
            <div className="text-xs text-text-secondary mb-3 space-y-1">
              {Object.entries(product.specs).slice(0, 2).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span>{key}:</span>
                  <span className="text-text-muted">{value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Price */}
          <div className="mt-auto">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-primary">
                {product.price.toLocaleString('ar-SA')}
              </span>
              <span className="text-sm text-text-secondary">{product.currency}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 pt-4 border-t border-gray-800">
          <button className="w-full btn-primary text-sm">
            عرض التفاصيل
          </button>
        </div>
      </div>
    </Link>
  );
}
