'use client';

import { ImageWithFallback } from './figma/ImageWithFallback';
// 화살표 아이콘 경로
const arrowIcon = '/images/b0c95ee357b63dada62069de1e3970b041eb5235.png';

export default function AIInsights() {
  const insights = [
    {
      image: '/images/b1.webp',
      description: "이제는 문화가 된 '클로드 코드', 조직에서 잘 사용하는 방법",
      url: 'https://inblog.ai/letsur/using-claude-code-effectively'
    },
    {
      image: '/images/b2.webp',
      description: "똑똑한 조직일수록 'AI 옵저버빌리티'에 집착합니다",
      url: 'https://inblog.ai/letsur/ai-observability-importance'
    },
    {
      image: '/images/b3.webp',
      description: "💸OpenAI 요금 폭탄 사례｜API Key 관리 놓치면 팀 예산이 무너집니다",
      url: 'https://inblog.ai/letsur/openai-api-key-management'
    }
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[130px]">
      <div className="container-responsive mx-auto px-5 md:px-8 lg:px-0">
        {/* Header */}
        <div className="flex justify-between items-center" style={{ marginBottom: '40px' }}>
          <h2 
            className="text-black text-[26px] md:text-[32px] lg:text-[36px]"
            style={{
              fontWeight: '600',
              letterSpacing: '-0.02em',
              lineHeight: '1.3'
            }}
          >
            렛서의 AI 인사이트
          </h2>
          <a 
            href="https://inblog.ai/letsur"
            className="flex items-center gap-1 group"
            style={{
              fontSize: '16px',
              fontWeight: '500',
              color: '#555',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => {
              const textSpan = e.currentTarget.querySelector('span');
              if (textSpan) (textSpan as HTMLElement).style.color = '#111111';
            }}
            onMouseLeave={(e) => {
              const textSpan = e.currentTarget.querySelector('span');
              if (textSpan) (textSpan as HTMLElement).style.color = '#555';
            }}
          >
            <span style={{ color: '#555', transition: 'color 0.3s' }}>
              더 보러가기
            </span>
            <img 
              src={arrowIcon} 
              alt="arrow" 
              className="transition-transform duration-300 group-hover:translate-x-1"
              style={{ width: '30px', height: '30px' }}
            />
          </a>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-col md:flex-row" style={{ gap: '28px' }}>
          {insights.map((insight, index) => (
            <a
              key={index}
              href={insight.url || '#'}
              className="block"
              style={{
                padding: insight.image ? '0' : '32px 24px',
                borderRadius: '0px',
                width: '100%',
                maxWidth: '386px',
                overflow: 'hidden'
              }}
            >
              {/* Image or Tag/Title */}
              {insight.image ? (
                <>
                  {/* Image */}
                  <div style={{ width: '100%', height: '200px' }}>
                    <ImageWithFallback 
                      src={insight.image}
                      alt="Insight"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  
                  {/* Content with padding */}
                  <div style={{ paddingTop: '16px' }}>
                    {/* Label */}
                    <div 
                      style={{
                        color: '#00c781',
                        fontSize: '16px',
                        fontWeight: '600',
                        lineHeight: '1.5',
                        marginBottom: '8px'
                      }}
                    >
                      Letsur
                    </div>

                    {/* Description */}
                    <p 
                      style={{
                        color: '#111111',
                        fontSize: '20px',
                        fontWeight: '600',
                        lineHeight: '1.5'
                      }}
                    >
                      {insight.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {/* Tag */}
                  <div 
                    className="text-[#26C9A3]"
                    style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      marginBottom: '16px'
                    }}
                  >
                    {insight.tag}
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-black"
                    style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      letterSpacing: '-0.02em',
                      marginBottom: '24px',
                      lineHeight: '1.4'
                    }}
                  >
                    {insight.titleEmoji && <span>{insight.titleEmoji}</span>}
                    {insight.title}
                    {insight.titleHighlight && (
                      <span className="text-[#26C9A3]">{insight.titleHighlight}</span>
                    )}
                    {insight.titleEmojiEnd && <span>{insight.titleEmojiEnd}</span>}
                    {insight.titleContinue}
                    {insight.titleEnd}
                  </h3>

                  {/* Divider */}
                  <div 
                    className="bg-[#D9D9D9]"
                    style={{
                      height: '1px',
                      marginBottom: '16px'
                    }}
                  />

                  {/* Label */}
                  <div 
                    className="text-black"
                    style={{
                      fontSize: '12px',
                      fontWeight: '500',
                      marginBottom: '8px'
                    }}
                  >
                    Letsur
                  </div>

                  {/* Description */}
                  <p 
                    className="text-black"
                    style={{
                      fontSize: '14px',
                      fontWeight: '400',
                      lineHeight: '1.5',
                      opacity: '0.8'
                    }}
                  >
                    {insight.description}
                  </p>
                </>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
