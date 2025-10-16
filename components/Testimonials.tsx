export default function Testimonials() {
  const testimonials = [
    {
      company: "카이스트 김재철AI대학원",
      quote: "KAIST 연구실은 수십 명의 연구원들이 다양한 LLM API를 사용하면서 키 관리·예산 통제·보안 문제로 큰 어려움을 겪었습니다. 렛서의 AI 게이트웨이를 도입한 뒤에는 API 사용 환경을 중앙에서 통합 관리하고, 졸업생의 키를 자동 회수하며, 사용량과 비용을 실시간으로 모니터링할 수 있게 되었습니다. 그 결과 관리자는 반복적인 관리 업무에서 벗어나 연구 지원과 성과 향상에 집중할 수 있게 되었습니다.",
      author: "주재걸, Associate Professor and KAIST-Endowed Chair Professor"
    },
    {
      company: "에이블캠퍼스",
      quote: "에이블캠퍼스는 렛서 AI 게이트웨이를 통해 많은 수강생들이 동시에 안정적으로 실습할 수 있는 환경을 손쉽게 구축했고, 수강 후에는 학습자들의 AI 활용 현황을 실시간으로 파악할 수 있었습니다. 또한 예산 한도와 사용량 제어 기능으로 실습 비용을 통제해 불필요한 리스크를 제거할 수 있었습니다.",
      author: "최혜린 총괄"
    },
    {
      company: "라이언로켓",
      quote: "챗봇을 안정적으로 운영하기 위해 해외의 OpenRouter 서비스를 고려했지만, 한국어 CS팀 지원과 조직/거버넌스 관리, 그리고 뛰어난 추적 기능 덕분에 결국 렛서 AI 게이트웨이를 도입하게 되었습니다. 현재는 챗봇 운영뿐만 아니라 내부 연구원의 실험 목적에도 활용하며 만족스럽게 사용하고 있습니다.",
      author: "정승환 대표"
    },
    {
      company: "올리브인터내셔널",
      quote: "올리브인터내셔널은 다양한 AI 기능을 사내에서 안정적으로 활용하기 위해 렛서 AI 게이트웨이를 도입했습니다. 이를 통해 수십 명의 구성원이 나노바나나, Veo3 같은 모델을 하나의 통합 환경에서 손쉽게 사용할 수 있었고, 관리자는 대시보드로 사용 현황과 비용을 실시간으로 통제할 수 있었습니다. 덕분에 운영 안정성과 비용 관리가 강화되었으며, 새로운 AI 기술 도입에도 자신감을 얻게 되었습니다.",
      author: "렛서 AX파트너즈"
    }
  ];

  return (
    <section className="w-full py-8 md:py-12 lg:pt-10 lg:pb-[130px]" style={{ backgroundColor: '#ffffff' }}>
      <div className="container-responsive mx-auto px-5 md:px-8 lg:px-0">
        {/* Heading */}
        <h2 
          className="text-center text-[26px] md:text-[32px] lg:text-[36px]"
          style={{
            fontWeight: '600',
            letterSpacing: '-0.02em',
            lineHeight: '1.3',
            color: '#000000',
            marginBottom: '58px'
          }}
        >
          AI 게이트웨이와 함께한 고객 이야기
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] p-8"
              style={{ 
                border: '1px solid #E5E5E5'
              }}
            >
              {/* Quote Icon */}
              <div style={{ marginBottom: '20px' }}>
                <img 
                  src="/images/68a1ca00683adbd85794aab3_%E2%80%9C%20(2).svg"
                  alt="Quote"
                  style={{ width: '14px', height: '10px' }}
                />
              </div>

              {/* Company Name */}
              <h3 
                style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#000000',
                  lineHeight: '1.4',
                  marginBottom: '16px'
                }}
              >
                {testimonial.company}
              </h3>

              {/* Quote */}
              <p 
                style={{
                  fontSize: '15px',
                  fontWeight: '400',
                  color: '#333333',
                  lineHeight: '1.7',
                  marginBottom: '16px'
                }}
              >
                {testimonial.quote}
              </p>

              {/* Author */}
              <p 
                style={{
                  fontSize: '13px',
                  fontWeight: '400',
                  color: '#999999',
                  lineHeight: '1.5'
                }}
              >
                {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
