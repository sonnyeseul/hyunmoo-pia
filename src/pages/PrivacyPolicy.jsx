import Header from "../components/Header";
import Footer from "../components/Footer";
import FadeUp from "../components/FadeUp";
import { goTo } from "../utils/navigation";
import Icon from "../components/Icon";
import { servicesBentoImage } from "../assets/site";
import { PHONE_LINK, PHONE_NUMBER } from "../config/contact";

const SIDE_NAV = [
  { id: "privacy-section-1", section: "privacy", label: "개인정보 처리방침" },
  { id: "privacy-section-2", section: "scope", label: "업무 수행 범위" },
  { id: "privacy-section-3", section: "storage", label: "자료 보관 및 폐기" },
];

const COLLECTED_ITEMS = [
  "이용자가 상담 채널에서 직접 전달한 문의 내용과 회신용 연락처",
  "상담 과정에서 제공한 이름 또는 별칭, 관심 분야, 지역",
  "계약 후 조사에 필요한 자료 (항목과 취급 범위는 별도 안내)",
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
    title: "상담과 계약",
    desc: "상담과 조사에 필요한 정보만 확인합니다. 필요한 보관 항목과 기간은 계약 시 안내합니다.",
  },
  {
    title: "진행과 결과 전달",
    desc: "담당 업무에 필요한 범위에서 자료를 취급하고, 의뢰인과 협의한 방식으로 결과를 전달합니다.",
  },
  {
    title: "반환과 폐기",
    desc: "자료는 목적 달성 후 고객과 협의한 방식으로 반환하거나 폐기합니다. 법령에 따라 보관이 필요한 자료는 별도로 관리합니다.",
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
                상담 정보를 어떻게 전달하고 관리하는지, 어떤 조사를 진행할 수 있는지 안내합니다.
                자세한 사항은 상담과 계약 과정에서 확인하실 수 있습니다.
              </p>
            </FadeUp>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              {/* Side nav */}
              <nav aria-label="개인정보 및 운영 정책 목차" className="lg:col-span-3">
                <ul className="flex flex-col gap-4 border-l border-[#d9d9d9] pl-px">
                  {SIDE_NAV.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#privacy-policy?section=${item.section}`}
                        onClick={(e) => {
                          e.preventDefault();
                          goTo(`privacy-policy?section=${item.section}`);
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
                      <Icon name="user-lock" className="h-5 w-5" />
                      <span className="text-[12px] font-bold tracking-[1.2px] text-brand-blue">
                        Section 01
                      </span>
                    </div>
                    <h2 className="text-[26px] md:text-[32px] font-semibold text-navy">
                      개인정보 처리방침 (Privacy Policy)
                    </h2>
                    <p className="text-[15px] md:text-[16px] leading-relaxed text-[#44474d]">
                      현무 민간조사 탐정사무소는 상담 회신과 의뢰 검토를 위해 필요한 정보를 확인합니다.
                      홈페이지의 상담 버튼은 카카오톡 상담창으로 연결하며,
                      문의 내용은 이용자가 해당 상담창에서 직접 전달합니다.
                    </p>
                    <div className="flex flex-col gap-2 rounded-r-[4px] border-l-4 border-brand-blue bg-bg-gray px-9 py-8">
                      <span className="text-[12px] font-bold tracking-[1.2px] text-navy">
                        상담과 의뢰 과정에서 확인하는 정보:
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
                      이 홈페이지는 상담 입력 폼으로 이름·연락처·상담 내용을 수집하지 않으며,
                      문의 내용을 자동으로 이메일 발송하지 않습니다.
                      상담 내용은 카카오톡에서 직접 작성해 전송해 주세요.
                      공개된 전화나 이메일로도 직접 문의하실 수 있습니다.
                    </p>
                    <p className="text-[15px] leading-relaxed text-[#44474d]">
                      카카오톡의 대화 내용 전달과 보관에는 카카오의 개인정보 처리 기준도 적용됩니다.
                      <a href="https://www.kakao.com/policy/privacy" target="_blank" rel="noopener noreferrer" className="ml-1 text-brand-blue underline underline-offset-4">카카오 개인정보처리방침 (새 창)</a>
                      텔레그램이나 이메일로 직접 문의하실 때에도 해당 서비스의 처리 기준을 확인해 주세요.
                      사무소가 상담 과정에서 확인한 정보는 회신과 의뢰 검토를 위해 관리하며,
                      목적 달성 후 사무소의 자료 관리 기준에 따라 삭제합니다.
                    </p>
                    <p className="text-[15px] leading-relaxed text-[#44474d]">
                      정보는 상담과 조사 목적에 필요한 범위에서 취급하며, 의뢰인의 동의나 법령에 따른 근거 없이
                      제3자에게 제공하지 않습니다. 상담에 필요한 정보의 제공을 원하지 않으시면
                      그 뜻을 알려 주세요. 제공 범위에 따라 회신이나 의뢰 검토가 제한될 수 있습니다.
                    </p>
                    <p className="text-[15px] leading-relaxed text-[#44474d]">
                      개인정보의 열람·정정·삭제, 동의 철회 또는 자료 반환·폐기를 원하시면
                      현무 민간조사 탐정사무소에 문의해 주세요.
                      문의 전화: <a href={PHONE_LINK} className="font-semibold text-brand-blue underline underline-offset-4">{PHONE_NUMBER}</a>
                      <span className="mt-2 block">문의 이메일: <a href="mailto:actoz2001@gmail.com" className="font-semibold text-brand-blue underline underline-offset-4">actoz2001@gmail.com</a></span>
                      <span className="mt-2 block text-sm text-slate">안내 수정일: 2026년 10월 10일</span>
                    </p>
                  </FadeUp>
                </section>

                {/* Section 2 */}
                <section id="privacy-section-2" className="scroll-mt-24">
                  <FadeUp className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <Icon name="clipboard" className="h-5 w-5" />
                      <span className="text-[12px] font-bold tracking-[1.2px] text-brand-blue">
                        Section 02
                      </span>
                    </div>
                    <h2 className="text-[26px] md:text-[32px] font-semibold text-navy">
                      업무 수행 범위 (Scope of Work)
                    </h2>
                    <p className="text-[15px] md:text-[16px] leading-relaxed text-slate">
                      현무 민간조사 탐정사무소는 법령이 허용하는 방법과 범위에서 조사를 진행합니다.
                      의뢰 목적과 대상, 자료 수집 방법을 확인한 뒤 진행 가능 여부를 안내합니다.
                    </p>

                    <div className="grid grid-cols-1 gap-6 pt-2 sm:grid-cols-2">
                      <div className="flex flex-col gap-4 rounded-[8px] border border-[#bcc6cc] bg-bg-gray p-8">
                        <div className="flex items-center gap-2">
                          <Icon name="check-circle" className="h-5 w-5" />
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
                          <Icon name="x-circle" className="h-5 w-5" />
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
                      <Icon name="database" className="h-5 w-5" />
                      <span className="text-[12px] font-bold tracking-[1.2px] text-brand-blue">
                        Section 03
                      </span>
                    </div>
                    <h2 className="text-[26px] md:text-[32px] font-semibold text-navy">
                      자료 보관 및 폐기 안내
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
                      자료는 목적 달성 후 고객과 협의한 방식으로 반환하거나 폐기하며,
                      필요한 보관 항목과 기간은 계약 시 안내합니다.
                      상담 채널에서 직접 전달받은 문의 내용과 자료는 사무소에서 관리하고,
                      상담과 의뢰 검토 목적을 달성한 뒤 사무소의 자료 관리 기준에 따라 삭제합니다.
                      법령에 따라 보관이 필요한 자료는 해당 목적에 필요한 범위에서 별도로 관리합니다.
                      홈페이지의 이벤트 팝업을 닫거나 ‘오늘은 그만 보기’를 선택하면,
                      팝업 표시 여부를 브라우저에 저장합니다. 여기에 상담 내용이나 연락처는 저장하지 않습니다.
                    </p>
                  </FadeUp>
                </section>

                <FadeUp className="relative flex h-[220px] items-end overflow-hidden rounded-[10px] border border-[#bcc6cc]">
                  <img
                    src={servicesBentoImage}
                    alt=""
                    loading="lazy"
                    decoding="async"
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
