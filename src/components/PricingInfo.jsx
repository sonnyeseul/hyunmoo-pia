import { pricingIcons } from "../assets/figmaAssets";
import FadeUp from "./FadeUp";

const FACTORS = [
  { icon: pricingIcons.duration, label: "예상 조사 기간" },
  { icon: pricingIcons.team, label: "투입 전문 인력 수" },
  { icon: pricingIcons.location, label: "활동 지역 및 이동 거리" },
  { icon: pricingIcons.equipment, label: "특수 장비 사용 여부" },
];

export default function PricingInfo() {
  return (
    <section className="bg-white px-6 md:px-10 py-24">
      <div className="mx-auto flex max-w-[672px] flex-col items-center gap-8 text-center">
        <FadeUp as="h2" className="text-[28px] md:text-[32px] font-semibold text-navy">
          합리적 비용 산정 기준
        </FadeUp>
        <FadeUp delay={80} as="p" className="text-[16px] text-slate">
          조사 비용은 고정 패키지가 아닌 업무의 복잡도와 투입 자원에 따라 산정됩니다.
        </FadeUp>

        <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-4">
          {FACTORS.map((f, i) => (
            <FadeUp
              key={f.label}
              delay={160 + i * 80}
              className="group flex items-center gap-4 rounded-[10px] border border-[#bcc6cc] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-lg hover:shadow-navy/5"
            >
              <img
                src={f.icon}
                alt=""
                className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:scale-125"
              />
              <span className="text-[12px] font-bold tracking-[1.2px] text-slate">
                {f.label}
              </span>
            </FadeUp>
          ))}
        </div>

        <p className="text-[13px] italic text-[#44474d]">
          초기 상담은 무료이며, 조사 범위를 확정한 후 투명하게 견적을 안내합니다.
        </p>
      </div>
    </section>
  );
}
