import Header from "../components/Header";
import Footer from "../components/Footer";
import FadeUp from "../components/FadeUp";
import { goTo } from "../utils/navigation";
import {
  serviceDetailHeroImage,
  serviceCoreIcons,
  serviceConsultArrow,
  investigationPrincipleIcons,
  legalScopeIcons,
  preparationDocIcons,
  serviceCtaIcons,
} from "../assets/figmaAssets";

const CORE_COMPETENCIES = [
  {
    icon: serviceCoreIcons.familyCheck,
    title: "가족 신변 확인",
    desc: "가족의 안전과 화합을 위해 배경, 일과 패턴, 주변 인물 관계를 철저히 확인합니다.",
  },
  {
    icon: serviceCoreIcons.runawayTrace,
    title: "가출 및 소재 파악",
    desc: "연락이 두절된 가족 구성원이나 의도적으로 자취를 감춘 인물에 대한 체계적인 추적 업무를 수행합니다.",
  },
  {
    icon: serviceCoreIcons.premaritalCheck,
    title: "결혼 전 배경 조사",
    desc: "인생의 중대한 결정을 앞두고, 법적 테두리 내에서 신뢰의 토대를 마련하기 위한 평판 및 배경 확인을 진행합니다.",
  },
];

const NEED_INVESTIGATION = [
  {
    no: "01",
    title: "급격한 행동 및 일정 변화",
    desc: "논리적 설명이 불가능한 갑작스러운 행동 패턴, 재정 상황, 스케줄의 변화가 감지될 때.",
  },
  {
    no: "02",
    title: "법적 대응을 위한 사전 준비",
    desc: "본격적인 법적 절차를 시작하기 전, 자신의 주장을 뒷받침할 객관적 증거가 필요할 때.",
  },
  {
    no: "03",
    title: "안전 위협 및 보호 필요",
    desc: "위협 의심, 미확인 추적기 발견, 혹은 미성년 자녀의 주변 관계가 우려될 때.",
  },
];

const INVESTIGATION_PRINCIPLES = [
  {
    icon: investigationPrincipleIcons.legalCompliance,
    title: "엄격한 법적 준수:",
    desc: "수집된 증거의 효력을 보장하기 위해 민간조사 관련 법규 내에서만 활동합니다.",
  },
  {
    icon: investigationPrincipleIcons.securityDiscretion,
    title: "정교한 보안 유지:",
    desc: "대상자가 조사 사실을 인지하지 못하도록 최소한의 흔적만을 남기는 기법을 사용합니다.",
  },
  {
    icon: investigationPrincipleIcons.transparentReporting,
    title: "투명한 리포팅:",
    desc: "실시간 상황 공유와 함께 타임스탬프가 포함된 멀티미디어 증거 보고서를 제공합니다.",
  },
];

const LEGAL_ALLOWED = [
  "공개된 장소에서의 합법적 관찰 및 동선 파악",
  "공개 출처 정보(OSINT) 수집 및 분석",
  "참고인 면담 및 진술 확보",
  "공공 기록물 및 자산 정보 확인",
  "법적 요건을 충족한 위치 정보 확인 (제한적)",
];

const LEGAL_FORBIDDEN = [
  "주거 침입 및 타인의 사유지 불법 침범",
  "도청, 감청 및 휴대폰 해킹 등의 불법 행위",
  "수사관 및 공무원 사칭 행위",
  "동의 없는 사적 금융/의료 기록 무단 열람",
  "물리적 위협, 협박 및 사적 제재 행위",
];

const PROCESS_STEPS = [
  { no: "1", title: "상담 및 접수", desc: "사안 분석 및 이해관계 상충 여부를 확인합니다." },
  { no: "2", title: "전략 수립", desc: "인력 투입 계획 및 법적 리스크를 검토합니다." },
  { no: "3", title: "현장 조사", desc: "실시간 조사 수행 및 핵심 증거를 수집합니다." },
  { no: "4", title: "결과 보고", desc: "최종 보고서 전달 및 법적 후속 조치를 자문합니다." },
];

const PREP_DOCS = [
  { icon: preparationDocIcons[0], label: "대상자의 사진 및 기본 인적사항" },
  { icon: preparationDocIcons[1], label: "주요 거주지 및 직장 위치 정보" },
  { icon: preparationDocIcons[2], label: "사용 차량 번호 및 차종 정보" },
  { icon: preparationDocIcons[3], label: "대상자의 일반적인 일과 패턴" },
];

