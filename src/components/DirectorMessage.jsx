import directorPhoto from "../assets/director/son-sung-oh.jpg";
import FadeUp from "./FadeUp";

const CREDENTIALS = [
  "한국공인탐정협회 소속",
  "PIA 탐정사 자격증 보유",
  "한국심리상담협회 등록",
  "심리상담사 1급",
  "드론 항공촬영사",
  "드론 교육지도사",
  "환경관리전문가 1급",
  "디지털자산관리사 1급",
  "산림자원관리사 1급",
];

export default function DirectorMessage() {
  return (
    <section id="about" className="scroll-mt-20 bg-navy px-6 md:px-10 py-24 font-sans">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-14 px-0 md:px-6 lg:grid-cols-[minmax(0,400px)_minmax(0,1fr)] lg:gap-20 lg:items-start">
        {/* Portrait */}
        <FadeUp className="w-full max-w-[400px] mx-auto lg:mx-0 lg:sticky lg:top-28">
          <img
            src={directorPhoto}
            alt="현무 PIA 대표이사 및 수석 조사관 손성오"
            className="aspect-[732/998] w-full rounded-[10px] object-cover"
          />
        </FadeUp>

        <div className="flex flex-col">
          <FadeUp
            delay={60}
            as="p"
            className="text-[12px] font-medium tracking-[2px] text-white/40"
          >
            대표 인사말
          </FadeUp>

          <FadeUp
            delay={100}
            as="h3"
            className="mt-6 whitespace-pre-line text-[28px] md:text-[36px] font-semibold leading-[1.35] tracking-[-0.6px] text-white"
          >
            {`의뢰인의 정보와
다음 판단을 함께 지키겠습니다.`}
          </FadeUp>

          <FadeUp
            delay={140}
            as="p"
            className="mt-7 max-w-[620px] text-[16px] md:text-[17px] leading-[1.9] text-white/60"
          >
            말하기 어려운 문제를 맡긴다는 것은 단순한 업무 의뢰가 아니라, 자신의 삶과 자산에 관한
            중요한 정보를 맡기는 일입니다. 현무 PIA는 의뢰인의 상황을 차분히 정리하고, 합리적인
            판단을 내릴 수 있는 사실만을 전달하겠습니다.
          </FadeUp>

          {/* Signature */}
          <FadeUp delay={180} className="mt-12 flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <span className="text-[24px] font-semibold leading-none text-white">손성오</span>
            <span className="text-[12px] tracking-[2px] text-white/35">SON SUNG OH</span>
            <span className="text-[13px] text-white/50">대표이사 · 수석 조사관</span>
          </FadeUp>

          {/* Credentials */}
          <FadeUp delay={220} className="mt-14">
            <p className="text-[12px] font-medium tracking-[2px] text-white/40">보유 자격 및 소속</p>
            <ul className="mt-5 grid grid-cols-1 gap-x-12 border-t border-white/10 sm:grid-cols-2">
              {CREDENTIALS.map((item) => (
                <li
                  key={item}
                  className="border-b border-white/10 py-3.5 text-[14px] leading-snug text-white/70"
                >
                  {item}
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
