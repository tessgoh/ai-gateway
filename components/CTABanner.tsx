// 배너 배경 이미지 경로
const bannerBackground = '/images/773fac7fd9ed1b320288f11c3864a021e1a1d836.avif';

export default function CTABanner() {
  return (
    <section 
      className="relative w-full overflow-hidden h-[280px] md:h-[320px] lg:h-[368px]"
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container-responsive relative mx-auto px-5 md:px-8 lg:px-0 h-full">
        <div className="flex flex-col items-center justify-center text-center h-full">
          {/* Title */}
          <h2 
            className="text-white text-[26px] md:text-[32px] lg:text-[36px]"
            style={{
              fontWeight: '600',
              letterSpacing: '-0.02em',
              lineHeight: '1.3',
              marginBottom: '24px'
            }}
          >
            이제 AI API 관리도 스마트하게, 렛서 AI 게이트웨이로 시작하세요
          </h2>

          {/* CTA Button */}
          <a
            href="https://letsur.ai/kr/inquiry"
            className="bg-[#00ab7f] hover:bg-[#008f6a] text-white transition-all duration-200"
            style={{
              fontSize: '18px',
              fontWeight: '600',
              borderRadius: '0px',
              padding: '14px 40px',
              display: 'inline-block'
            }}
          >
            도입 문의하기
          </a>
        </div>
      </div>
    </section>
  );
}
