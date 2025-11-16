import Link from 'next/link';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const displayName = product.name_ar || product.name_en || 'منتج';
  const isAvailable = product.stock_status === 'available';

  // Provide a fallback image per category. Some products in the mock data reuse the
  // same generic placeholder or omit images entirely. To ensure a unified
  // shopping experience, map common category IDs to high‑quality stock photos
  // hosted on Pexels. These images illustrate the general product type (e.g.
  // oil containers, brake discs, chains, tires, helmets, gloves, etc.). When
  // a product lacks its own image, the corresponding fallback is used.
  const fallbackImages: { [key: string]: string } = {
    'c-oil': 'https://images.pexels.com/photos/31864583/pexels-photo-31864583.jpeg',
    'c-oil-filter': 'https://images.pexels.com/photos/31864583/pexels-photo-31864583.jpeg',
    'c-air-filter': 'https://images.pexels.com/photos/31864583/pexels-photo-31864583.jpeg',
    'c-brake-pad': 'https://images.pexels.com/photos/5111310/pexels-photo-5111310.jpeg',
    'c-chain': 'https://images.pexels.com/photos/5111315/pexels-photo-5111315.jpeg',
    'c-battery': 'https://images.pexels.com/photos/5111315/pexels-photo-5111315.jpeg',
    'c-spark': 'https://images.pexels.com/photos/5111315/pexels-photo-5111315.jpeg',
    'c-tire': 'https://images.pexels.com/photos/14700339/pexels-photo-14700339.jpeg',
    'c-brake-fluid': 'https://images.pexels.com/photos/31864583/pexels-photo-31864583.jpeg',
    'c-coolant': 'https://images.pexels.com/photos/31864583/pexels-photo-31864583.jpeg',
    'c-electronics': 'https://images.pexels.com/photos/5111315/pexels-photo-5111315.jpeg',
    'c-lighting': 'https://images.pexels.com/photos/5111315/pexels-photo-5111315.jpeg',
    'c-accessory': 'https://images.pexels.com/photos/5111315/pexels-photo-5111315.jpeg',
    'c-helmet': 'https://images.pexels.com/photos/1915149/pexels-photo-1915149.jpeg',
    'c-gloves': 'https://images.pexels.com/photos/20662860/pexels-photo-20662860.png',
    'c-jacket': 'https://images.pexels.com/photos/15142722/pexels-photo-15142722.jpeg',
    'c-boots': 'https://images.pexels.com/photos/20662861/pexels-photo-20662861.png',
    'c-armor': 'https://images.pexels.com/photos/15142722/pexels-photo-15142722.jpeg',
    'c-gear-accessory': 'https://images.pexels.com/photos/15142722/pexels-photo-15142722.jpeg'
  };

  const imageSrc =
    (product.images && product.images.length > 0 && product.images[0]) ||
    fallbackImages[product.category_id] ||
    '';

  return (
    <Link href={`/product/${product.id}`}>
      <div
        className={`product-card group h-full flex flex-col ${
          product.type === 'bike' ? 'md:h-80' : 'md:h-64'
        }`}
      >
        {/* Image */}
        <div
          className={`relative overflow-hidden mb-3 rounded-md bg-gray-900 ${
            product.type === 'bike' ? 'h-56' : 'h-40'
          }`}
        >
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={displayName}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
            {!product.is_new && (
              <span className="bg-yellow-600 text-white text-xs px-2 py-1 rounded-md font-semibold">
                مستعمل
              </span>
            )}
            {!isAvailable && (
              <span className="bg-gray-700 text-white text-xs px-2 py-1 rounded-md font-semibold">
                غير متوفر
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
              {/* For bikes show mileage if present */}
              {product.type === 'bike' && product.specs['الممشى'] && (
                <div className="flex justify-between">
                  <span>الممشى:</span>
                  <span className="text-text-muted">{product.specs['الممشى']}</span>
                </div>
              )}
              {Object.entries(product.specs)
                .filter(([key]) => key !== 'الممشى')
                .slice(0, 2)
                .map(([key, value]) => (
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
              <span className="text-2xl font-bold text-green-500">
                {product.price.toLocaleString('ar-SA')}
              </span>
              <span className="text-sm text-text-secondary">{product.currency}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 pt-4 border-t border-gray-800">
          <button className="w-full btn-primary text-sm">عرض التفاصيل</button>
        </div>
      </div>
    </Link>
  );
}
