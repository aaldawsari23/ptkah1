'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Tracks which top-level menu is active (e.g. bikes, parts, gear) for displaying chips.
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setActiveMenu(prev => (prev === menu ? null : menu));
  };

  // Define chip options for each menu.
  const bikeChips = [
    { label: 'جديد', query: 'type=bike&condition=new' },
    { label: 'مستعمل', query: 'type=bike&condition=used' },
    { label: 'سبورت', query: 'type=bike&category=c-sport' },
    { label: 'كروزر', query: 'type=bike&category=c-cruiser' },
    { label: 'ادفنتشر', query: 'type=bike&category=c-adventure' },
    { label: 'قولدوينق/تجوال', query: 'type=bike&category=c-gold' },
    { label: 'صحراوي', query: 'type=bike&category=c-dirt' },
    { label: 'كوميوت', query: 'type=bike&category=c-commuter' },
  ];
  const partChips = [
    { label: 'زيوت', query: 'type=part&category=c-oil' },
    { label: 'فلاتر زيت', query: 'type=part&category=c-oil-filter' },
    { label: 'فلاتر هواء', query: 'type=part&category=c-air-filter' },
    { label: 'فرامل', query: 'type=part&category=c-brake-pad' },
    { label: 'سلاسل', query: 'type=part&category=c-chain' },
    { label: 'إطارات', query: 'type=part&category=c-tire' },
  ];
  const gearChips = [
    { label: 'خوذ', query: 'type=gear&category=c-helmet' },
    { label: 'قفازات', query: 'type=gear&category=c-gloves' },
    { label: 'جاكيتات', query: 'type=gear&category=c-jacket' },
    { label: 'أحذية', query: 'type=gear&category=c-boots' },
    { label: 'دروع', query: 'type=gear&category=c-armor' },
    { label: 'إكسسوارات أخرى', query: 'type=gear&category=c-gear-accessory' },
  ];

  return (
    <nav className="bg-background-light border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and store name */}
          <Link href="/" className="flex items-start gap-2">
            {/* Shield logo */}
            <img src="/logo.jpeg" alt="سوفت تسعة وتسعين" className="h-10 w-10 md:h-12 md:w-12" />
            {/* Store names and tagline */}
            <div className="leading-tight">
              <div className="flex flex-col">
                <span className="text-primary font-bold text-sm md:text-base">سوفت تسعة وتسعين للدراجات النارية</span>
                <span className="text-white text-xs md:text-sm">SoftNinteyNine</span>
              </div>
              <span className="hidden md:block text-[10px] text-text-muted mt-1">
                بيع (جديد ومستعمل) + قطع غيار + اكسسوارات + مواقف للإيجار الشهري
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-text-secondary hover:text-white transition-colors">
              الرئيسية
            </Link>
            <Link href="/catalog" className="text-text-secondary hover:text-white transition-colors">
              المنتجات
            </Link>
            {/* Bikes menu */}
            <button
              onClick={() => toggleMenu('bike')}
              className={`text-text-secondary hover:text-white transition-colors flex items-center gap-1 ${
                activeMenu === 'bike' ? 'text-primary' : ''
              }`}
            >
              الدراجات النارية
            </button>
            {/* Parts menu */}
            <button
              onClick={() => toggleMenu('part')}
              className={`text-text-secondary hover:text-white transition-colors flex items-center gap-1 ${
                activeMenu === 'part' ? 'text-primary' : ''
              }`}
            >
              ⚙️ قطع الغيار
            </button>
            {/* Gear menu */}
            <button
              onClick={() => toggleMenu('gear')}
              className={`text-text-secondary hover:text-white transition-colors flex items-center gap-1 ${
                activeMenu === 'gear' ? 'text-primary' : ''
              }`}
            >
              الإكسسوارات
            </button>
            {/* Parking menu */}
            <Link
              href="/parking"
              className="text-text-secondary hover:text-white transition-colors flex items-center gap-1"
            >
              🅿️ مواقف للإيجار
            </Link>
            <Link href="/contact" className="text-text-secondary hover:text-white transition-colors">
              تواصل معنا
            </Link>
          </div>

          {/* Admin Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/admin/login" className="btn-primary text-sm py-2 px-4">
              لوحة التحكم
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-text-secondary hover:text-white transition-colors">
                الرئيسية
              </Link>
              <Link href="/catalog" className="text-text-secondary hover:text-white transition-colors">
                المنتجات
              </Link>
              <Link href="/catalog?type=bike" className="text-text-secondary hover:text-white transition-colors">
                الدراجات
              </Link>
              <Link href="/catalog?type=part" className="text-text-secondary hover:text-white transition-colors">
                قطع الغيار
              </Link>
              <Link href="/catalog?type=gear" className="text-text-secondary hover:text-white transition-colors">
                الإكسسوارات
              </Link>
              <Link href="/contact" className="text-text-secondary hover:text-white transition-colors">
                تواصل معنا
              </Link>
              <Link href="/admin/login" className="btn-primary text-sm py-2 px-4 text-center">
                لوحة التحكم
              </Link>
            </div>
          </div>
        )}

      {/* Chips menu for desktop */}
      {activeMenu && (
        <div className="hidden md:block bg-background-light border-t border-gray-800 py-3">
          <div className="container mx-auto px-4 flex flex-wrap gap-2">
            {(activeMenu === 'bike' ? bikeChips : activeMenu === 'part' ? partChips : gearChips).map((chip) => (
              <Link
                key={chip.label}
                href={`/catalog?${chip.query}`}
                onClick={() => setActiveMenu(null)}
                className="text-sm whitespace-nowrap px-4 py-2 rounded-full border border-gray-700 bg-background hover:bg-primary hover:text-white transition-colors"
              >
                {chip.label}
              </Link>
            ))}
          </div>
        </div>
      )}
      </div>
    </nav>
  );
}
