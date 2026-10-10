import directorPhoto from "../assets/director/son-sung-oh.jpg";
import directorSignature from "../assets/director/son-sung-oh-signature.png";
import FadeUp from "./FadeUp";

const AFFILIATIONS = ["한국공인탐정협회 소속", "한국심리상담협회 등록"];

const CREDENTIALS = [
  "PIA 탐정사",
  "심리상담사 1급",
  "환경관리전문가 1급",
  "디지털자산관리사 1급",
];

const ATHLETIC_EXPERIENCE = [
  "태권도 4단",
  "우슈 1단",
  "검도 1단",
  "유도 1단",
  "경호 경력 (多數)",
];

export default function DirectorMessage() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-20 bg-navy px-6 py-20 font-sans md:px-10 md:py-24"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:gap-20">
        <FadeUp as="figure" className="mx-auto w-full max-w-[360px] lg:mx-0">
          <img
            src={directorPhoto}
            alt="현무민간조사 탐정사무소 대표 손성오"
            className="aspect-[732/998] w-full rounded-lg object-cover"
            loading="lazy"
            decoding="async"
          />
          <figcaption className="mt-6 border-t border-white/15 pt-5">
            <p className="text-sm text-white/60">대표이사 · 수석 조사관</p>
            <div className="mt-2 flex items-center gap-6">
              <p className="text-2xl font-semibold text-white">손성오</p>
              <img
                src={directorSignature}
                alt=""
                width="2172"
                height="724"
                className="h-12 w-36 shrink-0 object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </figcaption>
        </FadeUp>

        <div className="min-w-0">
          <FadeUp as="p" delay={60} className="text-sm font-medium text-white/60">
            현무 PIA 소개
          </FadeUp>
          <FadeUp
            as="h2"
            id="about-heading"
            delay={100}
            className="mt-4 break-keep text-balance text-2xl font-semibold leading-snug text-white sm:text-3xl md:text-4xl"
          >
            {"의뢰인의 이야기를 듣고, "}
            <br />
            확인한 사실로 답하겠습니다.
          </FadeUp>

          <FadeUp delay={140} className="mt-6 space-y-4 break-keep text-base leading-relaxed text-white/70 md:text-lg">
            <p className="text-pretty">
              안녕하세요. 현무민간조사 탐정사무소 대표 손성오입니다.
              혼자 해결하기 어려운 문제일수록 충분한 상담이 먼저라고 생각합니다.
              의뢰인의 상황을 차분히 듣고, 필요한 조사와 진행 방법을 함께 정리하겠습니다.
            </p>
            <p className="text-pretty">
              확인한 사실을 명확하게 전달하고, 상담부터 결과 전달까지 의뢰인의 정보와
              비밀을 소중히 다루겠습니다. 앞으로의 판단에 도움이 되는 조사를 약속드립니다.
            </p>
          </FadeUp>

          <FadeUp delay={180} className="mt-10 border-t border-white/15 pt-6">
            <h3 className="text-balance text-lg font-semibold text-white">보유 자격 및 소속</h3>
            <div className="mt-5 grid gap-6 sm:grid-cols-2 sm:gap-8 xl:grid-cols-3">
              <div>
                <h4 className="text-balance text-sm font-medium text-white/50">소속 · 등록</h4>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-white/80">
                  {AFFILIATIONS.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="text-balance text-sm font-medium text-white/50">전문 자격</h4>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-white/80">
                  {CREDENTIALS.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="text-balance text-sm font-medium text-white/50">운동 경력</h4>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-white/80">
                  {ATHLETIC_EXPERIENCE.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
