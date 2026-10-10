import { statisticsCityImage, statisticsCitySrcSet } from "../assets/site";
import OdometerNumber from "./OdometerNumber";

const STATS = [
  {
    title: "사건해결률",
    value: "98",
    suffix: "%",
    desc: "확실한 결과로 신뢰 구축",
  },
  {
    title: "누적 고객 수",
    value: "875",
    desc: "함께한 고객들의 발자취",
  },
  {
    title: "총 의뢰 수",
    value: "1,672",
    desc: "다양한 사례로 쌓아온 경험",
  },
  {
    title: "개인정보파기",
    value: "1,672",
    desc: "신뢰할 수 있는 개인정보 관리",
  },
];

export default function TrustBar() {
  return (
    <section
      aria-labelledby="trust-stats-heading"
      className="relative overflow-hidden bg-navy px-6 py-20 text-white md:px-10 md:py-28"
    >
      <img
        src={statisticsCityImage}
        srcSet={statisticsCitySrcSet}
        sizes="100vw"
        width="1280"
        height="717"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 size-full object-cover object-bottom"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/55" />
      <div className="relative mx-auto max-w-[1200px] text-center">
        <h2
          id="trust-stats-heading"
          className="break-keep text-balance text-3xl font-bold leading-snug md:text-4xl lg:text-5xl"
        >
          작은 부분 하나까지도 신중하게 점검합니다.
        </h2>
        <p className="mt-6 break-keep text-pretty text-sm leading-relaxed text-white/80 sm:text-base md:text-lg">
          <span className="block">
            고객님께서 직면한 사회적, 개인적, 비밀스러운 문제들을 다양한 노하우를 통해
          </span>
          <span className="block">
            마치 저희 일처럼 빠르고 정확하게 해결하도록 최선을 다하겠습니다.
          </span>
        </p>
        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 md:mt-20 md:grid-cols-4 md:gap-x-8">
          {STATS.map((stat) => (
            <div key={stat.title} className="trust-stat min-w-0">
              <dt className="text-sm font-medium text-white/85 md:text-base">
                {stat.title}
              </dt>
              <dd className="mt-5 text-4xl font-bold tabular-nums sm:text-5xl lg:text-6xl">
                <OdometerNumber value={stat.value} suffix={stat.suffix} />
              </dd>
              <dd className="mt-4 text-pretty text-xs leading-relaxed text-white/80 sm:text-sm">
                {stat.desc}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