const SERVICE_FAQS = [
  {
    q: "조사 기간은 보통 얼마나 소요되나요?",
    a: "대부분의 가정 내 조사는 사안의 복잡성과 대상자의 활동 주기에 따라 약 3일에서 10일 이내에 완료됩니다.",
  },
  {
    q: "상담 및 조사 내용은 비밀이 보장되나요?",
    a: "철저히 보장됩니다. 보안 메신저(텔레그램/카카오톡 비밀채팅)를 사용하며, 모든 기록은 보고서 전달 후 즉시 영구 폐기됩니다.",
  },
  {
    q: "조사 결과물을 법정 증거로 활용할 수 있나요?",
    a: "네, 가능합니다. 개인정보보호법 및 관계 법령을 준수하여 조사를 진행하므로 법적 효력을 갖춘 증거로 사용하실 수 있습니다.",
  },
];

function SectionHeading({ children }) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-[28px] md:text-[32px] font-semibold text-navy">{children}</h2>
      <div className="h-1 w-20 bg-brand-blue" />
    </div>
  );
}

export default function ServiceDetail() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-white px-6 md:px-10 pt-16 pb-20">
          <div className="mx-auto max-w-[1200px] px-0 md:px-6">
            <button
              type="button"
              onClick={() => goTo("services")}
              className="mb-8 flex items-center gap-2 text-[13px] font-bold tracking-[1.2px] text-slate transition-colors duration-200 hover:text-brand-blue"
            >
              ← 홈으로 돌아가기
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
              <FadeUp className="flex flex-col gap-4">
                <span className="text-[12px] font-bold tracking-[1.2px] text-brand-blue">
                  개인 조사 서비스
                </span>
                <h1 className="text-[36px] md:text-[48px] font-bold leading-[1.2] tracking-[-0.96px] text-navy">
                  개인 및 가정 민간조사
                </h1>
                <p className="max-w-[576px] text-[17px] md:text-[18px] leading-relaxed text-[#44474d]">
                  불확실성으로 인해 일상이 흔들릴 때, 당신에게는 구체적인 증거에 기반한 명확한
                  해답이 필요합니다. 현무는 철저히 법을 준수하며, 보안이 유지되는 전문적인 조사를
                  통해 가문의 고민을 투명하게 해결해 드립니다.
                </p>
              </FadeUp>
              <FadeUp
                delay={120}
                className="relative overflow-hidden rounded-[10px] border border-[#bcc6cc] bg-[#edeeef] aspect-[4/3]"
              >
                <img
                  src={serviceDetailHeroImage}
                  alt="전문 조사관의 정돈된 업무 데스크"
                  className="h-full w-full object-cover"
                />
              </FadeUp>
            </div>
          </div>
        </section>

        {/* 핵심 역량 */}
        <section className="bg-bg-gray-2 px-6 md:px-10 py-24">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-0 md:px-6">
            <FadeUp>
              <SectionHeading>핵심 역량</SectionHeading>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CORE_COMPETENCIES.map((item, i) => (
                <FadeUp
                  key={item.title}
                  delay={i * 100}
                  className="group flex flex-col gap-3 rounded-[10px] border border-[#d9d9d9] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-xl hover:shadow-navy/5"
                >
                  <img src={item.icon} alt="" className="h-6 w-6 shrink-0" />
                  <h3 className="text-[22px] font-semibold text-slate transition-colors duration-300 group-hover:text-brand-blue">
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[#44474d]">{item.desc}</p>
                </FadeUp>
              ))}

              <FadeUp
                delay={120}
                className="md:col-span-2 flex flex-col gap-6 rounded-[10px] border border-[#d9d9d9] bg-white p-8 sm:flex-row"
              >
                <div className="flex flex-1 flex-col gap-3">
                  <img src={serviceCoreIcons.litigationEvidence} alt="" className="h-6 w-6" />
                  <h3 className="text-[22px] font-semibold text-slate">소송 증거 수집 지원</h3>
                  <p className="text-[15px] leading-relaxed text-[#44474d]">
                    가사 소송, 양육권 분쟁, 재산 분할 등 법정에서 활용 가능한 객관적 증거 자료
                    수집을 지원합니다.
                  </p>
                </div>
                <div className="hidden w-px self-stretch bg-border-gray/40 sm:block" />
                <div className="flex flex-1 flex-col gap-3">
                  <img src={serviceCoreIcons.stalkingPrevention} alt="" className="h-6 w-6" />
                  <h3 className="text-[22px] font-semibold text-slate">스토킹 및 피해 방지</h3>
                  <p className="text-[15px] leading-relaxed text-[#44474d]">
                    가해자 식별 및 증거 채집을 통해 접근 금지 명령 신청 및 수사 기관 공조를
                    돕습니다.
                  </p>
                </div>
              </FadeUp>

              <FadeUp
                delay={240}
                className="flex flex-col justify-center gap-4 rounded-[10px] border border-navy bg-navy p-8"
              >
                <h3 className="text-[22px] font-semibold text-white">특수 의뢰 상담</h3>
                <p className="text-[15px] leading-relaxed text-[#76849f]">
                  극도의 보안이 요구되는 복잡하고 비표준적인 가정 내 사안에 대해서도 전문 상담을
                  제공합니다.
                </p>
                <button
                  type="button"
                  onClick={() => goTo("contact")}
                  className="group flex items-center gap-2 text-[15px] font-bold text-brand-blue-light"
                >
                  상담 예약하기
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* 전문적인 조사가 필요한 경우 + 현무의 조사 원칙 */}
        <section className="bg-white px-6 md:px-10 py-24">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-0 md:px-6 lg:grid-cols-2">
            <FadeUp className="flex flex-col gap-8">
              <h2 className="text-[28px] md:text-[32px] font-semibold text-navy">
                전문적인 조사가 필요한 경우
              </h2>
              <div className="flex flex-col gap-6">
                {NEED_INVESTIGATION.map((item) => (
                  <div key={item.no} className="flex gap-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue text-[10px] text-white">
                      {item.no}
                    </span>
                    <div className="flex flex-col gap-1">
                      <span className="text-[16px] font-bold text-navy">{item.title}</span>
                      <span className="text-[14px] leading-relaxed text-[#44474d]">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp
              delay={120}
              className="flex flex-col gap-6 rounded-r-[10px] border-l-4 border-brand-blue bg-bg-gray p-10"
            >
              <h2 className="text-[28px] md:text-[32px] font-semibold text-navy">
                현무의 조사 원칙
              </h2>
              <p className="text-[15px] leading-relaxed text-slate">
                우리는 <span className="font-bold">'증거 중립성'</span> 원칙에 따라 행동합니다.
                결과를 조작하지 않으며, 오직 존재하는 진실만을 규명합니다. 모든 조사는 다음의 세
                가지 기준을 엄격히 준수합니다.
              </p>
              <div className="flex flex-col gap-4">
                {INVESTIGATION_PRINCIPLES.map((p) => (
                  <div key={p.title} className="flex gap-3">
                    <img src={p.icon} alt="" className="h-5 w-5 shrink-0" />
                    <p className="text-[15px] leading-relaxed text-slate">
                      <span className="font-bold">{p.title}</span> {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* 업무 범위 및 법적 한계 */}
        <section className="bg-navy px-6 md:px-10 py-16">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-0 md:px-6">
            <FadeUp className="flex flex-col items-center gap-2 text-center">
              <h2 className="text-[28px] md:text-[32px] font-semibold text-white">
                업무 범위 및 법적 한계
              </h2>
              <p className="text-[15px] text-[#76849f]">
                정직함은 현무가 가진 전문적 정통성의 토대입니다.
              </p>
            </FadeUp>

            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[10px] bg-white/10 md:grid-cols-2">
              <FadeUp className="flex flex-col gap-5 bg-navy p-8 md:p-10">
                <div className="flex items-center gap-2">
                  <img src={legalScopeIcons.allowed} alt="" className="h-5 w-5" />
                  <h3 className="text-[16px] font-bold text-brand-blue-light">합법적 조사 범위</h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {LEGAL_ALLOWED.map((item) => (
                    <li key={item} className="text-[14px] leading-relaxed text-[#76849f]">
                      • {item}
                    </li>
                  ))}
                </ul>
              </FadeUp>
              <FadeUp delay={100} className="flex flex-col gap-5 bg-navy p-8 md:p-10">
                <div className="flex items-center gap-2">
                  <img src={legalScopeIcons.forbidden} alt="" className="h-5 w-5" />
                  <h3 className="text-[16px] font-bold text-red-400">금지 및 불가 행위</h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {LEGAL_FORBIDDEN.map((item) => (
                    <li key={item} className="text-[14px] leading-relaxed text-[#76849f]">
                      • {item}
                    </li>
                  ))}
                </ul>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* 업무 진행 절차 + 준비 서류 안내 */}
        <section className="bg-white px-6 md:px-10 py-24">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-16 px-0 md:px-6">
            <FadeUp className="flex flex-col items-center gap-2 text-center">
              <h2 className="text-[28px] md:text-[32px] font-semibold text-navy">
                업무 진행 절차
              </h2>
            </FadeUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {PROCESS_STEPS.map((step, i) => (
                <FadeUp
                  key={step.no}
                  delay={i * 80}
                  className="flex flex-col items-center gap-2 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-[16px] border border-[#bcc6cc] bg-bg-gray text-[20px] font-bold text-slate">
                    {step.no}
                  </div>
                  <h4 className="pt-2 text-[16px] font-bold text-slate">{step.title}</h4>
                  <p className="text-[14px] text-[#44474d]">{step.desc}</p>
                </FadeUp>
              ))}
            </div>

            <FadeUp className="flex flex-col gap-8 rounded-[10px] bg-bg-gray p-8 md:flex-row md:p-12">
              <div className="flex w-full flex-col gap-4 md:w-[300px]">
                <h3 className="text-[22px] font-semibold text-navy">준비 서류 안내</h3>
                <p className="text-[14px] leading-relaxed text-[#44474d]">
                  정확하고 신속한 조사를 위해 가능한 경우 다음 자료를 준비해 주시기 바랍니다.
                </p>
                <div className="h-1 w-12 bg-brand-blue" />
              </div>
              <div className="grid flex-1 grid-cols-1 sm:grid-cols-2 gap-4">
                {PREP_DOCS.map((doc) => (
                  <div key={doc.label} className="flex items-center gap-3">
                    <img src={doc.icon} alt="" className="h-[18px] w-[18px] shrink-0" />
                    <span className="text-[14px] font-semibold text-slate">{doc.label}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* FAQ + 비용 산정 */}
        <section className="bg-white px-6 md:px-10 pb-24">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-0 md:px-6 lg:flex-row lg:items-start">
            <FadeUp className="flex flex-1 flex-col gap-8">
              <h2 className="text-[28px] md:text-[32px] font-semibold text-navy">
                서비스 관련 자주 묻는 질문
              </h2>
              <div className="flex flex-col gap-6">
                {SERVICE_FAQS.map((f) => (
                  <div key={f.q} className="flex flex-col gap-2">
                    <span className="text-[16px] font-bold text-navy">{f.q}</span>
                    <span className="text-[14px] leading-relaxed text-[#44474d]">{f.a}</span>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp
              delay={150}
              className="flex flex-1 flex-col gap-6 rounded-[10px] border border-[#bcc6cc] p-8"
            >
              <h2 className="text-[28px] md:text-[32px] font-semibold text-navy">
                비용 산정 안내
              </h2>
              <p className="text-[14px] leading-relaxed text-[#44474d]">
                조사 비용은 투입 인력과 장비, 난이도에 따라 개별적으로 산정됩니다. 상담 후
                투명한 정찰제 견적을 제공해 드립니다.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  ["투입 인력", "현장 요원 1인 / 일일 기준"],
                  ["기본 기간", "최소 3일 기본 계약"],
                  ["특수 장비", "정밀 관찰 장비 포함"],
                  ["보고서 작성", "기본 비용 내 포함"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between border-b border-[#d9d9d9] pb-2"
                  >
                    <span className="text-[14px] font-bold text-slate">{label}</span>
                    <span className="text-[14px] text-[#44474d]">{value}</span>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => goTo("contact")}
                className="mt-2 rounded-[10px] bg-navy py-4 text-[16px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy/90 hover:shadow-lg"
              >
                상세 견적 요청하기
              </button>
            </FadeUp>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-navy px-6 md:px-10 py-20">
          <div className="mx-auto flex max-w-[768px] flex-col items-center gap-6 text-center">
            <FadeUp as="h2" className="text-[32px] md:text-[48px] font-bold tracking-[-0.96px] text-white">
              문제 해결을 위한 첫 걸음
            </FadeUp>
            <FadeUp delay={80} as="p" className="text-[16px] md:text-[18px] text-white/90">
              민감한 가정 문제는 시간이 지날수록 해결이 어려워질 수 있습니다.
              지금 바로 수석 조사관에게 1:1 비밀 상담을 요청하십시오.
            </FadeUp>
            <FadeUp delay={160} className="flex flex-wrap justify-center gap-4 pt-2">
              <a
                href="tel:010-3583-3542"
                className="flex items-center gap-2 rounded-[12px] bg-white px-10 py-4 text-[16px] font-bold text-navy transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <img src={serviceCtaIcons.phone} alt="" className="h-[18px] w-[18px]" />
                지금 전화하기
              </a>
              <button
                type="button"
                onClick={() => goTo("contact")}
                className="flex items-center gap-2 rounded-[12px] border border-white/20 bg-navy px-10 py-4 text-[16px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/5"
              >
                <img src={serviceCtaIcons.chat} alt="" className="h-4 w-5" />
                온라인 문의
              </button>
            </FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
