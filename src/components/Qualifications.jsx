import { useEffect, useRef, useState } from "react";
import { associationEmblems } from "../assets/site";
import { certificateGallery, certificateCards } from "../assets/certificates";
import { institutionLogos } from "../assets/institutions";
import FadeUp from "./FadeUp";

function MarqueeRow({ items, direction = "left", pauseOnHover = true, itemClassName, renderItem }) {
  const rowRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const animClass = direction === "right" ? "animate-marquee-right" : "animate-marquee-left";

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(rowRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rowRef}
      data-pause-on-hover={pauseOnHover}
      className="marquee-row -mx-6 overflow-hidden px-6 motion-reduce:overflow-x-auto md:-mx-10 md:px-10"
    >
      <div
        data-visible={visible}
        className={`marquee-track flex w-max ${animClass}`}
      >
        {/* Each copy includes the trailing gap, making the two halves identical. */}
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1 ? true : undefined}
            data-copy={copy}
            className="flex shrink-0 gap-4 pr-4 data-[copy=1]:motion-reduce:hidden"
          >
            {items.map((item, i) => (
              <div key={item.alt} className={itemClassName}>
                {renderItem(item, i)}
              </div>
            ))}
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
          {`현무 PIA는 한국공인탐정협회 소속으로, PIA 탐정사 등 아래의 자격과 인증 자료를 공개하고 있습니다.
`}
          <span className="font-semibold">대표 손성오</span>
          {`가 상담과 조사를 직접 맡으며, 의뢰 목적에 맞는 조사 범위와 진행 방법을 안내합니다.
공개된 자격 자료의 생년월일과 식별 번호는 개인정보 보호를 위해 가렸습니다.`}
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
              width={item.width}
              height={item.height}
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
          {associationEmblems.map((emblem) => (
            <div key={emblem.alt} className="aspect-square w-full max-w-[248px]">
              {/* object-contain, not a circular crop — one of the four is a crest,
                  not a roundel, and would lose its top and bottom to a circle. */}
              <img
                src={emblem.src}
                alt={emblem.alt}
                loading="lazy"
                className="h-full w-full object-contain"
                draggable={false}
              />
            </div>
          ))}
        </FadeUp>

        {/* Affiliated institutions — always-on continuous marquee (no hover pause) */}
        <div className="flex flex-col gap-9 border-t border-white/10 pt-14">
          <FadeUp className="flex flex-col items-center gap-4">
            <span className="text-[11px] font-bold tracking-[3px] text-[#7fb0f0]">
              ASSOCIATIONS & RELATED ORGANIZATIONS
            </span>
            <h3 className="text-center text-[24px] md:text-[30px] font-bold tracking-[-0.4px] text-white">
              협회 및 관련 기관
            </h3>
            <span
              className="h-px w-20 bg-gradient-to-r from-transparent via-white/45 to-transparent"
              aria-hidden
            />
            <p className="max-w-[640px] break-keep text-center text-sm leading-relaxed text-white/70">
              소속 협회와 업무 관련 정보 기관을 소개합니다.
              기관 로고는 각 기관을 식별하기 위한 것으로, 공식 제휴나 조사 업무의 보증을 의미하지 않습니다.
            </p>
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
