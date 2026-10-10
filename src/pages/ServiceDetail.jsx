import Header from "../components/Header";
import Footer from "../components/Footer";
import FadeUp from "../components/FadeUp";
import { goTo } from "../utils/navigation";
import Icon from "../components/Icon";
import { servicesBentoImage } from "../assets/site";
import { PHONE_LINK } from "../config/contact";

const DATA_POLICY = "자료는 목적 달성 후 고객과 협의한 방식으로 반환하거나 폐기하며, 필요한 보관 항목·기간은 계약 시 안내합니다.";

const SERVICES = {
  family: {
    label: "개인 · 가사 사실조사",
    title: "개인·가사 사실조사",
    description: "가족이나 개인 관계에서 확인이 필요한 사실을 차분히 정리합니다. 상담을 통해 조사 목적과 확인 가능한 범위를 살피고, 사안에 맞는 자료 수집 방법을 안내합니다.",
    competencies: [
      { icon: "home", title: "가사 분쟁 사실 확인", desc: "가족 관계와 가사 분쟁에서 쟁점이 되는 상황을 정리하고 확인이 필요한 부분을 살핍니다." },
      { icon: "file-check", title: "자료 수집 및 정리", desc: "적법하게 확보할 수 있는 자료를 검토하고, 날짜와 경위를 구분해 사실관계를 정리합니다." },
      { icon: "rings", title: "관계 및 배경 확인", desc: "중요한 결정을 앞둔 상황에서 공개 정보와 정당하게 제공받은 자료를 바탕으로 확인을 돕습니다." },
    ],
    support: [
      { icon: "scale", title: "분쟁 대응 자료 준비", desc: "가사 분쟁과 관련된 자료를 정리합니다. 자료의 활용 방법과 법적 판단은 담당 법률 전문가와 확인할 수 있도록 안내합니다." },
      { icon: "users", title: "상황에 맞는 조사 설계", desc: "이미 확인한 내용과 추가로 확인할 내용을 구분해 필요한 조사 범위를 함께 정합니다." },
    ],
    situations: [
      { title: "사실과 추측을 구분해야 할 때", desc: "개인 관계에서 의문이 생겼지만 확인된 정보가 부족한 경우." },
      { title: "가사 분쟁 자료가 필요한 때", desc: "양육이나 재산 등 쟁점과 관련된 사실관계를 정리하려는 경우." },
      { title: "중요한 결정을 앞두고 있을 때", desc: "정당한 목적에 따라 관계나 배경에 관한 확인이 필요한 경우." },
    ],
    preparation: [
      { icon: "clipboard", label: "확인하려는 사실과 조사 목적" },
      { icon: "file-text", label: "정당하게 보유하고 있는 관련 자료" },
      { icon: "calendar", label: "주요 사건의 날짜와 경위" },
      { icon: "users", label: "당사자 관계와 의뢰 권한" },
    ],
    faqs: [
      { q: "어떤 자료를 먼저 준비하면 되나요?", a: "확인하려는 내용과 그동안의 경위를 정리해 주세요. 이미 보유한 자료가 있다면 상담 시 수집 경위와 함께 알려주시면 됩니다." },
      { q: "조사 결과를 소송에 사용할 수 있나요?", a: "자료의 활용 가능성은 수집 방법과 사건에 따라 달라집니다. 증거 인정 여부나 법적 효력을 보장하지 않으며, 법률 전문가의 검토가 필요합니다." },
      { q: "조사 기간은 얼마나 걸리나요?", a: "확인할 내용, 자료의 확보 가능성, 진행 범위에 따라 달라집니다. 상담 후 예상 일정과 중간 보고 방법을 협의합니다." },
    ],
    consultation: "개인·가사 상담",
    ctaTitle: "확인해야 할 사실부터 함께 정리합니다",
    ctaDescription: "현재 상황과 확인하고 싶은 내용을 알려주세요. 가능한 조사 범위와 진행 방향을 안내합니다.",
  },
  corporate: {
    label: "기업 조사",
    title: "기업 내부 비위 및 디지털 포렌식",
    description: "기업 내부의 이상 징후와 영업기밀·금융 피해 정황을 확인합니다. 의뢰 권한과 자료의 수집 경위를 먼저 검토하고, 관련 기록과 디지털 자료를 분석할 범위를 협의합니다.",
    competencies: [
      { icon: "clipboard", title: "내부 비위 정황 확인", desc: "업무 기록과 관련 자료를 대조해 내부 비위가 의심되는 경위를 정리합니다." },
      { icon: "database", title: "디지털 자료 검토", desc: "검토 권한이 확인된 기기와 파일의 분석 가능 여부를 살피고 필요한 작업 범위를 안내합니다." },
      { icon: "file-check", title: "금융 피해 자료 정리", desc: "제공받은 거래·계약 자료를 바탕으로 피해 경위와 확인이 필요한 쟁점을 정리합니다." },
    ],
    support: [
      { icon: "lock", title: "영업기밀 피해 확인", desc: "유출이 의심되는 자료와 접근 기록을 검토해 사실관계 확인 방향을 정합니다." },
      { icon: "folder", title: "대응 자료 구성", desc: "조사에서 확인된 내용을 근거 자료와 함께 정리해 기업의 후속 검토에 활용할 수 있도록 돕습니다." },
    ],
    situations: [
      { title: "내부 기록에 이상 징후가 있을 때", desc: "업무·계약·거래 기록 사이의 불일치가 발견된 경우." },
      { title: "기밀 유출 정황이 있을 때", desc: "자료가 외부로 전달됐을 가능성을 확인하려는 경우." },
      { title: "금융 피해 경위를 정리할 때", desc: "관련 계약과 거래 자료를 체계적으로 검토해야 하는 경우." },
    ],
    preparation: [
      { icon: "id-card", label: "의뢰인 신원과 기업의 의뢰 권한" },
      { icon: "file-text", label: "관련 계약·거래·업무 기록" },
      { icon: "database", label: "검토 대상 자료·기기와 접근 권한" },
      { icon: "calendar", label: "이상 징후가 발생한 시점과 경위" },
    ],
    faqs: [
      { q: "직원의 기기를 바로 분석할 수 있나요?", a: "소유 관계, 사용 조건, 분석 권한과 동의 여부 등을 먼저 확인해야 합니다. 권한이 확인되지 않은 기기에 임의로 접근하거나 분석하지 않습니다." },
      { q: "삭제된 파일도 복구할 수 있나요?", a: "기기 상태와 저장 방식에 따라 분석·복구 가능 여부가 달라집니다. 상담과 사전 확인을 통해 작업 범위를 안내하며 복구를 보장하지 않습니다." },
      { q: "조사 결과는 어떻게 받나요?", a: "협의한 범위에서 확인한 내용과 근거 자료, 확인되지 않은 부분을 구분해 전달합니다. 보고 형식과 공유 대상은 진행 전에 정합니다." },
    ],
    consultation: "기업 조사 상담",
    ctaTitle: "기업의 상황에 맞는 확인 절차를 안내합니다",
    ctaDescription: "의심되는 정황과 보유한 자료를 알려주세요. 검토 권한과 필요한 조사 범위부터 확인합니다.",
  },
  locate: {
    label: "소재 및 보호",
    title: "소재 파악 및 신변보호",
    description: "연락이 끊긴 가족의 안전 확인이나 신변보호가 필요한 상황을 상담합니다. 의뢰 목적과 당사자 관계를 확인한 뒤, 정당하게 이용할 수 있는 정보와 안전을 우선하는 진행 방향을 살핍니다.",
    competencies: [
      { icon: "route", title: "소재 확인 방향 검토", desc: "마지막 연락과 알려진 경위를 바탕으로 확인 가능한 정보와 절차를 정리합니다." },
      { icon: "users", title: "가족의 안전 확인", desc: "가족의 연락 두절 상황을 파악하고, 필요한 경우 공적 신고 절차를 우선 안내합니다." },
      { icon: "shield-lock", title: "신변보호 상담", desc: "위협 상황과 일상 동선을 살펴 안전을 위해 필요한 보호 범위를 협의합니다." },
    ],
    support: [
      { icon: "clipboard", title: "신고·상담 자료 준비", desc: "연락 두절 또는 위협의 경위를 시간순으로 정리해 관계 기관 상담에 필요한 자료 준비를 돕습니다." },
      { icon: "lock", title: "당사자의 권리 확인", desc: "의뢰 목적과 관계를 확인하고, 상대방의 개인정보와 의사를 침해하는 요청은 진행하지 않습니다." },
    ],
    situations: [
      { title: "가족과 연락이 끊겼을 때", desc: "마지막 연락 이후의 상황과 안전 여부를 확인하려는 경우." },
      { title: "지속적인 위협을 받고 있을 때", desc: "위협 정황을 정리하고 보호 방법을 상담하려는 경우." },
      { title: "신고 자료를 정리해야 할 때", desc: "관계 기관에 전달할 연락 기록과 사건 경위가 필요한 경우." },
    ],
    preparation: [
      { icon: "users", label: "당사자와의 관계 및 의뢰 목적" },
      { icon: "calendar", label: "마지막 연락 시점과 알려진 경위" },
      { icon: "file-text", label: "정당하게 보유한 연락·위협 기록" },
      { icon: "clipboard", label: "기존 신고 여부와 필요한 보호 내용" },
    ],
    faqs: [
      { q: "실종이나 급박한 위험에도 상담을 받아야 하나요?", a: "즉각적인 위험이 있거나 실종이 의심되면 경찰 등 관계 기관에 먼저 신고해 주세요. 민간조사 상담은 공적 신고와 수사를 대신하지 않습니다." },
      { q: "이름만 알면 누구든 찾아주나요?", a: "의뢰 목적과 관계, 정보 확인 권한을 먼저 검토합니다. 정당한 근거가 없거나 상대방에게 위해를 줄 우려가 있는 요청은 진행하지 않습니다." },
      { q: "소재 확인을 보장하나요?", a: "확인 가능한 정보와 당사자의 상황에 따라 진행 가능 여부가 달라집니다. 특정인의 소재 확인이나 연락 성사를 보장하지 않습니다." },
    ],
    consultation: "소재·보호 상담",
    ctaTitle: "안전을 우선해 필요한 절차를 살핍니다",
    ctaDescription: "연락 두절이나 위협이 발생한 경위를 알려주세요. 현재 상황에서 가능한 확인과 보호 방향을 안내합니다.",
  },
  security: {
    label: "특수 조사",
    title: "도청 및 불법촬영 탐지",
    description: "개인 공간이나 기업 시설에서 의심되는 도청·불법촬영 장치를 점검합니다. 공간의 이용·관리 권한을 확인하고, 구조와 의심 정황에 맞춰 점검 범위를 정합니다.",
    competencies: [
      { icon: "eye-off", title: "불법촬영 의심 지점 점검", desc: "공간 구조와 의심되는 물품을 살펴 점검이 필요한 지점을 확인합니다." },
      { icon: "lock", title: "도청 의심 정황 점검", desc: "의심 장치나 이상 징후를 바탕으로 장비 점검이 필요한 범위를 검토합니다." },
      { icon: "home", title: "공간 보안 점검", desc: "주거·사무 공간의 사용 환경을 살펴 보안상 확인이 필요한 부분을 정리합니다." },
    ],
    support: [
      { icon: "file-check", title: "점검 결과 정리", desc: "점검한 위치와 확인 내용을 구분해 전달하고, 추가 확인이 필요한 사항을 안내합니다." },
      { icon: "camera", title: "의심 장치 발견 시 안내", desc: "발견 경위와 현장 상태를 기록하도록 돕고, 관계 기관 신고가 필요한 상황을 안내합니다." },
    ],
    situations: [
      { title: "낯선 장치나 물품을 발견했을 때", desc: "설치 목적을 알 수 없는 장치가 공간 안에서 발견된 경우." },
      { title: "민감한 대화 공간을 점검할 때", desc: "회의실이나 상담실 등에서 보안 상태를 확인하려는 경우." },
      { title: "촬영이 의심되는 정황이 있을 때", desc: "사적 공간에서 불법촬영 가능성을 점검해야 하는 경우." },
    ],
    preparation: [
      { icon: "map-pin", label: "점검할 공간의 위치와 규모" },
      { icon: "id-card", label: "공간 이용·관리 권한" },
      { icon: "camera", label: "의심 장치의 사진과 발견 경위" },
      { icon: "calendar", label: "점검 가능한 시간과 출입 조건" },
    ],
    faqs: [
      { q: "점검하면 모든 장치를 찾을 수 있나요?", a: "장치의 작동 상태와 설치 방식, 공간 구조에 따라 점검에 한계가 있습니다. 모든 장치의 발견을 보장하지 않으며 점검 범위와 한계를 사전에 안내합니다." },
      { q: "의심 장치를 발견하면 어떻게 해야 하나요?", a: "임의로 분해하거나 상태를 바꾸기보다 발견 장소와 경위를 기록해 주세요. 범죄가 의심되면 관계 기관에 신고하고 안내를 받는 것이 우선입니다." },
      { q: "다른 사람이 사용하는 공간도 점검할 수 있나요?", a: "의뢰인의 이용·관리 권한과 출입 허가 여부를 확인한 공간만 점검합니다. 허가 없이 타인의 공간에 들어가거나 장비를 설치하지 않습니다." },
    ],
    consultation: "보안 탐지 상담",
    ctaTitle: "점검할 공간과 의심 정황을 알려주세요",
    ctaDescription: "공간의 규모와 사용 환경을 확인하고 필요한 점검 범위와 준비사항을 안내합니다.",
  },
};

