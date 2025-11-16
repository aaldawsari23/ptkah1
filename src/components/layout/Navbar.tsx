'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-background-light border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.jpeg" alt="تسعة وتسعين" className="h-8 w-8" />
            <div className="text-2xl font-bold flex items-center gap-1">
              <span className="text-primary">تسعة</span>
              <span className="text-white"> وتسعين</span>
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
      </div>
    </nav>
  );
}
