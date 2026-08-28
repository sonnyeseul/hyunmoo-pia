import { caseImages } from "../assets/site";
import FadeUp from "./FadeUp";

const CASES = [
  {
    img: caseImages.family,
    title: "가정 문제",
    desc: "감정이 격해진 상태에서 사실관계 확인 및 증거 정리가 필요한 경우.",
  },
  {
    img: caseImages.corporate,
    title: "기업 비위",
    desc: "내부 횡령 의심이나 중요한 거래 전 상대방의 평판 및 사실 검증.",
  },
  {
    img: caseImages.safety,
    title: "안전 위협",
    desc: "협박·스토킹 또는 불법촬영·도청이 의심되어 정밀 점검이 필요한 경우.",
  },
  {
    img: caseImages.locate,
    title: "소재 파악",
    desc: "가족이나 정당한 채무 관계자의 연락 두절로 인한 위치 확인 의뢰.",
  },
];

export default function CaseExamples() {
  return (
    <section className="bg-white px-6 md:px-10 py-24">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-16 px-0 md:px-6">
        <FadeUp as="h2" className="text-[28px] md:text-[32px] font-semibold text-navy">의뢰 상황 예시</FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CASES.map((c, i) => (
            <FadeUp key={c.title} delay={i * 100} className="group flex flex-1 flex-col gap-2">
              <div className="h-[192px] w-full overflow-hidden rounded-[10px] shadow-none transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-navy/10">
                <img
                  src={c.img}
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="pt-2 text-[24px] font-semibold text-slate transition-colors duration-300 group-hover:text-brand-blue">
                {c.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-[#44474d]">{c.desc}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