const INVESTIGATION_PRINCIPLES = [
  {
    icon: "scale",
    title: "업무 범위 확인:",
    desc: "의뢰 목적과 조사 권한을 검토하고 진행 가능한 범위를 먼저 안내합니다.",
  },
  {
    icon: "lock",
    title: "필요한 정보만 취급:",
    desc: "사안에 필요한 정보를 중심으로 자료의 공유 범위와 전달 방법을 협의합니다.",
  },
  {
    icon: "file-check",
    title: "확인 결과 구분:",
    desc: "확인한 사실과 확인되지 않은 부분을 구분해 보고합니다.",
  },
];

const LEGAL_ALLOWED = [
  "공개된 정보와 정당하게 제공받은 자료 검토",
  "권한이 확인된 자료·기기·공간의 점검",
  "동의한 관계자와의 면담 및 사실 확인",
  "사안에 필요한 경위 정리와 결과 보고",
];

const LEGAL_FORBIDDEN = [
  "주거 침입 및 타인의 사유지 불법 침범",
  "도청, 감청 및 휴대폰 해킹 등의 불법 행위",
  "수사관 및 공무원 사칭 행위",
  "동의 없는 사적 금융/의료 기록 무단 열람",
  "물리적 위협, 협박 및 사적 제재 행위",
];

