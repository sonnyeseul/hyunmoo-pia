import FadeUp from "./FadeUp";

const REASONS = [
  {
    title: "정식 사업자 정보 공개",
    desc: "대표자 및 사업장 정보를 투명하게 공개하여 신뢰할 수 있는 계약 기반을 제공합니다.",
  },
  {
    title: "합법성 우선 검토",
    desc: "조사 목적과 범위를 먼저 확인하고, 수행할 수 있는 업무와 제한되는 요청을 안내합니다.",
  },
  {
    title: "필요한 정보만 취급",
    desc: "상담과 조사에 필요한 정보만 확인하고, 자료의 전달과 보관 방식은 의뢰인과 협의합니다.",
  },
  {
    title: "전국 의뢰 상담",
    desc: "부산을 기반으로 전국 의뢰를 상담하며, 현장 여건에 맞춰 조사 가능 일정과 출장 비용을 안내합니다.",
  },
  {
    title: "대표 조사관 직접 상담",
    desc: "대표 손성오가 상담에서 상황과 요구사항을 확인하고, 의뢰에 맞는 조사 방향을 함께 정합니다.",
  },
  {
    title: "체계적인 리포트",
    desc: "조사 과정과 결과를 구조화된 보고서 형태로 제공하여 법적 대응을 지원합니다.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white px-6 md:px-10 py-24">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-16 px-0 md:px-6">
        <FadeUp as="h2" className="text-center text-[28px] md:text-[32px] font-semibold text-navy">
          현무 PIA를 선택하는 이유
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {REASONS.map((r, i) => (
            <FadeUp
              key={r.title}
              delay={(i % 3) * 100}
              className="group flex flex-col gap-4 rounded-[10px] border border-[#bcc6cc] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/40 hover:bg-bg-gray hover:shadow-xl hover:shadow-navy/5"
            >
              <h3 className="text-[24px] font-semibold text-slate transition-colors duration-300 group-hover:text-brand-blue">
                {r.title}
              </h3>
              <p className="text-[16px] leading-relaxed text-slate">{r.desc}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
