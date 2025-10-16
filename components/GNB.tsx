'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronRight } from 'lucide-react';
// 로고 이미지 경로
const logoImage = '/images/f935033bba0d0ac7b0bf2879fa4864a9dd06a139.png';

export default function GNB() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'AI 서비스 관리', href: 'https://letsur.ai/kr/product', external: false },
    { label: 'API 관리', href: 'http://letsur.ai/gateway', external: false },
    { label: 'AI 교육', href: 'https://www.aible-campus.com/', external: true },
    { label: '고객사례', href: 'https://letsur.ai/usecases', external: false },
    { label: '회사소개', href: 'https://letsur.ai/aboutus', external: false },
    { label: '블로그', href: 'https://inblog.ai/letsur', external: true },
  ];

  return (
    <>
      <header className="w-full sticky top-0 z-50" style={{ backgroundColor: '#000000' }}>
        <div className="container-responsive mx-auto px-5 md:px-8 lg:px-0">
          <div className="flex items-center justify-between h-14 md:h-[86px]">
            {/* Logo */}
            <a 
              href="https://letsur.ai" 
              className="flex items-center"
              aria-label="Letsur 홈페이지로 이동"
            >
              <img 
                src={logoImage} 
                alt="Letsur" 
                className="w-[140px] h-[18px] md:w-[186px] md:h-6"
              />
            </a>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-[60px]">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className={`hover:text-white transition-all ${item.label === '블로그' ? 'pr-[30.5px]' : ''}`}
                  style={{ 
                    fontSize: '16px',
                    color: item.label === 'API 관리' ? '#ffffff' : 'rgba(255, 255, 255, 0.6)',
                    fontWeight: item.label === 'API 관리' ? '600' : '400'
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
              className="lg:hidden w-11 h-11 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <div className="menu-line-wrap">
                  <div className="menu-line" />
                  <div className="menu-line" />
                  <div className="menu-line" />
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Sheet */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            role="navigation"
            aria-hidden={!mobileMenuOpen}
            className="lg:hidden bg-white border-t border-[#EEEEEE]"
            style={{ maxHeight: 'calc(100dvh - 56px)' }}
          >
            <nav className="overflow-y-auto">
              {menuItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="flex items-center justify-between h-16 px-6 border-b border-[#EEEEEE] hover:bg-[#F9FAFB] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-[#111111] font-medium" style={{ fontSize: '16px' }}>
                    {item.label}
                  </span>
                  <ChevronRight className="w-6 h-6 text-[#6E6E6E]" />
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
