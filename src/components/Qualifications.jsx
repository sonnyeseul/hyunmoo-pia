import { partnerLogos } from "../assets/figmaAssets";
import { certificateGallery, certificateCards } from "../assets/certificates";
import FadeUp from "./FadeUp";

// Institutions the office works with / files through. These are typographic
// nameplates, NOT the official emblems — drop real logo files in and swap the
// tile contents once licensed artwork is available.
const AFFILIATIONS = [
  { mark: "정부24", sub: "대한민국 정부 대표 포털" },
  { mark: "대한민국법원", sub: "Courts of Korea" },
  { mark: "부산가정법원", sub: "Busan Family Court" },
  { mark: "경남가정법원", sub: "Gyeongnam Family Court" },
  { mark: "KAIT", sub: "한국정보통신진흥협회" },
  { mark: "KISTA", sub: "한국특허전략개발원" },
  { mark: "FIU", sub: "금융정보분석원" },
];

function MarqueeRow({ items, direction = "left", pauseOnHover = true, itemClassName, renderItem }) {
  const animClass = direction === "right" ? "animate-marquee-right" : "animate-marquee-left";

  // Render the list twice back-to-back so translateX(-50%) loops seamlessly.
  const doubled = [...items, ...items];

  return (
    <div className={`${pauseOnHover ? "group" : ""} -mx-6 overflow-hidden md:-mx-10`}>
      <div
        className={`flex w-max gap-4 px-6 md:px-10 ${animClass} ${
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
        }`}
      >
        {doubled.map((item, i) => (
          <div key={i} className={itemClassName}>
            {renderItem(item, i)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Qualifications() {
  return (
    <section
      id="qualifications"
      className="scroll-mt-20 relative overflow-hidden bg-navy px-6 md:px-10 py-24"
      style={{
        backgroundImage: `
          radial-gradient(120% 60% at 12% -10%, rgba(47,101,177,0.35) 0%, rgba(47,101,177,0) 55%),
          radial-gradient(90% 60% at 105% 110%, rgba(40,103,192,0.22) 0%, rgba(40,103,192,0) 60%),
          linear-gradient(165deg, #081525 0%, #0a192f 35%, #0d2340 65%, #0a192f 100%)
        `,
      }}
    >
      {/* subtle top sheen for extra depth */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-12 px-0 md:px-6">
        <FadeUp as="h2" className="text-center text-[28px] md:text-[32px] font-semibold text-white">
          자격 및 인증
        </FadeUp>

        <FadeUp delay={100} as="p" className="mx-auto max-w-[992px] whitespace-pre-line text-center text-[16px] leading-relaxed text-white">
          {`현무 PIA는 한국공인탐정협회 소속으로, 관련 협회와 기관이 정한 자격 취득과 등록 절차를 하나씩 성실히 이행해왔습니다.
PIA 탐정사 자격증과 한국자격검정평가진흥원 탐정사 1급 · 2급 자격을 갖춘 `}
          <span className="font-semibold">대표 손성오</span>
          {`가 사건을 직접 맡아 처리하는 프라이빗 체제로 운영됩니다.
이러한 준비 과정은 단순히 사무실 간판을 걸기 위한 절차가 아니라,
현장에서 반드시 지켜야 할 윤리적·법적 기준을 체계적으로 이해하고 있다는 뜻이기도 합니다.`}
        </FadeUp>

        {/* Framed certificates — auto-scrolls left, pauses on hover */}
        <MarqueeRow
          items={certificateGallery}
          direction="left"
          itemClassName="h-[240px] w-[178px] shrink-0 overflow-hidden rounded-[10px] border border-white/15 bg-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30"
          renderItem={(item) => (
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="h-full w-full object-cover"
              draggable={false}
            />
          )}
        />

        {/* Licence cards — auto-scrolls right. Mixed portrait/landscape, so the
            height is fixed and the width follows each card's own aspect ratio. */}
        <MarqueeRow
          items={certificateCards}
          direction="right"
          itemClassName="h-[150px] shrink-0 overflow-hidden rounded-[8px] border border-white/15 bg-white/95 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30"
          renderItem={(item) => (
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="h-full w-auto object-contain"
              draggable={false}
            />
          )}
        />

        {/* Association emblems — fixed 4-across row (Figma 11:2569), no motion */}
        <FadeUp
          delay={150}
          className="mx-auto grid w-full max-w-[1121px] grid-cols-2 items-center justify-items-center gap-x-8 gap-y-10 pt-2 sm:grid-cols-4 lg:gap-x-[43px]"
        >
          {partnerLogos.map((src, i) => (
            <div
              key={i}
              className="aspect-square w-full max-w-[248px] overflow-hidden rounded-full"
            >
              <img src={src} alt="" className="h-full w-full object-cover" draggable={false} />
            </div>
          ))}
        </FadeUp>

        {/* Affiliated institutions — always-on continuous marquee (no hover pause) */}
        <div className="flex flex-col gap-6 border-t border-white/10 pt-12">
          <FadeUp as="p" className="text-center text-[12px] font-bold tracking-[1.6px] text-white/50">
            협력 · 신고 · 등록 기관
          </FadeUp>
          <MarqueeRow
            items={AFFILIATIONS}
            direction="left"
            pauseOnHover={false}
            itemClassName="shrink-0"
            renderItem={(org) => (
              <div className="flex h-[86px] w-[226px] flex-col items-center justify-center gap-1.5 rounded-[8px] border border-white/12 bg-white/[0.05] px-5">
                <span className="whitespace-nowrap text-[17px] font-bold leading-none tracking-[-0.2px] text-white/90">
                  {org.mark}
                </span>
                <span className="whitespace-nowrap text-[11px] leading-none tracking-[0.4px] text-white/45">
                  {org.sub}
                </span>
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
}
