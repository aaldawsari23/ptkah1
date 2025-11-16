import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background-light border-t border-gray-800 mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About / Branding */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <img src="/logo.jpeg" alt="سوفت تسعه وتسعين" className="w-8 h-8" />
              <div className="flex flex-col leading-tight">
                <span className="text-primary font-bold">سوفت تسعه وتسعين</span>
                <span className="text-white text-sm">SoftNinteyNine</span>
              </div>
            </div>
            <p className="text-text-secondary text-sm">
              بيع الدراجات النارية (جديد ومستعمل)، قطع الغيار، الإكسسوارات، ومواقف للإيجار الشهري.
            </p>
          </div>

          {/* Contact Numbers */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold mb-2">التواصل</h4>
            <div className="flex flex-col text-sm text-text-secondary space-y-1">
              <a
                href="https://wa.me/966568663381"
                className="hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                📞 إبراهيم عسيري: 0568663381
              </a>
              <a
                href="https://wa.me/966580874790"
                className="hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                📞 حسين سهيل: 0580874790
              </a>
            </div>
          </div>

          {/* Working hours & Location */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold mb-2">المحل</h4>
            <p className="text-sm text-text-secondary">
              🕒 أوقات العمل: يومياً من 5:30 عصراً حتى 3:00 فجراً
            </p>
            <p className="text-sm text-text-secondary">
              📍 الموقع: جيزان، بجوار مستشفى العميس، المملكة العربية السعودية
            </p>
            <Link
              href="https://maps.app.goo.gl/t6pyLPj52d18BaPH6?g_st=ipc"
              target="_blank"
              className="text-primary text-sm hover:text-primary-hover"
            >
              فتح الخريطة
            </Link>
          </div>

          {/* Social / Snap & Developer */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold mb-2">تابعنا</h4>
            <a
              href="https://www.snapchat.com/add/h5jk6"
              className="flex items-center gap-2 text-sm text-text-secondary hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              👻 h5jk6
            </a>
            <p className="text-xs text-text-muted mt-4">
              © 2025 Abdulkarim Aldawsari
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
