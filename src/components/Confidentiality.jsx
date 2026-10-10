import Icon from "./Icon";
import FadeUp from "./FadeUp";

export default function Confidentiality() {
  return (
    <section id="confidentiality" className="scroll-mt-20 bg-white px-6 md:px-10 pb-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="group flex flex-col md:flex-row items-start gap-8 md:gap-12 rounded-[10px] bg-bg-gray p-8 md:p-12 transition-all duration-300 hover:shadow-xl hover:shadow-navy/5">
          <FadeUp className="flex w-full md:w-[336px] flex-col gap-6">
            <Icon
              name="shield-lock"
              className="h-11 w-11 shrink-0 text-brand-blue transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-[24px] font-semibold text-slate">상담 정보와 자료 관리</h3>
          </FadeUp>
          <FadeUp delay={120} className="flex-1">
            <p className="text-[16px] leading-[1.6] text-slate">
              상담과 조사에 필요한 정보만 확인하고, 담당 업무에 필요한 범위에서 취급합니다.
              자료는 목적 달성 후 고객과 협의한 방식으로 반환하거나 폐기하며,
              필요한 보관 항목과 기간은 계약 시 안내합니다. 법령에 따라 보관이 필요한 자료는
              별도로 관리합니다.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
