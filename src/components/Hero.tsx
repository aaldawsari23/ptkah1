import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-background py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 flex flex-col items-center justify-center gap-2">
            <span className="flex items-center gap-3">
              <img src="/logo.jpeg" alt="تسعة وتسعين" className="w-12 h-12 md:w-16 md:h-16" />
              <span>
                <span className="text-primary">تسعة</span>
                <span className="text-white"> وتسعين</span>
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-text-secondary mb-8">
            عالم الدراجات النارية بين يديك
          </p>

          <p className="text-lg text-text-muted mb-12 max-w-2xl mx-auto">
            نوفر أفضل الدراجات النارية، قطع الغيار الأصلية، الإكسسوارات عالية الجودة وخدمات الصيانة والتوصيل
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/catalog" className="btn-primary px-8 py-3 text-lg">
              تصفح المنتجات
            </Link>
            <Link href="/contact" className="btn-secondary px-8 py-3 text-lg">
              تواصل معنا
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center flex flex-col items-center">
              <img src="/logo.jpeg" alt="أنواع الدراجات" className="w-14 h-14 mb-3" />
              <h3 className="text-white font-semibold mb-2">أنواع الدراجات</h3>
              <p className="text-text-secondary text-sm">
                رياضية، كروزر، مغامرات ودراجات بطه
              </p>
            </div>
            <div className="text-center flex flex-col items-center">
              <img src="/icons/maintenance.jpeg" alt="خدمات الصيانة" className="w-14 h-14 mb-3" />
              <h3 className="text-white font-semibold mb-2">خدمات الصيانة</h3>
              <p className="text-text-secondary text-sm">
                قطع غيار أصلية وخبرة في الصيانة
              </p>
            </div>
            <div className="text-center flex flex-col items-center">
              <img src="/icons/wash.jpeg" alt="الغسيل والتوصيل" className="w-14 h-14 mb-3" />
              <h3 className="text-white font-semibold mb-2">الغسيل والتوصيل</h3>
              <p className="text-text-secondary text-sm">
                خدمات غسيل وتوصيل سريعة للدراجات
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
