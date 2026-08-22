import { partnerLogos } from "../assets/figmaAssets";
import { certificateGallery, certificateCards } from "../assets/certificates";
import { institutionLogos } from "../assets/institutions";
import FadeUp from "./FadeUp";

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
        <div className="flex flex-col gap-9 border-t border-white/10 pt-14">
          <FadeUp className="flex flex-col items-center gap-4">
            <span className="text-[11px] font-bold tracking-[3px] text-[#7fb0f0]">
              PARTNER INSTITUTIONS
            </span>
            <h3 className="text-center text-[24px] md:text-[30px] font-bold tracking-[-0.4px] text-white">
              협력 · 신고 · 등록 기관
            </h3>
            <span
              className="h-px w-20 bg-gradient-to-r from-transparent via-white/45 to-transparent"
              aria-hidden
            />
          </FadeUp>
          <MarqueeRow
            items={institutionLogos}
            direction="left"
            pauseOnHover={false}
            itemClassName="shrink-0"
            renderItem={(org) => (
              <div className="flex h-[104px] w-[236px] items-center justify-center rounded-[10px] bg-white px-7 py-5 shadow-lg shadow-black/20 ring-1 ring-white/10">
                <img
                  src={org.src}
                  alt={org.alt}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                  draggable={false}
                />
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
}
