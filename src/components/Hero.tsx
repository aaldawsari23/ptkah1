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
          <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-4 flex flex-col items-center justify-center gap-3">
            {/* Logo and names */}
            <img src="/logo.jpeg" alt="سوفت تسعة وتسعين" className="w-16 h-16 md:w-20 md:h-20 mx-auto" />
            <div className="flex flex-col items-center">
              <span className="text-primary text-3xl md:text-4xl">سوفت تسعة وتسعين للدراجات النارية</span>
              <span className="text-white text-xl md:text-2xl">SoftNinteyNine</span>
            </div>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-text-secondary mb-6 max-w-3xl mx-auto">
            بيع (جديد ومستعمل) + قطع غيار + اكسسوارات + مواقف للإيجار الشهري
          </p>

          <p className="text-base md:text-lg text-text-muted mb-10 max-w-2xl mx-auto">
            نوفّر أفضل الدراجات النارية، قطع الغيار الأصلية، الإكسسوارات عالية الجودة وخدمات الصيانة
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Variety of bikes */}
            <div className="text-center flex flex-col items-center">
              <img src="/logo.jpeg" alt="تنوع الدراجات" className="w-14 h-14 mb-3" />
              <h3 className="text-white font-semibold mb-2">تنوع الدراجات</h3>
              <p className="text-text-secondary text-sm text-center">
                سبورت، كروزر، ادفنتشر، بطه وغيرها
              </p>
            </div>
            {/* Parts and Maintenance */}
            <div className="text-center flex flex-col items-center">
              <img src="/icons/maintenance.jpeg" alt="قطع الغيار والصيانة" className="w-14 h-14 mb-3" />
              <h3 className="text-white font-semibold mb-2">قطع الغيار والصيانة</h3>
              <p className="text-text-secondary text-sm text-center">
                قطع أصلية وخبرة متخصصة للمحافظة على دراجتك
              </p>
            </div>
            {/* Parking */}
            <div className="text-center flex flex-col items-center">
              <span className="text-5xl mb-3">🅿️</span>
              <h3 className="text-white font-semibold mb-2">مواقف آمنة للإيجار</h3>
              <p className="text-text-secondary text-sm text-center">
                خيارات يومية وأسبوعية وشهرية لحفظ دراجتك بأمان
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
