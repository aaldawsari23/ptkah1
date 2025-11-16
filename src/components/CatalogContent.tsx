'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductGrid from '@/components/products/ProductGrid';
import { products, categories, brands } from '@/data/mockData';
import { ProductType, StockStatus } from '@/types';

export default function CatalogContent() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get('type') as ProductType | null;

  // Filters state
  const [selectedType, setSelectedType] = useState<ProductType | 'all'>(typeParam || 'all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedStockStatus, setSelectedStockStatus] = useState<StockStatus | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'price-asc' | 'price-desc' | 'name'>('newest');

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products.filter(p => p.status === 'published');

    // Type filter
    if (selectedType !== 'all') {
      filtered = filtered.filter(p => p.type === selectedType);
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category_id === selectedCategory);
    }

    // Brand filter
    if (selectedBrand !== 'all') {
      filtered = filtered.filter(p => p.brand_id === selectedBrand);
    }

    // Stock status filter
    if (selectedStockStatus !== 'all') {
      filtered = filtered.filter(p => p.stock_status === selectedStockStatus);
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p =>
        p.name_ar.toLowerCase().includes(query) ||
        p.name_en?.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name_ar.localeCompare(b.name_ar, 'ar'));
        break;
      case 'newest':
      default:
        filtered.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        break;
    }

    return filtered;
  }, [selectedType, selectedCategory, selectedBrand, selectedStockStatus, searchQuery, sortBy]);

  // Get filtered categories based on selected type
  const filteredCategories = useMemo(() => {
    if (selectedType === 'all') return categories;
    return categories.filter(c => c.type === selectedType);
  }, [selectedType]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Filters Sidebar */}
      <aside className="lg:col-span-1">
        <div className="card sticky top-24">
          <h2 className="text-xl font-bold text-white mb-4">الفلاتر</h2>

          {/* Search */}
          <div className="mb-6">
            <label className="block text-sm text-text-secondary mb-2">البحث</label>
            <input
              type="text"
              placeholder="ابحث عن منتج..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field w-full"
            />
          </div>

          {/* Type Filter */}
          <div className="mb-6">
            <label className="block text-sm text-text-secondary mb-2">النوع</label>
            <select
              value={selectedType}
              onChange={(e) => {
                setSelectedType(e.target.value as ProductType | 'all');
                setSelectedCategory('all');
              }}
              className="input-field w-full"
            >
              <option value="all">الكل</option>
              <option value="bike">دراجات نارية</option>
              <option value="part">قطع غيار</option>
              <option value="gear">إكسسوارات</option>
            </select>
          </div>

          {/* Category Filter */}
          <div className="mb-6">
            <label className="block text-sm text-text-secondary mb-2">الفئة</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="input-field w-full"
            >
              <option value="all">كل الفئات</option>
              {filteredCategories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name_ar}
                </option>
              ))}
            </select>
          </div>

          {/* Brand Filter */}
          <div className="mb-6">
            <label className="block text-sm text-text-secondary mb-2">الماركة</label>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="input-field w-full"
            >
              <option value="all">كل الماركات</option>
              {brands.map(brand => (
                <option key={brand.id} value={brand.id}>
                  {brand.name}
                </option>
              ))}
            </select>
          </div>

          {/* Stock Status Filter */}
          <div className="mb-6">
            <label className="block text-sm text-text-secondary mb-2">حالة التوفر</label>
            <select
              value={selectedStockStatus}
              onChange={(e) => setSelectedStockStatus(e.target.value as StockStatus | 'all')}
              className="input-field w-full"
            >
              <option value="all">الكل</option>
              <option value="available">متوفر</option>
              <option value="preorder">طلب مسبق</option>
              <option value="unavailable">غير متوفر</option>
            </select>
          </div>

          {/* Reset Button */}
          <button
            onClick={() => {
              setSelectedType('all');
              setSelectedCategory('all');
              setSelectedBrand('all');
              setSelectedStockStatus('all');
              setSearchQuery('');
            }}
            className="btn-secondary w-full"
          >
            إعادة تعيين الفلاتر
          </button>
        </div>
      </aside>

      {/* Products */}
      <div className="lg:col-span-3">
        {/* Sort and Results Count */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <p className="text-text-secondary">
            {filteredProducts.length} منتج
          </p>
          <div className="flex items-center gap-2">
            <label className="text-sm text-text-secondary">الترتيب:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="input-field"
            >
              <option value="newest">الأحدث</option>
              <option value="price-asc">السعر: من الأقل للأعلى</option>
              <option value="price-desc">السعر: من الأعلى للأقل</option>
              <option value="name">الاسم</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}
