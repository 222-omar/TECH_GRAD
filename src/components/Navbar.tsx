'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '/' },
    { name: 'الخدمات', href: '/#services' },
    { name: 'الأعمال والمشاريع', href: '/projects' },
    { name: 'المهارات', href: '/#skills' },
    { name: 'الشهادات', href: '/#certificates' },
    { name: 'من أنا', href: '/#about' },
    { name: 'تواصل معي', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-gray-200'
          : 'bg-white/90 backdrop-blur-sm border-gray-100'
      }`}
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo on Right */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full border-2 border-amber-400 bg-white flex items-center justify-center p-1 shadow-sm">
              <div className="w-full h-full rounded-full bg-gradient-to-tr from-blue-700 via-blue-900 to-amber-500 flex items-center justify-center text-white font-black text-sm">
                TG
              </div>
            </div>
            <div className="hidden sm:block text-right">
              <h1 className="text-lg font-black text-gray-900 tracking-tight leading-none">
                TECH <span className="text-blue-600">GRAD</span>
              </h1>
              <p className="text-[11px] text-gray-500 font-medium mt-0.5">منصة مشاريع التخرج التكنولوجية</p>
            </div>
          </Link>

          {/* Nav Links in Center */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === pathname ||
                (link.href === '/projects' && pathname?.startsWith('/projects'));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 text-[14px] font-bold rounded-lg transition-all duration-150 ${
                    isActive
                      ? 'text-blue-600 bg-blue-50/80 font-black'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Left Side: Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Icon */}
            <Link
              href="/projects"
              className="w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50/50 transition-colors"
              title="بحث في المشاريع"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Link>

            {/* EN Button */}
            <div className="flex items-center gap-1 px-2.5 py-2 border border-gray-200 rounded-lg text-xs font-bold text-gray-700 hover:bg-gray-50 cursor-pointer">
              <span>EN</span>
              <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path strokeWidth="2" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
              </svg>
            </div>

            {/* CTA Button: اطلب خدمة الآن */}
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-[#2563eb] hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-sm hover:shadow transition-all duration-200"
            >
              <svg className="w-4 h-4 transform rotate-45 -mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
              <span>اطلب خدمة الآن</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-100"
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
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-2 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-sm font-bold text-gray-800 hover:bg-blue-50 hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-gray-100">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#2563eb] text-white px-4 py-3 rounded-lg font-bold text-sm"
            >
              <span>اطلب خدمة الآن</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
