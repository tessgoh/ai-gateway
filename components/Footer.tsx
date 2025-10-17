'use client';

// 로고 이미지 경로
const logoImage = '/images/f935033bba0d0ac7b0bf2879fa4864a9dd06a139.png';
import { ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full relative py-12 md:py-14 lg:py-16" style={{ backgroundColor: '#000000', minHeight: '193px' }}>
      <div className="container-responsive mx-auto px-5 md:px-8 lg:px-0">
        {/* Top Section: Logo and Navigation */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8" style={{ marginBottom: '40px' }}>
          {/* Logo */}
          <div>
            <img 
              src={logoImage}
              alt="Letsur Logo"
              className="w-[140px] h-[18px] md:w-[186px] md:h-[24px]"
            />
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex flex-col md:flex-row gap-4 md:gap-6">
            <a 
              href="https://letsur.ai/usecases"
              style={{
                fontFamily: 'Pretendard',
                fontWeight: 400,
                fontSize: '16px',
                color: '#e1e1e1',
                textDecoration: 'none',
                transition: 'color 0.2s, font-weight 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.fontWeight = '700';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#e1e1e1';
                e.currentTarget.style.fontWeight = '400';
              }}
            >
              고객 서비스
            </a>
            <a 
              href="https://letsur.ai/aboutus"
              style={{
                fontFamily: 'Pretendard',
                fontWeight: 400,
                fontSize: '16px',
                color: '#e1e1e1',
                textDecoration: 'none',
                transition: 'color 0.2s, font-weight 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.fontWeight = '700';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#e1e1e1';
                e.currentTarget.style.fontWeight = '400';
              }}
            >
              회사 소개
            </a>
            <a 
              href="https://inblog.ai/letsur"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'Pretendard',
                fontWeight: 400,
                fontSize: '16px',
                color: '#e1e1e1',
                textDecoration: 'none',
                transition: 'color 0.2s, font-weight 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.fontWeight = '700';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#e1e1e1';
                e.currentTarget.style.fontWeight = '400';
              }}
            >
              블로그
            </a>
          </nav>
        </div>

        {/* Policy Links */}
        <div className="flex mb-4 text-[14px] md:text-[16px]" style={{ alignItems: 'center' }}>
          <a 
            href="https://letsur.notion.site/d8978a3a8ee049dc8b26dc26d2f76e36"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'Pretendard',
              fontWeight: 600,
              color: '#e1e1e1',
              textDecoration: 'none',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#e1e1e1'}
          >
            이용약관
          </a>
          <div style={{ width: '1px', height: '12px', backgroundColor: '#D9D9D9', margin: '0 10px' }}></div>
          <a 
            href="https://letsur.notion.site/68e837a8476142efb67a3cb5ab22b21f"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'Pretendard',
              fontWeight: 600,
              color: '#e1e1e1',
              textDecoration: 'none',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#e1e1e1'}
          >
            개인정보 처리방침
          </a>
        </div>

        {/* Company Information */}
        <div 
          className="text-[14px] md:text-[16px]"
          style={{
            fontFamily: 'Pretendard',
            color: '#e1e1e1',
            lineHeight: '1.6',
            marginBottom: '12px'
          }}
        >
          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col gap-1" style={{ fontWeight: 400 }}>
            <div style={{ fontWeight: 600 }}>(주)렛서</div>
            <div>서울특별시 강남구 테헤란로 38길 8, 오피스B 역삼2호점 13층</div>
            <div>사업자등록번호: 146-87-02023</div>
            <div>대표이사: 심규현</div>
            <div>
              고객문의:&nbsp;
              <a 
                href="mailto:customer.service@letsur.ai"
                style={{
                  color: '#e1e1e1',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  fontWeight: 400
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#e1e1e1'}
              >
                customer.service@letsur.ai
              </a>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block" style={{ marginBottom: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
              <span style={{ fontWeight: 600, marginRight: '10px' }}>(주)렛서</span>
              <span style={{ fontWeight: 400 }}>서울특별시 강남구 테헤란로 38길 8, 오피스B 역삼2호점 13층</span>
              <div style={{ width: '1px', height: '12px', backgroundColor: '#D9D9D9', margin: '0 10px' }}></div>
              <span style={{ fontWeight: 400 }}>사업자등록번호: 146-87-02023</span>
              <div style={{ width: '1px', height: '12px', backgroundColor: '#D9D9D9', margin: '0 10px' }}></div>
              <span style={{ fontWeight: 400 }}>대표이사: 심규현</span>
              <div style={{ width: '1px', height: '12px', backgroundColor: '#D9D9D9', margin: '0 10px' }}></div>
              <span style={{ fontWeight: 400 }}>고객문의:&nbsp;</span>
              <a 
                href="mailto:customer.service@letsur.ai"
                style={{
                  color: '#e1e1e1',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  fontWeight: 400
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#e1e1e1'}
              >
                customer.service@letsur.ai
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div 
          className="text-[14px] md:text-[16px]"
          style={{
            fontFamily: 'Pretendard',
            color: '#6e6e6e',
            lineHeight: '1.5'
          }}
        >
          © Copyrights by Letsur. All Rights Reserved.
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed"
        style={{
          bottom: '32px',
          right: '32px',
          width: '48px',
          height: '48px',
          backgroundColor: '#FFFFFF',
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          transition: 'transform 0.2s, box-shadow 0.2s',
          zIndex: 1000
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
        }}
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} color="#000000" />
      </button>
    </footer>
  );
}
