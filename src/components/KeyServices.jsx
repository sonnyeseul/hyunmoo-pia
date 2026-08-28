import { servicesBentoImage } from "../assets/site";
import FadeUp from "./FadeUp";
import { goTo } from "../utils/navigation";

function handleActivateKey(e) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    goTo("service-detail");
  }
}

export default function KeyServices() {
  return (
    <section id="services" className="scroll-mt-20 bg-white px-6 md:px-10 py-24">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-16 px-0 md:px-6">
        <FadeUp as="h2" className="text-[28px] md:text-[32px] font-bold text-navy">주요 서비스 분야</FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <FadeUp
            as="button"
            type="button"
            onClick={() => goTo("service-detail")}
            onKeyDown={handleActivateKey}
            className="group lg:col-span-7 flex cursor-pointer flex-col justify-between gap-6 rounded-[10px] border border-[#c5c6cd] bg-bg-gray p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-xl hover:shadow-navy/5"
          >
            <div className="flex flex-col gap-3">
              <span className="text-[12px] font-bold tracking-[1.2px] text-brand-blue">
                개인 · 가사 사실조사
              </span>
              <h3 className="text-[24px] font-semibold text-slate">증거자료 및 사실관계 확인</h3>
              <p className="max-w-[448px] text-[16px] leading-relaxed text-slate">
                감정이 복잡한 상황에서 확인해야 할 사실과 불필요한 조사를 구분하여 필요한 자료
                확보 방향을 안내합니다.
              </p>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex gap-4">
                <span className="self-stretch rounded-[2px] bg-[#d9d9d9] px-3 py-1 text-[12px] font-bold tracking-[1.2px] text-slate">
                  양육권
                </span>
                <span className="self-stretch rounded-[2px] bg-[#d9d9d9] px-3 py-1 text-[12px] font-bold tracking-[1.2px] text-slate">
                  가사분쟁
                </span>
              </div>
              <span className="text-[13px] font-bold text-brand-blue opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                자세히 보기 →
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={100} className="group lg:col-span-5 overflow-hidden rounded-[10px] border border-[#c5c6cd] transition-shadow duration-300 hover:shadow-xl hover:shadow-navy/10">
            <img
              src={servicesBentoImage}
              alt="증거자료 및 사실관계 확인"
              className="h-full min-h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </FadeUp>

          {[
            {
              tag: "기업 조사",
              title: "기업 내부 비위 및 디지털 포렌식",
              desc: "산업보안, 영업기밀 피해 및 금융사기 정황을 디지털 분석을 통해 확인합니다.",
            },
            {
              tag: "소재 및 보호",
              title: "소재 파악 및 신변보호",
              desc: "실종·가출 등 연락 두절된 이의 소재를 합법적 범위 내에서 추적 및 파악합니다.",
            },
            {
              tag: "특수 조사",
              title: "도청 및 불법촬영 탐지",
              desc: "전문 장비를 활용하여 기업 및 개인 공간의 보안 위협 요소를 점검합니다.",
            },
          ].map((card, i) => (
            <FadeUp
              key={card.title}
              as="button"
              type="button"
              delay={i * 100}
              onClick={() => goTo("service-detail")}
              onKeyDown={handleActivateKey}
              className="group lg:col-span-4 flex cursor-pointer flex-col gap-3 rounded-[10px] border border-[#c5c6cd] bg-bg-gray px-8 pb-8 pt-10 text-left transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-xl hover:shadow-navy/5"
            >
              <span className="text-[12px] font-bold tracking-[1.2px] text-brand-blue">
                {card.tag}
              </span>
              <h4 className="text-[24px] font-semibold text-slate transition-colors duration-300 group-hover:text-brand-blue">
                {card.title}
              </h4>
              <p className="text-[16px] leading-relaxed text-slate">{card.desc}</p>
              <span className="pt-2 text-[13px] font-bold text-brand-blue opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                자세히 보기 →
              </span>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
