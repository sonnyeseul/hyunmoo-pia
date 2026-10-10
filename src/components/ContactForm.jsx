import Icon from "./Icon";
import FadeUp from "./FadeUp";
import { KAKAO_LINK, PHONE_LINK, PHONE_NUMBER } from "../config/contact";

export default function ContactForm() {
  return (
    <section id="contact" className="scroll-mt-28 bg-white px-6 py-24 md:px-10">
      <div className="mx-auto max-w-3xl">
        <FadeUp className="flex flex-col items-center gap-8 rounded-lg border border-border-gray bg-white p-6 text-center shadow-sm sm:p-8 md:p-12">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-balance break-keep text-3xl font-semibold text-navy">카카오톡으로 상담하세요</h2>
            <p className="text-pretty break-keep text-base leading-relaxed text-slate">상담하고 싶은 내용을 카카오톡으로 남겨 주세요.<br className="hidden sm:block" /> 담당자가 내용을 확인한 뒤 상담을 안내드립니다.</p>
          </div>
          <div className="flex w-full flex-col items-center gap-3">
            <a href={KAKAO_LINK} target="_blank" rel="noopener noreferrer" aria-label="카카오톡 상담하기 (새 창)" className="flex min-h-12 w-full items-center justify-center gap-3 rounded-md bg-[#FEE500] px-6 py-4 text-base font-semibold text-navy hover:bg-[#FEE500]/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue sm:w-auto sm:min-w-64">
              <Icon name="chat" className="size-5 shrink-0" />
              카카오톡 상담하기
            </a>
            <p className="text-sm text-slate">카카오톡 상담창이 새 창으로 열립니다.</p>
          </div>
          <div className="flex w-full flex-col items-center gap-2 border-t border-border-gray pt-6 text-sm text-slate">
            <a href={PHONE_LINK} className="inline-flex min-h-11 items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue">전화 상담 <span className="font-semibold tabular-nums text-navy">{PHONE_NUMBER}</span></a>
            <a href="#privacy-policy" className="inline-flex min-h-11 items-center font-semibold text-brand-blue underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue">개인정보 처리 안내</a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
