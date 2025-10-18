'use client';

import { useState } from 'react';
import { X, Globe } from 'lucide-react';
// 이미지 경로
const logoImage = '/images/f935033bba0d0ac7b0bf2879fa4864a9dd06a139.png';
const globeIcon = '/images/ic-globe.svg';
const chevronDownIcon = '/images/ic-chevron-down.svg';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function GNB() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('KR');

  // 현재 페이지가 한국어 페이지인지 확인
  const isKoreanPage = typeof window !== 'undefined' && window.location.pathname.includes('/kr');

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
              {menuItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className={`transition-all ${item.label === 'API 관리' ? '' : 'hover:text-white hover:font-semibold'}`}
                  style={{ 
                    fontSize: '16px',
                    color: item.label === 'API 관리' ? '#ffffff' : 'rgba(255, 255, 255, 0.6)',
                    fontWeight: item.label === 'API 관리' ? '600' : '400',
                    marginRight: index === menuItems.length - 1 ? '20px' : '0'
                  }}
                >
                  {item.label}
                </a>
              ))}
              
              {/* Language Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button 
                    className="flex items-center transition-all focus:outline-none rounded-full border cursor-pointer"
                    style={{ 
                      fontSize: '14px',
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontWeight: '400',
                      borderColor: '#555555',
                      borderWidth: '1px',
                      width: '82px',
                      height: '34px',
                      gap: '6px',
                      paddingLeft: '12px',
                      paddingRight: '8px',
                      backgroundColor: '#111111'
                    }}
                    aria-label="언어 선택"
                  >
                    <img 
                      src={globeIcon}
                      alt="Globe" 
                      className="w-4 h-4"
                    />
                    <span>{currentLang}</span>
                    <img 
                      src={chevronDownIcon}
                      alt="Chevron Down" 
                      className="w-4 h-4"
                    />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="end" 
                  className="!w-[82px] !min-w-[82px] border flex flex-col justify-between gap-[-2px] [&>*]:hover:!bg-transparent [&>*]:focus:!bg-transparent [&>*]:!bg-transparent"
                  style={{ 
                    marginTop: '0px',
                    backgroundColor: '#111111',
                    borderColor: '#555555',
                    borderRadius: '8px',
                    paddingTop: '18px',
                    paddingBottom: '18px',
                    paddingLeft: '0',
                    paddingRight: '0',
                    height: '130px'
                  }}
                >
                  <DropdownMenuItem 
                    onClick={() => {
                      setCurrentLang('KR');
                      window.location.href = 'https://letsur.ai/kr';
                    }}
                    className="language-menu-item"
                    style={{ 
                      fontSize: '16px',
                      color: '#FFFFFF',
                      fontWeight: '600',
                      justifyContent: 'center',
                      backgroundColor: 'transparent !important',
                      marginBottom: '-2px'
                    }}
                  >
                    KR
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => {
                      setCurrentLang('EN');
                      window.location.href = 'https://letsur.ai/en';
                    }}
                    className="language-menu-item"
                    style={{ 
                      fontSize: '16px',
                      color: currentLang === 'EN' ? '#FFFFFF' : '#9E9E9E',
                      fontWeight: currentLang === 'EN' ? '600' : '400',
                      justifyContent: 'center',
                      marginBottom: '-2px'
                    }}
                  >
                    EN
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => {
                      setCurrentLang('JP');
                      window.location.href = 'https://letsur.ai/jp';
                    }}
                    className="language-menu-item"
                    style={{ 
                      fontSize: '16px',
                      color: currentLang === 'JP' ? '#FFFFFF' : '#9E9E9E',
                      fontWeight: currentLang === 'JP' ? '600' : '400',
                      justifyContent: 'center',
                      marginBottom: '-2px'
                    }}
                  >
                    JP
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
              
              {/* Language Selection */}
              <div className="border-b border-[#EEEEEE]">
                <div className="flex items-center gap-2 h-16 px-6" style={{ fontSize: '16px', color: '#6E6E6E' }}>
                  <Globe className="w-5 h-5" />
                  <span className="font-medium">언어</span>
                </div>
                <div className="pb-4 px-6 space-y-2">
                  <button
                    onClick={() => {
                      setCurrentLang('KR');
                      window.location.href = 'https://letsur.ai/kr';
                    }}
                    className="w-full text-left py-2 px-4 rounded-lg hover:bg-[#F9FAFB] transition-colors"
                    style={{ 
                      fontSize: '16px',
                      color: currentLang === 'KR' ? '#26C9A3' : '#111111',
                      fontWeight: currentLang === 'KR' ? '600' : '400'
                    }}
                  >
                    한국어
                  </button>
                  <button
                    onClick={() => {
                      setCurrentLang('EN');
                      window.location.href = 'https://letsur.ai/en';
                    }}
                    className="w-full text-left py-2 px-4 rounded-lg hover:bg-[#F9FAFB] transition-colors"
                    style={{ 
                      fontSize: '16px',
                      color: currentLang === 'EN' ? '#26C9A3' : '#111111',
                      fontWeight: currentLang === 'EN' ? '600' : '400'
                    }}
                  >
                    English
                  </button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
