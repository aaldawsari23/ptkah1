'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductGrid from '@/components/products/ProductGrid';
import { products, categories, brands } from '@/data/mockData';
import { ProductType, StockStatus } from '@/types';

export default function CatalogContent() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get('type') as ProductType | null;
  const conditionParam = searchParams.get('condition');

  // Filters state
  const [selectedType, setSelectedType] = useState<ProductType | 'all'>(typeParam || 'all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedStockStatus, setSelectedStockStatus] = useState<StockStatus | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'price-asc' | 'price-desc' | 'name'>('newest');
  const [selectedCondition, setSelectedCondition] = useState<'all' | 'new' | 'used'>(
    conditionParam === 'new' || conditionParam === 'used' ? (conditionParam as any) : 'all',
  );

  // Control visibility of advanced filter sidebar. Hidden by default for a cleaner interface.
  const [showFilters, setShowFilters] = useState<boolean>(false);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products.filter(p => p.status === 'published');

    // Type filter
    if (selectedType !== 'all') {
      filtered = filtered.filter(p => p.type === selectedType);
    }

    // Condition filter (new or used)
    if (selectedCondition === 'new') {
      filtered = filtered.filter(p => p.is_new);
    } else if (selectedCondition === 'used') {
      filtered = filtered.filter(p => !p.is_new);
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
    <div className="space-y-6">
      {/* Top bar: results count, sort and advanced filter toggle */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
        <p className="text-text-secondary">
          {filteredProducts.length} منتج
        </p>
        <div className="flex flex-wrap items-center gap-4">
          {/* Sorting select */}
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
          {/* Advanced filter toggle button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="btn-secondary text-sm whitespace-nowrap"
          >
            {showFilters ? 'إغلاق الفلاتر' : 'تصفية متقدمة'}
          </button>
        </div>
      </div>

      {/* Quick filter chips */}
      <div className="flex flex-col gap-4">
        {/* Type chips */}
        <div className="flex flex-wrap gap-2">
          {([
            { key: 'all', label: 'الكل' },
            { key: 'bike', label: 'دراجات نارية' },
            { key: 'part', label: 'قطع غيار' },
            { key: 'gear', label: 'إكسسوارات' },
          ] as { key: ProductType | 'all'; label: string }[]).map((opt) => (
            <button
              key={opt.key}
              onClick={() => {
                setSelectedType(opt.key as any);
                // reset category when type changes
                setSelectedCategory('all');
              }}
              className={`px-4 py-2 rounded-full border text-sm transition-colors ${
                selectedType === opt.key
                  ? 'bg-primary text-white border-primary'
                  : 'border-gray-700 text-text-secondary hover:bg-primary hover:text-white'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
        {/* Condition chips */}
        <div className="flex flex-wrap gap-2">
          {([
            { key: 'all', label: 'كل الحالات' },
            { key: 'new', label: 'جديد' },
            { key: 'used', label: 'مستعمل' },
          ] as { key: 'all' | 'new' | 'used'; label: string }[]).map((opt) => (
            <button
              key={opt.key}
              onClick={() => setSelectedCondition(opt.key)}
              className={`px-4 py-2 rounded-full border text-sm transition-colors ${
                selectedCondition === opt.key
                  ? 'bg-primary text-white border-primary'
                  : 'border-gray-700 text-text-secondary hover:bg-primary hover:text-white'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
        {/* Category chips */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full border text-sm transition-colors ${
              selectedCategory === 'all'
                ? 'bg-primary text-white border-primary'
                : 'border-gray-700 text-text-secondary hover:bg-primary hover:text-white'
            }`}
          >
            كل الفئات
          </button>
          {filteredCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full border text-sm transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary text-white border-primary'
                  : 'border-gray-700 text-text-secondary hover:bg-primary hover:text-white'
              }`}
            >
              {category.name_ar}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-4">
        {/* Filters Sidebar - displayed conditionally */}
        {showFilters && (
          <aside className="lg:col-span-1">
            <div className="card sticky top-24">
              <h2 className="text-xl font-bold text-white mb-4">الفلاتر المتقدمة</h2>

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

              {/* Brand Filter */}
              <div className="mb-6">
                <label className="block text-sm text-text-secondary mb-2">الماركة</label>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="input-field w-full"
                >
                  <option value="all">كل الماركات</option>
                  {brands.map((brand) => (
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
                  setSelectedCondition('all');
                }}
                className="btn-secondary w-full"
              >
                إعادة تعيين الكل
              </button>
            </div>
          </aside>
        )}

        {/* Products Column */}
        <div className={showFilters ? 'lg:col-span-3' : 'lg:col-span-4'}>
          {/* Products Grid */}
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}
