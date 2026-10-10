import Icon from "./Icon";
import FadeUp from "./FadeUp";

const FAQS = [
  {
    q: "수집된 증거가 법정에서 효력이 있나요?",
    a: "법령이 허용하는 범위에서 자료를 수집하고, 확인한 사실과 수집 경위를 함께 정리합니다. 재판에서 자료를 사용할 수 있는지와 증거로 인정되는지는 사건과 자료에 따라 달라지므로 법률 전문가에게 검토를 받는 것이 좋습니다.",
  },
  {
    q: "상담 내용이 외부로 유출될 걱정은 없나요?",
    a: "상담과 조사에 필요한 정보만 확인하고, 담당 업무에 필요한 범위에서 취급합니다. 자료는 목적 달성 후 고객과 협의한 방식으로 반환하거나 폐기하며, 필요한 보관 항목과 기간은 계약 시 안내합니다. 법령에 따라 보관이 필요한 자료는 별도로 관리합니다.",
  },
  {
    q: "전국 어디든 조사가 가능한가요?",
    a: "부산을 기반으로 전국 지역의 의뢰를 상담합니다. 실제 조사 가능 지역과 일정, 출장 비용은 의뢰 내용과 현장 여건을 확인한 뒤 안내드립니다.",
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
                <Icon
                  name="chevron-down"
                  className="h-4 w-4 shrink-0 text-slate/70 transition-transform group-open:rotate-180"
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
