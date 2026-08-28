import { heroImage } from "../assets/site";
import FadeUp from "./FadeUp";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex items-center justify-center overflow-hidden px-6 md:px-10 py-24 md:py-[120px] min-h-[600px] md:min-h-[819px]"
    >
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 overflow-hidden md:block">
        <img
          src={heroImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col px-0 md:px-6">
        <div className="flex w-full max-w-[768px] flex-col items-start gap-6">
          <FadeUp>
            <span className="rounded-sm bg-navy px-4 py-1 text-[12px] font-bold tracking-[1px] text-white">
              부산 기반 · 전국 출장 · 24시간 프라이빗 상담
            </span>
          </FadeUp>

          <FadeUp delay={100} as="h1" className="text-[28px] md:text-[40px] font-bold leading-[1.3] tracking-[-0.5px] text-navy">
            단 하나의 결정적 증거가 
            <br />
            백 마디 변론보다 
            <br />
            강력한 설득력을 갖는다
          </FadeUp>

          <FadeUp delay={200} as="p" className="max-w-[576px] text-[16px] md:text-[18px] leading-[1.6] text-slate">
            현무 PIA 민간조사 탐정사무소는 개인과 기업의 민감한 문제를 검토하고, 합법적으로
            가능한 조사 범위와 현실적인 진행 방향을 안내합니다.
          </FadeUp>

          <FadeUp delay={300} className="flex flex-wrap gap-4 pt-2">
            <a
              href="#contact"
              className="flex items-center justify-center rounded-md bg-navy px-10 py-4 text-[18px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy/90 hover:shadow-lg active:translate-y-0"
            >
              비공개 무료상담
            </a>
            <a
              href="tel:010-3583-3542"
              className="flex items-center justify-center rounded-md border border-navy px-10 py-4 text-[18px] font-bold text-navy transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy/5 hover:shadow-md active:translate-y-0"
            >
              전화 상담
            </a>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
