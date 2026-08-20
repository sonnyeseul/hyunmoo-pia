import Header from "../components/Header";
import Footer from "../components/Footer";
import FadeUp from "../components/FadeUp";
import { goTo } from "../utils/navigation";
import { privacyVisualImage, privacySectionIcons } from "../assets/figmaAssets";

const SIDE_NAV = [
  { id: "privacy-section-1", label: "개인정보 처리방침" },
  { id: "privacy-section-2", label: "업무 수행 범위" },
  { id: "privacy-section-3", label: "데이터 보관 및 파기" },
];

const COLLECTED_ITEMS = [
  "의뢰인 식별 정보 (성명, 연락처 등)",
  "의뢰인이 제공한 사건 관련 증거 자료 및 요구사항",
  "상담 플랫폼 내 보안 검증을 위한 기술 로그",
];

const ALLOWED_SERVICES = [
  "기업 실사 및 배경 조사",
  "민·형사 소송을 위한 증거 자료 수집",
  "법적 범위 내의 가출인 및 행방불명자 소재 파악",
  "지식재산권 침해 조사",
];

const FORBIDDEN_SERVICES = [
  "불법 도청 또는 해킹 행위",
  "개인적인 복수나 괴롭힘 지원",
  "물리적 위협 또는 강압 행위",
  "신용정보법을 위반하는 모든 행위",
];

