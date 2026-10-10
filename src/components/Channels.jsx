import Icon from "./Icon";
import FadeUp from "./FadeUp";
import { KAKAO_LINK, PHONE_LINK, PHONE_NUMBER, SMS_LINK, TELEGRAM_LINK } from "../config/contact";

export default function Channels() {
  return (
    <section className="border-y border-white/10 bg-navy px-6 md:px-10 py-8">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-8 md:gap-12 px-0 md:px-6">
        <FadeUp
          as="a"
          href={PHONE_LINK}
          className="group flex items-center gap-3 text-[16px] text-white transition-colors duration-200 hover:text-brand-blue-light"
        >
          <Icon
            name="phone"
            className="h-[18px] w-[18px] transition-transform duration-200 group-hover:scale-125"
          />
          대표 전화: {PHONE_NUMBER}
        </FadeUp>
        <FadeUp
          as="a"
          delay={80}
          href={SMS_LINK}
          className="group flex items-center gap-3 text-[16px] text-white transition-colors duration-200 hover:text-brand-blue-light"
        >
          <Icon
            name="message"
            className="h-5 w-5 transition-transform duration-200 group-hover:scale-125"
          />
          상담 문의 안내
        </FadeUp>
        <FadeUp
          as="a"
          delay={160}
          href={KAKAO_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-1 text-[16px] text-white transition-colors duration-200 hover:text-brand-blue-light"
        >
          <Icon
            name="chat"
            className="h-5 w-5 transition-transform duration-200 group-hover:scale-125"
          />
          Kakaotalk
        </FadeUp>
        <FadeUp
          as={TELEGRAM_LINK ? "a" : "span"}
          delay={240}
          href={TELEGRAM_LINK ?? undefined}
          target={TELEGRAM_LINK ? "_blank" : undefined}
          rel={TELEGRAM_LINK ? "noopener noreferrer" : undefined}
          className="group flex items-center gap-1 text-[16px] text-white transition-colors duration-200 hover:text-brand-blue-light"
        >
          <Icon
            name="send"
            className="h-5 w-5 transition-transform duration-200 group-hover:scale-125"
          />
          Telegram
        </FadeUp>
      </div>
    </section>
  );
}
