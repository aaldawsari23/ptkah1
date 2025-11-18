import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-background to-background py-10 md:py-14 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <div className="flex flex-col items-center justify-center gap-3 mb-5">
            <img
              src="/logo.jpeg"
              alt="سوفت تسعة وتسعين"
              className="w-16 h-16 md:w-20 md:h-20 rounded-lg shadow-lg"
            />
            <h1 className="flex flex-col items-center gap-1">
              <span className="text-primary text-2xl md:text-4xl font-bold">
                سوفت تسعة وتسعين
              </span>
              <span className="text-white text-lg md:text-2xl font-semibold">
                SoftNinteyNine Bikes
              </span>
            </h1>
          </div>

          {/* Tagline */}
          <p className="text-sm md:text-lg text-text-secondary mb-3 max-w-2xl mx-auto leading-relaxed">
            بيع دراجات نارية (جديد ومستعمل) + قطع غيار أصلية + إكسسوارات + مواقف للإيجار
          </p>

          <p className="text-xs md:text-base text-text-muted mb-6 md:mb-8 max-w-xl mx-auto">
            نوفّر أفضل الدراجات وقطع الغيار والإكسسوارات عالية الجودة في جيزان
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <Link href="/catalog" className="btn-primary px-6 md:px-8 py-2.5 md:py-3 text-base md:text-lg w-full sm:w-auto">
              تصفح المنتجات 🏍️
            </Link>
            <Link href="/contact" className="btn-secondary px-6 md:px-8 py-2.5 md:py-3 text-base md:text-lg w-full sm:w-auto">
              تواصل معنا 📞
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
