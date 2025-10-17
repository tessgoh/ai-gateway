'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// 솔루션 이미지 경로
const keyManagementImage = '/images/51077b2a1fc7ed16dfc756c919f645aa25a8fc88.avif';
const monitoringImage = '/images/585ca98d7179797c34a7495ff4772d545c6e167c.avif';
const budgetPolicyImage = '/images/8feec982b2d15ff541b306adaad23e43e1d00738.avif';
const openaiFormatImage = '/images/f685976e54811620568608f87ba7b8ffd65b5522.avif';
const settlementImage = '/images/9ab441f60d0332229b2ab7e26f8f6aeeae5e0703.avif';
const arrowIcon = '/images/d5a46d54cec5616d5cc0024bf79b92a280f55cb1.png';
const minusIcon = '/images/a5d5a7ba06a6e9659021339f54d716540719b76d.png';

export default function Solution() {
  const [openIndex, setOpenIndex] = useState(0);

  const features = [
    {
      title: "통합 Key 관리",
      subtitle: "국내 최대의 보안 기반시스템 활용",
      description: "팀 또는 개인 단위로 API Key를 안전하게 관리하고,<br/>명확한 권한 설정으로 보안 리스크를 줄입니다.",
      image: keyManagementImage
    },
    {
      title: "실시간 모니터링",
      subtitle: "예산 초과를 사전 차단하는 재무 관리 도구",
      description: "사용자/팀별 사용량과 비용을 한눈에 확인하고, 패턴 분석으로 불필요한 지출을 막아 예산을 효율적으로 관리합니다.",
      image: monitoringImage
    },
    {
      title: "예산 한도 관리",
      subtitle: "책임 분산과 투명한 운영 체계 확보",
      description: "Key별 예산과 만료일을 설정해 사용 한도를 명확히 하고 조직의 예산과 리소스를 효율적으로 관리합니다.",
      image: budgetPolicyImage
    },
    {
      title: "OpenAI 포맷 유지",
      subtitle: "AI 모델 전환 비용 최소화",
      description: "익숙한 OpenAI API 포맷 그대로 다양한 모델을 사용할 수 있어, 코드 수정 없이 전환이 빠르고 비용이 절감됩니다.",
      image: openaiFormatImage
    },
    {
      title: "비용 통합 정산",
      subtitle: "재무팀/구매팀의 운영 부담 절감",
      description: "여러 모델을 사용해도 청구서는 단 한 장. 복잡한 정산 과정을 단순화해 관리 효율을 높입니다.",
      image: settlementImage
    }
  ];

  return (
    <section className="w-full pt-16 pb-12 md:pt-20 md:pb-16 lg:pt-[130px] lg:pb-20" style={{ backgroundColor: '#111111' }}>
      <div className="container-responsive mx-auto px-5 md:px-8 lg:px-0">
        {/* Heading */}
        <h2 
          className="text-center text-[26px] md:text-[26px] lg:text-[36px]"
          style={{
            fontWeight: '600',
            letterSpacing: '-0.02em',
            lineHeight: '34px',
            color: '#FFFFFF',
            marginBottom: '68px'
          }}
        >
          복잡한 AI API 관리, 하나의 게이트웨이로 해결하세요
        </h2>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-0 items-start">
          {/* Left side - Features List */}
          <div className="space-y-0 w-full lg:w-[440px] lg:flex-shrink-0">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                onClick={() => setOpenIndex(index)}
                initial={false}
                animate={{ 
                  backgroundColor: openIndex === index ? '#F5F6F7' : 'rgba(255, 255, 255, 0.05)'
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{ 
                  paddingTop: '32px', 
                  paddingBottom: '32px',
                  paddingLeft: '30px',
                  paddingRight: '30px',
                  borderTop: (index === 0 || openIndex === index) ? `1px solid ${openIndex === index ? '#111111' : '#444444'}` : 'none',
                  borderBottom: `1px solid ${openIndex === index ? '#111111' : '#444444'}`,
                  cursor: 'pointer'
                }}
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <h3 
                      className="flex-1 text-[18px] lg:text-[22px]"
                      style={{
                        fontWeight: '600',
                        color: openIndex === index ? '#000000' : '#FFFFFF',
                        lineHeight: '26px',
                        marginBottom: '0'
                      }}
                    >
                      {feature.title}
                    </h3>
                    <AnimatePresence mode="wait">
                      {openIndex === index ? (
                        <motion.img 
                          key="minus"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2, ease: 'easeInOut' }}
                          src={minusIcon}
                          alt="Minus Icon"
                          className="flex-shrink-0"
                          style={{ width: '14px', height: '14px' }}
                        />
                      ) : (
                        <motion.img 
                          key="arrow"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2, ease: 'easeInOut' }}
                          src={arrowIcon}
                          alt="Arrow Icon"
                          className="flex-shrink-0"
                          style={{ width: '14px', height: '14px' }}
                        />
                      )}
                    </AnimatePresence>
                  </div>
                  <AnimatePresence>
                    {openIndex === index && feature.description && (
                      <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{
                          fontSize: '16px',
                          fontWeight: '400',
                          color: '#666666',
                          lineHeight: '24px',
                          marginTop: '12px',
                          overflow: 'hidden'
                        }}
                        dangerouslySetInnerHTML={{ __html: feature.description }}
                      />
                    )}
                  </AnimatePresence>
                  
                  {/* Mobile Image - Show below description when active */}
                  <div className="block lg:hidden">
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.img 
                          key={`mobile-${index}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: 'easeInOut' }}
                          src={feature.image} 
                          alt={feature.title}
                          className="w-full h-auto mt-6"
                          style={{ 
                            overflow: 'hidden'
                          }}
                        />
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right side - Visual (Desktop only) */}
          <div className="hidden lg:block w-full lg:w-[776px] lg:flex-shrink-0 relative mt-8 lg:mt-0">
            <AnimatePresence mode="wait">
              <motion.img 
                key={openIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                src={features[openIndex].image} 
                alt="Solution Diagram"
                className="w-full h-auto lg:w-[776px] lg:h-[692px]"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
