import { problemIconFamily, problemIconCorporate, problemIconSafety } from "../assets/figmaAssets";
import FadeUp from "./FadeUp";

const PROBLEMS = [
  {
    icon: problemIconFamily,
    title: "개인·가정 문제",
    desc: "배우자 관련 사실관계 확인 및 민감한 가사 분쟁에 필요한 증거 수집.",
    tags: ["양육권", "가사분쟁"],
  },
  {
    icon: problemIconCorporate,
    title: "기업·금융 보안",
    desc: "기업 내부 비위, 거래처 검증 및 디지털 자산 피해 조사.",
    tags: [],
  },
  {
    icon: problemIconSafety,
    title: "안전 및 소재 파악",
    desc: "실종·가출 소재 파악, 신변보호 및 불법 탐지 장비 점검.",
    tags: [],
  },
];

export default function ProblemSelector() {
  return (
    <section className="bg-bg-gray px-6 md:px-10 py-24">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-16 px-0 md:px-6">
        <FadeUp className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-[28px] md:text-[32px] font-bold text-navy">
            어떤 문제로 도움이 필요하신가요?
          </h2>
          <p className="text-[16px] text-slate">
            최고의 전문성을 갖춘{" "}
            <span className="font-bold text-brand-blue-light">현무 PIA 탐정사무소</span>는 각
            사건의 특성에 맞는 대응 전략을 제공합니다.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROBLEMS.map((p, i) => (
            <FadeUp
              key={p.title}
              delay={i * 100}
              className="group flex flex-col items-start gap-4 rounded-[10px] border border-[#bcc6cc] bg-white p-10 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/40 hover:shadow-xl hover:shadow-navy/5"
            >
              <img
                src={p.icon}
                alt=""
                className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
              />
              <h3 className="text-[24px] font-semibold text-slate transition-colors duration-300 group-hover:text-brand-blue">
                {p.title}
              </h3>
              <p className="text-[16px] leading-relaxed text-[#44474d]">{p.desc}</p>
              {p.tags.length > 0 && (
                <div className="flex gap-4 pt-4">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-[2px] bg-[#d9d9d9] px-3 py-1 text-[12px] font-bold tracking-[1.2px] text-slate"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