const PROCESS_STEPS = [
  { no: "1", title: "상담 및 확인", desc: "의뢰 목적과 권한, 현재 상황을 확인합니다." },
  { no: "2", title: "범위 및 조건 협의", desc: "진행 범위와 일정, 비용을 안내합니다." },
  { no: "3", title: "조사 및 점검", desc: "협의한 범위에서 자료를 확인합니다." },
  { no: "4", title: "결과 전달", desc: "확인 결과와 자료 처리 방법을 안내합니다." },
];

function SectionHeading({ children }) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-[28px] md:text-[32px] font-semibold text-navy">{children}</h2>
      <div className="h-1 w-20 bg-brand-blue" />
    </div>
  );
}

export default function ServiceDetail({ category = "family" }) {
  const selectedCategory = Object.hasOwn(SERVICES, category) ? category : "family";
  const service = SERVICES[selectedCategory];
  const contactRoute = () => goTo("contact", { category: selectedCategory });
  const faqs = [...service.faqs, { q: "상담·조사 자료는 어떻게 처리하나요?", a: DATA_POLICY }];
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
                  {service.label}
                </span>
                <h1 className="text-[36px] md:text-[48px] font-bold leading-[1.2] tracking-[-0.96px] text-navy">
                  {service.title}
                </h1>
                <p className="max-w-[576px] text-[17px] md:text-[18px] leading-relaxed text-[#44474d]">
                  {service.description}
                </p>
              </FadeUp>
              <FadeUp
                delay={120}
                className="relative overflow-hidden rounded-[10px] border border-[#bcc6cc] bg-[#edeeef] aspect-[4/3]"
              >
                <img
                  src={servicesBentoImage}
                  alt="노트북으로 조사 자료를 검토하는 모습"
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
              {service.competencies.map((item, i) => (
                <FadeUp
                  key={item.title}
                  delay={i * 100}
                  className="group flex flex-col gap-3 rounded-[10px] border border-[#d9d9d9] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-xl hover:shadow-navy/5"
                >
                  <Icon name={item.icon} className="h-6 w-6 shrink-0" />
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
                {service.support.map((item, i) => (
                  <div
                    key={item.title}
                    className={`flex flex-1 flex-col gap-3 ${i === 1 ? "border-t border-border-gray/40 pt-6 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0" : ""}`}
                  >
                    <Icon name={item.icon} className="h-6 w-6" />
                    <h3 className="text-[22px] font-semibold text-slate">{item.title}</h3>
                    <p className="text-[15px] leading-relaxed text-[#44474d]">{item.desc}</p>
                  </div>
                ))}
              </FadeUp>

              <FadeUp
                delay={240}
                className="flex flex-col justify-center gap-4 rounded-[10px] border border-navy bg-navy p-8"
              >
                <h3 className="text-[22px] font-semibold text-white">{service.consultation}</h3>
                <p className="text-[15px] leading-relaxed text-white/75">
                  확인하고 싶은 내용과 보유한 자료를 알려주세요. 진행 가능 여부부터 함께 살핍니다.
                </p>
                <button
                  type="button"
                  onClick={contactRoute}
                  className="group flex items-center gap-2 text-[15px] font-bold text-brand-blue-light"
                >
                  {service.consultation} 문의
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
                이런 상황에서 상담할 수 있습니다
              </h2>
              <div className="flex flex-col gap-6">
                {service.situations.map((item, i) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue text-[10px] text-white">
                      {String(i + 1).padStart(2, "0")}
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
                추측과 확인된 사실을 구분합니다. 의뢰 목적에 필요한 범위를 정하고,
                진행 중 확인한 내용을 근거와 함께 전달합니다.
              </p>
              <div className="flex flex-col gap-4">
                {INVESTIGATION_PRINCIPLES.map((p) => (
                  <div key={p.title} className="flex gap-3">
                    <Icon name={p.icon} className="h-5 w-5 shrink-0" />
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
              <p className="text-[15px] text-white/75">
                의뢰 목적과 권한을 확인한 뒤 진행 가능한 범위를 안내합니다.
              </p>
            </FadeUp>

            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[10px] bg-white/10 md:grid-cols-2">
              <FadeUp className="flex flex-col gap-5 bg-navy p-8 md:p-10">
                <div className="flex items-center gap-2">
                  <Icon name="check-circle" className="h-5 w-5" />
                  <h3 className="text-[16px] font-bold text-brand-blue-light">합법적 조사 범위</h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {LEGAL_ALLOWED.map((item) => (
                    <li key={item} className="text-[14px] leading-relaxed text-white/75">
                      • {item}
                    </li>
                  ))}
                </ul>
              </FadeUp>
              <FadeUp delay={100} className="flex flex-col gap-5 bg-navy p-8 md:p-10">
                <div className="flex items-center gap-2">
                  <Icon name="x-circle" className="h-5 w-5" />
                  <h3 className="text-[16px] font-bold text-red-400">금지 및 불가 행위</h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {LEGAL_FORBIDDEN.map((item) => (
                    <li key={item} className="text-[14px] leading-relaxed text-white/75">
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
                <h3 className="text-[22px] font-semibold text-navy">상담 전 준비사항</h3>
                <p className="text-[14px] leading-relaxed text-[#44474d]">
                  알고 있는 내용과 정당하게 보유한 자료만 준비해 주세요.
                  추가 자료가 필요한 경우 상담에서 안내합니다.
                </p>
                <div className="h-1 w-12 bg-brand-blue" />
              </div>
              <div className="grid flex-1 grid-cols-1 sm:grid-cols-2 gap-4">
                {service.preparation.map((doc) => (
                  <div key={doc.label} className="flex items-center gap-3">
                    <Icon name={doc.icon} className="h-[18px] w-[18px] shrink-0" />
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
                {faqs.map((f) => (
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
                비용은 확인할 내용과 진행 범위에 따라 달라집니다.
                상담 후 필요한 작업과 조건을 정리해 견적을 안내합니다.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  ["진행 범위", "확인할 내용과 대상에 따라 협의"],
                  ["예상 일정", "자료와 현장 조건 확인 후 안내"],
                  ["인력·장비", "필요한 작업에 따라 안내"],
                  ["결과 전달", "보고 형식과 전달 방법 협의"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b border-[#d9d9d9] pb-2"
                  >
                    <span className="text-[14px] font-bold text-slate">{label}</span>
                    <span className="text-[14px] text-[#44474d]">{value}</span>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={contactRoute}
                className="mt-2 rounded-[10px] bg-navy py-4 text-[16px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy/90 hover:shadow-lg"
              >
                {service.consultation} 및 견적 문의
              </button>
            </FadeUp>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-navy px-6 md:px-10 py-20">
          <div className="mx-auto flex max-w-[768px] flex-col items-center gap-6 text-center">
            <FadeUp as="h2" className="text-[32px] md:text-[48px] font-bold tracking-[-0.96px] text-white">
              {service.ctaTitle}
            </FadeUp>
            <FadeUp delay={80} as="p" className="text-[16px] md:text-[18px] text-white/90">
              {service.ctaDescription}
            </FadeUp>
            <FadeUp delay={160} className="flex flex-wrap justify-center gap-4 pt-2">
              <a
                href={PHONE_LINK}
                className="flex items-center gap-2 rounded-[12px] bg-white px-10 py-4 text-[16px] font-bold text-navy transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Icon name="phone" className="h-[18px] w-[18px]" />
                지금 전화하기
              </a>
              <button
                type="button"
                onClick={contactRoute}
                className="flex items-center gap-2 rounded-[12px] border border-white/20 bg-navy px-10 py-4 text-[16px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/5"
              >
                <Icon name="chat" className="h-[18px] w-[18px]" />
                {service.consultation} 문의
              </button>
            </FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
