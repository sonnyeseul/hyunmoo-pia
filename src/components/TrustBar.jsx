import FadeUp from "./FadeUp";

const STATS = [
  { title: "정식 사업체", desc: "사업자등록 및 정보 공개" },
  { title: "전문 자격", desc: "PIA 탐정사 자격 보유" },
  { title: "24/7 상담", desc: "언제든 접수 가능" },
  { title: "전국 출장", desc: "대한민국 전역 대응" },
];

export default function TrustBar() {
  return (
    <section className="bg-navy px-6 md:px-10 py-12">
      <div className="mx-auto flex max-w-[1200px] flex-wrap justify-center gap-8 px-0 md:px-6">
        {STATS.map((stat, i) => (
          <FadeUp
            key={stat.title}
            delay={i * 80}
            className="flex flex-1 min-w-[140px] cursor-default flex-col items-center gap-1 transition-transform duration-300 hover:scale-105"
          >
            <div className="text-[24px] font-semibold text-white">{stat.title}</div>
            <div className="text-[12px] font-bold tracking-[1.2px] text-white opacity-60 text-center">
              {stat.desc}
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
