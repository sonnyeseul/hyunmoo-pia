import { quoteIcon } from "../assets/figmaAssets";
import FadeUp from "./FadeUp";

const TOP_ROW = [
  {
    tag: "외도 전문",
    quote: `"배우자의 외도 정황을 알고도 물증이 없어 매일 밤잠을 설쳤습니다. 혼자 고민하다 상담을 받았는데, 전문가분들이 합법적인 선에서 명확하고 확실한 증거를 수집해 주신 덕분에 이혼 소송과 법적 대응을 완벽하게 마쳤습니다. 정말 감사합니다."`,
    name: "이ㅇㅇ 고객님",
  },
  {
    tag: "외도 전문",
    quote: `"확실한 불륜 증거가 없어서 혼자 진행하려던 이혼 소송이 막막하기만 했습니다. 다행히 이곳에서 결정적인 증거와 상간자 인적 사항까지 철저하게 조사해 주셔서 소송에서 매우 유리한 고지를 선점할 수 있었습니다. 큰 도움이 되었습니다."`,
    name: "최ㅇㅇ 고객님",
  },
  {
    tag: "외도 전문",
    quote: `"의심만 하다가 혼자 미행이라도 해볼까 했지만 들킬 뻔해서 절망적이었습니다. 역시 전문가에게 맡기니 미행 노출 위험 없이 깔끔하게 상간녀/상간남 증거를 수집해 주시더군요. 덕분에 정신적 고통에서 벗어나 새 출발을 준비합니다."`,
    name: "김ㅇㅇ 고객님",
  },
];

const BOTTOM_ROW = [
  {
    tag: "외도",
    quote: `"배우자의 바람 증거를 확실하게 확보해 주신 것은 물론이고, 진행 과정 내내 제 멘탈 관리와 철저한 비밀 보장까지 해주셔서 정말 안심하고 끝까지 믿고 맡길 수 있었습니다."`,
    name: "정ㅇㅇ 고객님",
  },
  {
    tag: "외도",
    quote: `"오랫동안 심증만 있고 물증이 없어 고통받던 배우자의 외도 사실을 신속하고 정확하게 밝혀주셨어요. 덕분에 의부증 오해를 벗고 억울함을 풀 수 있어서 속이 다 시원합니다."`,
    name: "박ㅇㅇ 고객님",
  },
  {
    tag: "사람 찾기",
    quote: `"수십 년 전 연락이 끊겨 생사조차 알 수 없던 은사님을 단 며칠 만에 찾아주셨습니다. 개인정보 유출 없이 안전하게 연락이 닿을 수 있게 도와주셔서 눈물이 날 만큼 감격했습니다."`,
    name: "윤ㅇㅇ 고객님",
  },
  {
    tag: "사람 찾기",
    quote: `"갑자기 가출한 뒤 연락을 두절한 가족의 행방을 전문적인 추적 기술로 안전하게 찾아주셨어요. 경찰 신고로도 진척이 없어 피가 말랐는데 덕분에 온 가족이 다시 모였습니다."`,
    name: "한ㅇㅇ 고객님",
  },
];

function TestimonialCard({ tag, quote, name, compact, delay = 0 }) {
  return (
    <FadeUp
      delay={delay}
      className="relative flex flex-1 min-w-[260px] flex-col gap-4 rounded-[10px] border border-[#bcc6cc] bg-white p-8 shadow-[0_1px_1px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-navy/10"
    >
      <span className="w-fit rounded-sm bg-brand-blue/10 px-2 py-0.5 text-[10px] font-bold text-brand-blue">
        {tag}
      </span>
      <p className={`${compact ? "text-[13px]" : "text-[16px]"} leading-relaxed text-slate`}>
        {quote}
      </p>
      <span className={`${compact ? "text-[11px]" : "text-[12px] tracking-[1.2px]"} font-bold text-navy`}>
        {name}
      </span>
      {!compact && (
        <img src={quoteIcon} alt="" className="absolute right-6 top-6 h-[18px] w-[25.5px]" />
      )}
    </FadeUp>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-bg-gray-2 px-6 md:px-10 py-24">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-0 md:px-6">
        <FadeUp className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-[32px] md:text-[48px] font-bold tracking-[-0.96px] text-navy">
            실제 의뢰 고객 후기
          </h2>
          <p className="text-[16px] md:text-[18px] text-slate">
            <span className="font-bold">현무 PIA</span>와 함께 문제를 해결한 분들의 실제
            이야기입니다.
          </p>
        </FadeUp>

        <div className="flex flex-col lg:flex-row gap-8">
          {TOP_ROW.map((t, i) => (
            <TestimonialCard key={t.name} {...t} delay={i * 100} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BOTTOM_ROW.map((t, i) => (
            <TestimonialCard key={t.name} {...t} compact delay={(i % 4) * 80} />
          ))}
        </div>

        <p className="text-center text-[13px] italic text-[#44474d]">
          상기 후기는 고객의 동의를 얻어 익명화 및 각색된 내용입니다.
        </p>
      </div>
    </section>
  );
}
