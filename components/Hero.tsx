// 배경 이미지 URL
const heroBackground = '/images/96ab470cd9a011b1ac76f4e901daf841d678ee13.avif';
const heroBackgroundMobile = '/images/407d5aa55ef8787b486192fb6ac70015bb0211bc.avif';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden h-[444px] md:h-[444px] lg:h-[554px]">
      {/* Desktop Background Image */}
      <div 
        className="hidden md:block absolute inset-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Mobile Background Image */}
      <div 
        className="md:hidden absolute inset-0"
        style={{
          backgroundImage: `url(${heroBackgroundMobile})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Black Overlay with 20% opacity */}
      <div className="absolute inset-0 w-full h-full bg-black/20" />

      {/* Content */}
      <div className="container-responsive relative mx-auto px-5 md:px-8 lg:px-0 h-[444px] md:h-[444px] lg:h-[554px]">
        <div className="flex flex-col items-center justify-center text-center h-full">
          {/* Main Heading */}
          <h1 
            className="text-white w-full text-[32px] md:text-[44px]"
            style={{
              lineHeight: '1.3',
              fontWeight: '600',
              letterSpacing: '-0.02em',
              marginBottom: '16px'
            }}
          >
            AI API 통합관리 서비스, <br className="md:hidden" />
            AI 게이트웨이
          </h1>

          {/* Description */}
          <p 
            className="w-full text-[16px] md:text-[20px]"
            style={{
              lineHeight: '1.5',
              fontWeight: '400',
              marginBottom: '36px',
              color: '#ffffff'
            }}
          >
            AI 게이트웨이는 조직의 AI API 운영을 한 곳에서 안전하고 효율적으로 통합 관리하는 서비스입니다.
          </p>

          {/* CTA Button */}
          <div className="flex items-center justify-center">
            <a
              href="https://letsur.ai/kr/inquiry"
              className="text-white border border-[#d3d3d3] hover:border-[#00c781] hover:text-[#00c781] transition-all duration-200"
              style={{
                fontSize: '16px',
                fontWeight: '600',
                borderRadius: '0px',
                padding: '14px 40px',
                backgroundColor: 'rgba(0, 0, 0, 0.5)'
              }}
            >
              도입 문의하기
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
