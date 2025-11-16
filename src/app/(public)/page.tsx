import Hero from '@/components/Hero';
import ProductGrid from '@/components/products/ProductGrid';
import { products } from '@/data/mockData';
import Link from 'next/link';

export default function Home() {
  // Get latest products (first 4)
  const latestProducts = products.filter(p => p.status === 'published').slice(0, 4);

  // Get bikes only (first 4)
  const bikes = products.filter(p => p.type === 'bike' && p.status === 'published').slice(0, 4);

  return (
    <>
      <Hero />

      {/* Latest Products Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">أحدث المنتجات</h2>
            <Link href="/catalog" className="text-primary hover:text-primary-hover transition-colors">
              عرض الكل ←
            </Link>
          </div>
          <ProductGrid products={latestProducts} />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-background-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">الفئات الرئيسية</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bikes Category */}
            <Link href="/catalog?type=bike" className="card p-8 text-center group">
              <div className="text-6xl mb-4">🏍️</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                الدراجات النارية
              </h3>
              <p className="text-text-secondary text-sm">
                دراجات رياضية، كروزر، وطرق وعرة
              </p>
            </Link>

            {/* Parts Category */}
            <Link href="/catalog?type=part" className="card p-8 text-center group">
              <div className="text-6xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                قطع الغيار
              </h3>
              <p className="text-text-secondary text-sm">
                إطارات، فلاتر، وقطع احترافية
              </p>
            </Link>

            {/* Gear Category */}
            <Link href="/catalog?type=gear" className="card p-8 text-center group">
              <div className="text-6xl mb-4">🪖</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                الإكسسوارات
              </h3>
              <p className="text-text-secondary text-sm">
                خوذ، قفازات، وجاكيتات
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Bikes Section */}
      {bikes.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">الدراجات المميزة</h2>
              <Link href="/catalog?type=bike" className="text-primary hover:text-primary-hover transition-colors">
                عرض كل الدراجات ←
              </Link>
            </div>
            <ProductGrid products={bikes} />
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-background-light to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            هل لديك استفسار؟
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            فريقنا جاهز لمساعدتك في اختيار الدراجة أو القطعة المناسبة
          </p>
          <Link href="/contact" className="btn-primary px-8 py-3 text-lg inline-block">
            تواصل معنا الآن
          </Link>
        </div>
      </section>
    </>
  );
}
