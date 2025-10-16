import { Settings, Box } from 'lucide-react';
import svgPaths from '../imports/svg-w7sg2erex4';
// 아이콘 이미지 경로
const apiSpecIcon = '/images/08611613c8c40f7694e426c73d0c4f1490dc8d04.avif';
const usageCostIcon = '/images/e57ba80c6ceb3cea3e8a19f3e5c3208a91eadd59.avif';
const securityIcon = '/images/8c7e1144b281b046796b3712708cb12234f2656c.avif';
const updateIcon = '/images/d526081daa9c66fa41b6e9cf82f1b17cf46f51f4.avif';

// Custom Icon Component for API Spec
function ApiSpecIcon() {
  return (
    <div className="w-9 h-9 lg:w-12 lg:h-12" style={{ marginLeft: '-8px' }}>
      <img src={apiSpecIcon} alt="API Spec" className="w-full h-full object-contain" />
    </div>
  );
}

// Custom Icon Component for Usage & Cost
function UsageCostIcon() {
  return (
    <div className="w-9 h-9 lg:w-12 lg:h-12" style={{ marginLeft: '-8px' }}>
      <img src={usageCostIcon} alt="Usage Cost" className="w-full h-full object-contain" />
    </div>
  );
}

// Custom Icon Component for Security
function SecurityIcon() {
  return (
    <div className="w-9 h-9 lg:w-12 lg:h-12" style={{ marginLeft: '-8px' }}>
      <img src={securityIcon} alt="Security" className="w-full h-full object-contain" />
    </div>
  );
}

// Custom Icon Component for Update
function UpdateIcon() {
  return (
    <div className="w-9 h-9 lg:w-12 lg:h-12" style={{ marginLeft: '-8px' }}>
      <img src={updateIcon} alt="Update" className="w-full h-full object-contain" />
    </div>
  );
}

export default function Problems() {
  const problems = [
    {
      icon: 'api-spec',
      title: "제공사마다 API 스펙이 달라요",
      description: (
        <>
          OpenAI, Anthropic, Google 등 요청 포맷과 응답 구조가 달라<br />
          코드 수정과 Key 발급 과정을 반복해야 해요
        </>
      )
    },
    {
      icon: 'usage-cost',
      title: "구성원별 사용량 및 비용 파악이 어려워요",
      description: (
        <>
          여러 팀과 구성원이 동시에 모델을 사용하다 보니<br />
          사용량과 비용을 한눈에 파악하기 어려워 예산 관리가 복잡해요
        </>
      )
    },
    {
      icon: 'security',
      title: "보안 관리 부담이 점점 커져요",
      description: (
        <>
          API Key가 여러 사람과 시스템에 흩어져 있어<br />
          유출 위험이 커지고 접근 권한을 일일이 관리해야 해요
        </>
      )
    },
    {
      icon: 'update',
      title: "빠른 AI 업데이트에 대응 부담이 커요",
      description: (
        <>
          모델 버전이 자주 바뀌면서 새로운 API 스펙을 검토하고<br />
          코드를 다시 반영하는 일이 반복돼요
        </>
      )
    }
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[130px]">
      <div className="container-responsive mx-auto px-5 md:px-8 lg:px-0">
        {/* Heading */}
        <h2 
          className="text-center text-[26px] md:text-[26px] lg:text-[36px] mb-8 lg:mb-[58px]"
          style={{
            fontWeight: '600',
            letterSpacing: '-0.02em',
            lineHeight: '34px',
            color: '#000000'
          }}
        >
          조직 내 AI API 관리에 어려움을 겪고 계신가요?
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="bg-[#F5F6F7] p-6 lg:p-8"
                style={{ borderRadius: '0px' }}
              >
                {/* Icon */}
                <div style={{ marginBottom: '16px' }}>
                  {problem.icon === 'api-spec' ? (
                    <ApiSpecIcon />
                  ) : problem.icon === 'usage-cost' ? (
                    <UsageCostIcon />
                  ) : problem.icon === 'security' ? (
                    <SecurityIcon />
                  ) : problem.icon === 'update' ? (
                    <UpdateIcon />
                  ) : (
                    <Icon className="w-12 h-12 text-gray-400" strokeWidth={1.5} />
                  )}
                </div>

                {/* Title */}
                <h3 
                  className="text-[20px] lg:text-[22px]"
                  style={{
                    fontWeight: '600',
                    color: '#000000',
                    lineHeight: '26px',
                    marginBottom: '12px'
                  }}
                >
                  {problem.title}
                </h3>

                {/* Description */}
                <p 
                  style={{
                    fontSize: '16px',
                    fontWeight: '400',
                    color: '#666666',
                    lineHeight: '24px'
                  }}
                >
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
