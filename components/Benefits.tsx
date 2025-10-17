export default function Benefits() {

  return (
    <section className="w-full pt-16 pb-12 md:pt-20 md:pb-16 lg:pt-[130px] lg:pb-20" style={{ backgroundColor: '#ffffff' }}>
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
          구성원의 연구 효율은 높이고, 관리 부담은 줄일 수 있어요
        </h2>

        {/* User Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 구성원 */}
          <div className="bg-[#eeeeee] p-8" style={{ borderRadius: '0px' }}>
            <h3 
              style={{
                fontSize: '22px',
                fontWeight: '600',
                color: '#000000',
                lineHeight: '1.5',
                marginBottom: '24px'
              }}
            >
              구성원
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: 'rgb(0, 171, 127)', fontSize: '16px', lineHeight: '1.6', flexShrink: 0 }}>✔</span>
                <p style={{ fontSize: '16px', fontWeight: '400', color: '#000000', lineHeight: '1.6' }}>
                  다양한 모델을 빠르게 테스트할 수 있습니다.
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: 'rgb(0, 171, 127)', fontSize: '16px', lineHeight: '1.6', flexShrink: 0 }}>✔</span>
                <p style={{ fontSize: '16px', fontWeight: '400', color: '#000000', lineHeight: '1.6' }}>
                  반복 업무를 줄이고 효율적으로 일할 수 있습니다.
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: 'rgb(0, 171, 127)', fontSize: '16px', lineHeight: '1.6', flexShrink: 0 }}>✔</span>
                <p style={{ fontSize: '16px', fontWeight: '400', color: '#000000', lineHeight: '1.6' }}>
                  API 관리 부담 없이 연구에 집중할 수 있습니다.
                </p>
              </div>
            </div>
          </div>

          {/* 관리자 */}
          <div className="bg-[#eeeeee] p-8" style={{ borderRadius: '0px' }}>
            <h3 
              style={{
                fontSize: '22px',
                fontWeight: '600',
                color: '#000000',
                lineHeight: '1.5',
                marginBottom: '24px'
              }}
            >
              관리자
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: 'rgb(0, 171, 127)', fontSize: '16px', lineHeight: '1.6', flexShrink: 0 }}>✔</span>
                <p style={{ fontSize: '16px', fontWeight: '400', color: '#000000', lineHeight: '1.6' }}>
                  예산과 권한을 쉽게 관리할 수 있습니다.
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: 'rgb(0, 171, 127)', fontSize: '16px', lineHeight: '1.6', flexShrink: 0 }}>✔</span>
                <p style={{ fontSize: '16px', fontWeight: '400', color: '#000000', lineHeight: '1.6' }}>
                  보안과 비용 리스크를 효과적으로 줄일 수 있습니다.
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: 'rgb(0, 171, 127)', fontSize: '16px', lineHeight: '1.6', flexShrink: 0 }}>✔</span>
                <p style={{ fontSize: '16px', fontWeight: '400', color: '#000000', lineHeight: '1.6' }}>
                  통합 대시보드로 전체 운영을 한눈에 파악할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
