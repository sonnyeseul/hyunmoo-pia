import { faqChevron } from "../assets/figmaAssets";
import FadeUp from "./FadeUp";

const FAQS = [
  {
    q: "수집된 증거가 법정에서 효력이 있나요?",
    a: "네. 현무 PIA는 모든 증거 수집 과정에서 법적 효력을 갖출 수 있도록 한국 법령이 허용하는 범위 안에서만 조사를 진행합니다. 조사 전 단계부터 법적 리스크를 검토하여 안전하게 활용 가능한 증거만을 전달합니다.",
  },
  {
    q: "상담 내용이 외부로 유출될 걱정은 없나요?",
    a: "상담 및 사건 기록은 분리 관리되며 업무 담당 범위에 따라 접근이 제한됩니다. 업무 종료 후 모든 전자자료 및 인쇄자료는 고객 요청에 따라 폐기 또는 반환되며, ISO 27001 기준에 준하는 파기 절차를 따릅니다.",
  },
  {
    q: "전국 어디든 조사가 가능한가요?",
    a: "부산 본사를 기반으로 대한민국 전역에 신속하게 대응합니다. 지역과 이동 거리는 견적 산정 시 함께 안내드립니다.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-20 bg-bg-gray px-6 md:px-10 py-24">
      <div className="mx-auto flex max-w-[768px] flex-col items-center gap-12">
        <FadeUp as="h2" className="text-[28px] md:text-[32px] font-semibold text-navy">자주 묻는 질문</FadeUp>

        <div className="flex w-full flex-col gap-4">
          {FAQS.map((item, i) => (
            <FadeUp
              key={item.q}
              delay={i * 100}
              as="details"
              className="group rounded-[10px] border border-[#bcc6cc] bg-white p-6 transition-all duration-300 hover:border-brand-blue/40 hover:shadow-lg hover:shadow-navy/5"
            >
              <summary className="flex items-center justify-between gap-4 text-[18px] md:text-[24px] font-semibold text-slate transition-colors duration-200 group-hover:text-brand-blue">
                {item.q}
                <img
                  src={faqChevron}
                  alt=""
                  className="h-[7.4px] w-3 shrink-0 transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="pt-4 text-[16px] leading-relaxed text-slate">{item.a}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
