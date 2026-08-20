import FadeUp from "./FadeUp";

const REASONS = [
  {
    title: "정식 사업자 정보 공개",
    desc: "대표자 및 사업장 정보를 투명하게 공개하여 신뢰할 수 있는 계약 기반을 제공합니다.",
  },
  {
    title: "합법성 우선 검토",
    desc: "조사 전 법적 리스크를 사전에 검토하여 의뢰인에게 안전한 증거만을 전달합니다.",
  },
  {
    title: "완벽한 비밀보장",
    desc: "상담부터 결과 전달까지 암호화된 채널을 사용하여 고객 정보를 철저히 보호합니다.",
  },
  {
    title: "전국 신속 대응",
    desc: "부산 본사를 기반으로 대한민국 전역 어디든 수시간 내에 신속히 투입됩니다.",
  },
  {
    title: "풍부한 실무 경험",
    desc: "15년 이상의 복합 조사 경험을 통해 복잡한 상황에서도 명확한 해법을 제시합니다.",
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
