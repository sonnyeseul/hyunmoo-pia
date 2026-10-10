import FadeUp from "./FadeUp";

const CONSULTATION_STEPS = [
  {
    title: "상담 전 준비",
    description:
      "문제의 경위와 확인하고 싶은 내용을 간단히 정리해 주세요. 이미 갖고 있는 자료가 있다면 상담할 때 함께 알려주세요.",
  },
  {
    title: "조사 범위 확인",
    description:
      "상담 내용을 바탕으로 확인이 필요한 사실과 합법적으로 진행할 수 있는 범위를 안내합니다.",
  },
  {
    title: "진행 방식과 견적",
    description:
      "기간, 인력, 지역 등 필요한 조건을 확인하고 진행 방식과 예상 견적을 설명드립니다.",
  },
  {
    title: "의뢰 여부 결정",
    description:
      "조사 범위와 비용을 충분히 확인한 뒤 진행 여부를 결정하실 수 있습니다. 결과 전달 방식도 함께 확인합니다.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-bg-gray-2 px-6 py-24 md:px-10">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-0 md:px-6">
        <FadeUp className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-[32px] font-bold tracking-[-0.96px] text-navy md:text-[48px]">
            상담·진행 안내
          </h2>
          <p className="text-[16px] leading-relaxed text-slate md:text-[18px]">
            처음 문의하실 때부터 진행 여부를 결정하기까지, 아래 내용을 함께 확인합니다.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {CONSULTATION_STEPS.map((step, index) => (
            <FadeUp
              key={step.title}
              delay={index * 80}
              className="flex min-w-0 flex-col gap-4 rounded-[10px] border border-border-gray bg-white p-6 shadow-[0_1px_1px_rgba(0,0,0,0.05)]"
            >
              <span className="text-sm font-semibold tabular-nums text-brand-blue">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-semibold text-navy">{step.title}</h3>
              <p className="text-sm leading-relaxed text-slate">{step.description}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
