import directorPhoto from "../assets/director/son-sung-oh.jpg";
import FadeUp from "./FadeUp";

// Grouped so the list reads as structured credentials rather than a flat
// run of white text (which was hard to scan).
const CREDENTIAL_GROUPS = [
  {
    label: "탐정 · 조사",
    items: ["한국공인탐정협회 소속", "PIA 탐정사 자격증 보유"],
  },
  {
    label: "상담 · 심리",
    items: ["한국심리상담협회 등록", "심리상담사 1급"],
  },
  {
    label: "현장 · 기술",
    items: ["드론 항공촬영사", "드론 교육지도사", "디지털자산관리사 1급"],
  },
  {
    label: "환경 · 자원",
    items: ["환경관리전문가 1급", "산림자원관리사 1급"],
  },
];

export default function DirectorMessage() {
  return (
    <section
      id="about"
      className="scroll-mt-20 relative overflow-hidden bg-navy px-6 md:px-10 py-24"
      style={{
        backgroundImage: `
          radial-gradient(100% 55% at 8% 0%, rgba(47,101,177,0.28) 0%, rgba(47,101,177,0) 58%),
          linear-gradient(180deg, #0a192f 0%, #0b1c36 60%, #0a192f 100%)
        `,
      }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-0 md:px-6 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-16 lg:items-start">
        {/* Portrait */}
        <FadeUp className="w-full max-w-[420px] mx-auto lg:mx-0 lg:sticky lg:top-28">
          <div className="overflow-hidden rounded-[12px] border border-white/10 shadow-2xl shadow-black/40">
            <img
              src={directorPhoto}
              alt="현무 PIA 대표이사 및 수석 조사관 손성오"
              className="aspect-[732/998] h-auto w-full object-cover"
            />
          </div>
        </FadeUp>

        {/* Message + identity + credentials */}
        <div className="flex flex-col">
          <FadeUp delay={80} className="flex items-center gap-3">
            <span className="h-px w-8 bg-white/30" aria-hidden />
            <span className="text-[12px] font-bold tracking-[1.6px] text-white/55">
              대표 인사말
            </span>
          </FadeUp>

          <FadeUp
            delay={120}
            as="h3"
            className="mt-5 whitespace-pre-line text-[30px] md:text-[40px] font-semibold leading-[1.25] tracking-[-0.8px] text-white"
          >
            {`의뢰인의 정보와
다음 판단을 함께 지키겠습니다.`}
          </FadeUp>

          <FadeUp
            delay={160}
            as="blockquote"
            className="mt-8 border-l-2 border-white/25 pl-6 text-[16px] md:text-[17px] leading-[1.85] text-white/65"
          >
            말하기 어려운 문제를 맡긴다는 것은 단순한 업무 의뢰가 아니라, 자신의 삶과 자산에 관한
            중요한 정보를 맡기는 일입니다. 현무 PIA는 의뢰인의 상황을 차분히 정리하고, 합리적인
            판단을 내릴 수 있는 사실만을 전달하겠습니다.
          </FadeUp>

          {/* Identity */}
          <FadeUp delay={200} className="mt-10 flex items-end gap-4 border-t border-white/10 pt-8">
            <div className="flex flex-col gap-1.5">
              <span className="text-[12px] font-bold tracking-[1.4px] text-white/50">
                대표이사 및 수석 조사관
              </span>
              <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-[26px] md:text-[28px] font-semibold leading-none text-white">
                  손성오
                </span>
                <span className="text-[13px] tracking-[1.6px] text-white/45">SON SUNG OH</span>
              </span>
            </div>
          </FadeUp>

          {/* Credentials */}
          <FadeUp delay={240} className="mt-10">
            <div className="text-[12px] font-bold tracking-[1.4px] text-white/50">
              보유 자격 및 소속
            </div>
            <dl className="mt-5 flex flex-col gap-5">
              {CREDENTIAL_GROUPS.map((group) => (
                <div
                  key={group.label}
                  className="grid grid-cols-1 gap-2 sm:grid-cols-[112px_minmax(0,1fr)] sm:gap-4"
                >
                  <dt className="pt-1.5 text-[12px] font-semibold tracking-[0.6px] text-white/40">
                    {group.label}
                  </dt>
                  <dd className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-[4px] border border-white/12 bg-white/[0.06] px-3 py-1.5 text-[13px] leading-none text-white/85"
                      >
                        {item}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
