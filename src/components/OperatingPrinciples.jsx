import FadeUp from "./FadeUp";

const PRINCIPLES = [
  {
    no: "01",
    title: "합법성",
    desc: "모든 증거는 법적 효력을 갖출 수 있도록 한국 법령의 테두리 안에서 수집됩니다.",
  },
  {
    no: "02",
    title: "비밀보장",
    desc: "최소한의 정보만 취급하며, 업무 종료 시 관련 데이터는 즉시 폐기합니다.",
  },
  {
    no: "03",
    title: "투명성",
    desc: "진행 가능한 업무와 비용 기준을 사전에 명확히 안내하여 불필요한 마찰을 방지합니다.",
  },
  {
    no: "04",
    title: "사실 중심",
    desc: "추측을 배제하고 확인된 사실과 문서화된 증거만을 바탕으로 보고합니다.",
  },
];

export default function OperatingPrinciples() {
  return (
    <section id="principles" className="scroll-mt-20 bg-white px-6 md:px-10 py-24">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-16 px-0 md:px-6">
        <FadeUp className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-[28px] md:text-[32px] font-bold text-navy">현무 PIA 운영 원칙</h2>
          <p className="text-[16px] text-slate">
            신뢰와 정직을 최우선으로, 모든 조사 과정에서 엄격한 원칙을 준수합니다.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {PRINCIPLES.map((p, i) => (
            <FadeUp key={p.no} delay={i * 100} className="group flex flex-1 flex-col gap-4">
              <div className="text-[36px] font-bold text-navy/10 transition-colors duration-300 group-hover:text-brand-blue/30">
                {p.no}
              </div>
              <h3 className="text-[24px] font-semibold text-slate transition-colors duration-300 group-hover:text-brand-blue">
                {p.title}
              </h3>
              <p className="text-[16px] leading-relaxed text-slate">{p.desc}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
