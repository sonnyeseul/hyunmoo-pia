import { confidentialityIcon } from "../assets/figmaAssets";
import FadeUp from "./FadeUp";

export default function Confidentiality() {
  return (
    <section id="confidentiality" className="scroll-mt-20 bg-white px-6 md:px-10 pb-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="group flex flex-col md:flex-row items-start gap-8 md:gap-12 rounded-[10px] bg-bg-gray p-8 md:p-12 transition-all duration-300 hover:shadow-xl hover:shadow-navy/5">
          <FadeUp className="flex w-full md:w-[336px] flex-col gap-6">
            <img
              src={confidentialityIcon}
              alt=""
              className="h-12 w-10 transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-[24px] font-semibold text-slate">철저한 보안 운영 방식</h3>
          </FadeUp>
          <FadeUp delay={120} className="flex-1">
            <p className="text-[16px] leading-[1.6] text-slate">
              비밀보장은 단순한 문구가 아니라 실제 시스템으로 구현됩니다. 모든 상담 및 사건
              기록은 분리 관리되며, 업무 담당 범위에 따라 정보 접근이 제한됩니다. 업무 종료 후
              모든 전자자료 및 인쇄자료는 고객의 요청에 따라 폐기 또는 반환되며, ISO 27001
              기준에 준하는 엄격한 파기 절차를 준수합니다.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