const STORAGE_STEPS = [
  {
    title: "1단계: 사건 진행 중",
    desc: "암호화된 저장소에 보관되며, 지정된 조사관만이 다중 요소 인증을 통해 접근할 수 있습니다.",
  },
  {
    title: "2단계: 사건 완료",
    desc: "결과물은 보안 채널을 통해 의뢰인에게 전달됩니다. 데이터는 예비용으로 30일간 보관됩니다.",
  },
  {
    title: "3단계: 완전 파기",
    desc: "모든 관련 자료에 대해 영구적인 디지털 파쇄 및 물리적 파기를 실시합니다.",
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Header />
      <main>
        <section className="bg-white px-6 md:px-10 pt-16 pb-24">
          <div className="mx-auto max-w-[1200px] px-0 md:px-6">
            <button
              type="button"
              onClick={() => goTo("")}
              className="mb-8 flex items-center gap-2 text-[13px] font-bold tracking-[1.2px] text-slate transition-colors duration-200 hover:text-brand-blue"
            >
              ← 홈으로 돌아가기
            </button>

            <FadeUp className="flex flex-col gap-4 pb-16">
              <h1 className="text-[32px] md:text-[44px] font-bold leading-[1.2] tracking-[-0.96px] text-navy">
                개인정보 처리방침 및 서비스 운영 정책
              </h1>
              <p className="max-w-[672px] text-[16px] md:text-[18px] leading-relaxed text-[#44474d]">
                투명성과 법적 준수는 HYUNMOO PIA탐정의 근간입니다. 당사는 고객의 민감한 데이터를
                정밀하고 철저한 보안 원칙에 따라 관리합니다.
              </p>
            </FadeUp>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              {/* Side nav */}
              <nav className="hidden lg:col-span-3 lg:block">
                <ul className="flex flex-col gap-4 border-l border-[#d9d9d9] pl-px">
                  {SIDE_NAV.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="block rounded-r-[4px] border-l-2 border-brand-blue/50 bg-brand-blue/5 py-1.5 pl-[18px] text-[12px] font-bold tracking-[1.2px] text-brand-blue transition-colors duration-200 hover:bg-brand-blue/10"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Content */}
              <div className="flex flex-col gap-[80px] lg:col-span-9">
                {/* Section 1 */}
                <section id="privacy-section-1" className="scroll-mt-24">
                  <FadeUp className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <img src={privacySectionIcons.personalInfo} alt="" className="h-5 w-4" />
                      <span className="text-[12px] font-bold tracking-[1.2px] text-brand-blue">
                        Section 01
                      </span>
                    </div>
                    <h2 className="text-[26px] md:text-[32px] font-semibold text-navy">
                      개인정보 처리방침 (Privacy Policy)
                    </h2>
                    <p className="text-[15px] md:text-[16px] leading-relaxed text-[#44474d]">
                      HYUNMOO PIA탐정는 전문적인 조사 서비스를 제공하기 위해 필요한 최소한의
                      개인정보만을 수집합니다. 당사는 개인정보 보호법을 엄격히 준수합니다.
                    </p>
                    <div className="flex flex-col gap-2 rounded-r-[4px] border-l-4 border-brand-blue bg-bg-gray px-9 py-8">
                      <span className="text-[12px] font-bold tracking-[1.2px] text-navy">
                        수집하는 정보 항목:
                      </span>
                      <ul className="flex flex-col gap-2 pl-5">
                        {COLLECTED_ITEMS.map((item) => (
                          <li key={item} className="text-[15px] leading-relaxed text-[#44474d]">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-[15px] leading-relaxed text-[#44474d]">
                      당사는 귀하의 개인정보를 판매, 임대 또는 거래하지 않습니다. 정보 공유는
                      유효한 법원의 명령이 있거나 의뢰인의 명시적인 서면 동의가 있는 경우에만
                      이루어집니다.
                    </p>
                  </FadeUp>
                </section>

                {/* Section 2 */}
                <section id="privacy-section-2" className="scroll-mt-24">
                  <FadeUp className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <img src={privacySectionIcons.scopeOfWork} alt="" className="h-[19px] w-[18px]" />
                      <span className="text-[12px] font-bold tracking-[1.2px] text-brand-blue">
                        Section 02
                      </span>
                    </div>
                    <h2 className="text-[26px] md:text-[32px] font-semibold text-navy">
                      업무 수행 범위 (Scope of Work)
                    </h2>
                    <p className="text-[15px] md:text-[16px] leading-relaxed text-slate">
                      HYUNMOO PIA탐정는 철저히 법적 테두리 안에서 운영됩니다. 당사가 수행 가능한
                      업무와 거부해야 하는 요청에 대해 명확히 안내해 드립니다.
                    </p>

                    <div className="grid grid-cols-1 gap-6 pt-2 sm:grid-cols-2">
                      <div className="flex flex-col gap-4 rounded-[8px] border border-[#bcc6cc] bg-bg-gray p-8">
                        <div className="flex items-center gap-2">
                          <img src={privacySectionIcons.allowedServices} alt="" className="h-5 w-5" />
                          <h3 className="text-[20px] font-semibold text-navy">수행 가능 서비스</h3>
                        </div>
                        <ul className="flex flex-col gap-3">
                          {ALLOWED_SERVICES.map((item) => (
                            <li key={item} className="text-[15px] leading-relaxed text-slate">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-col gap-4 rounded-[8px] border border-[#bcc6cc] bg-bg-gray-2 p-8">
                        <div className="flex items-center gap-2">
                          <img src={privacySectionIcons.forbiddenServices} alt="" className="h-5 w-5" />
                          <h3 className="text-[20px] font-semibold text-navy">수행 불가 서비스</h3>
                        </div>
                        <ul className="flex flex-col gap-3 opacity-80">
                          {FORBIDDEN_SERVICES.map((item) => (
                            <li key={item} className="text-[15px] leading-relaxed text-slate">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </FadeUp>
                </section>

                {/* Section 3 */}
                <section id="privacy-section-3" className="scroll-mt-24">
                  <FadeUp className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <img src={privacySectionIcons.dataStorage} alt="" className="h-[18px] w-[18px]" />
                      <span className="text-[12px] font-bold tracking-[1.2px] text-brand-blue">
                        Section 03
                      </span>
                    </div>
                    <h2 className="text-[26px] md:text-[32px] font-semibold text-navy">
                      데이터 보관 및 파기 정책 (Data Storage Policy)
                    </h2>

                    <div className="grid grid-cols-1 gap-6 pt-2 sm:grid-cols-3">
                      {STORAGE_STEPS.map((step) => (
                        <div key={step.title} className="flex flex-col gap-2 border-b border-[#bcc6cc] pb-6">
                          <span className="text-[12px] font-bold tracking-[1.2px] text-navy">
                            {step.title}
                          </span>
                          <span className="text-[13px] leading-relaxed text-slate">{step.desc}</span>
                        </div>
                      ))}
                    </div>

                    <p className="pt-2 text-[15px] leading-relaxed text-[#44474d]">
                      사건이 종결되고 유예 기간이 만료되면, HYUNMOO PIA탐정는 서버에서 해당
                      조사의 모든 흔적을 삭제합니다. 이는 완벽한 의뢰인 보호를 위한 당사의
                      약속입니다.
                    </p>
                  </FadeUp>
                </section>

                <FadeUp className="relative flex h-[220px] items-end overflow-hidden rounded-[10px] border border-[#bcc6cc]">
                  <img
                    src={privacyVisualImage}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-40 grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-gray to-transparent" />
                  <span className="relative p-8 text-[22px] font-semibold text-navy/50">
                    신뢰할 수 있는 안심
                  </span>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
