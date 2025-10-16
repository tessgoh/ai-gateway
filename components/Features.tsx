// 기능 이미지 경로
const memberPermissionImage = '/images/08c8f032619a993ad1051a88ab01906b88971ed9.avif';
const apiKeyManagementImage = '/images/d91d0d28aa0fb04f32a47622b38483735a312b8a.avif';
const usageMonitoringImage = '/images/ac0519a085f3a333dc8b615a433827b0444c1ac2.avif';
const billingImage = '/images/31427ef6a8a63acc6572271cc57e286c426e851f.avif';

export default function Features() {
  const features = [
    {
      title: "1. 멤버 권한 관리",
      description: "사용자별로 Manage/Create/View 권한을 설정해 체계적으로 운영할 수 있습니다.",
      image: memberPermissionImage
    },
    {
      title: "2. API Key 관리",
      description: "사용자 지정, 한도 제한, 만료일 설정으로 API Key를 안전하게 보호할 수 있습니다.",
      image: apiKeyManagementImage
    },
    {
      title: "3. 모델/사용자 사용 현황 관리",
      description: "사용자와 모델별 사용 현황을 한눈에 파악하고, 사용 패턴을 쉽게 분석할 수 있습니다.",
      image: usageMonitoringImage
    },
    {
      title: "4. 청구서 통합 관리",
      description: "여러 모델을 사용해도 청구서를 단 한 장으로 통합해 정산을 간편하게 할 수 있습니다.",
      image: billingImage
    }
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:pt-20 lg:pb-[130px]" style={{ backgroundColor: '#111111' }}>
      <div className="container-responsive mx-auto px-5 md:px-8 lg:px-0">
        {/* Heading */}
        <h2 
          className="text-center text-[26px] md:text-[26px] lg:text-[36px]"
          style={{
            fontWeight: '600',
            letterSpacing: '-0.02em',
            lineHeight: '34px',
            color: '#FFFFFF',
            marginBottom: '58px'
          }}
        >
          효율적인 AI API 관리를 위한 필수 기능
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className="p-8"
                style={{ borderRadius: '0px', border: '1px solid #333333' }}
              >
                {/* Title */}
                <h3 
                  className="text-[18px] lg:text-[22px]"
                  style={{
                    fontWeight: '600',
                    color: '#00ab7f',
                    lineHeight: '26px',
                    marginBottom: '12px'
                  }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p 
                  style={{
                    fontSize: '16px',
                    fontWeight: '400',
                    color: '#999999',
                    lineHeight: '24px',
                    marginBottom: feature.image ? '24px' : '0'
                  }}
                >
                  {feature.description}
                </p>

                {/* Image */}
                {feature.image && (
                  <div className="w-full">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-auto"
                      style={{ borderRadius: '8px' }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
