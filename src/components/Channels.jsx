import { channelIcons } from "../assets/figmaAssets";
import FadeUp from "./FadeUp";

// NOTE: Only a KakaoTalk link was provided. Swap TELEGRAM_LINK for the real
// Telegram invite/username link once it's available — it currently points
// nowhere (href="#") so the button doesn't look broken in the meantime.
const KAKAO_LINK = "https://invite.kakao.com/tc/tNPLfOrlna";
const TELEGRAM_LINK = "#";

export default function Channels() {
  return (
    <section className="border-y border-white/10 bg-navy px-6 md:px-10 py-8">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-8 md:gap-12 px-0 md:px-6">
        <FadeUp
          as="a"
          href="tel:010-3583-3542"
          className="group flex items-center gap-3 text-[16px] text-white transition-colors duration-200 hover:text-brand-blue-light"
        >
          <img
            src={channelIcons.phone}
            alt=""
            className="h-[18px] w-[18px] transition-transform duration-200 group-hover:scale-125"
          />
          대표 전화: 010-3583-3542
        </FadeUp>
        <FadeUp
          as="a"
          delay={80}
          href="sms:010-3583-3542"
          className="group flex items-center gap-3 text-[16px] text-white transition-colors duration-200 hover:text-brand-blue-light"
        >
          <img
            src={channelIcons.sms}
            alt=""
            className="h-5 w-5 transition-transform duration-200 group-hover:scale-125"
          />
          문자 상담: 010-3583-3542
        </FadeUp>
        <FadeUp
          as="a"
          delay={160}
          href={KAKAO_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-1 text-[16px] text-white transition-colors duration-200 hover:text-brand-blue-light"
        >
          <img
            src={channelIcons.kakao}
            alt=""
            className="h-5 w-5 transition-transform duration-200 group-hover:scale-125"
          />
          Kakaotalk
        </FadeUp>
        <FadeUp
          as="a"
          delay={240}
          href={TELEGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-1 text-[16px] text-white transition-colors duration-200 hover:text-brand-blue-light"
        >
          <img
            src={channelIcons.telegram}
            alt=""
            className="h-4 w-[19px] transition-transform duration-200 group-hover:scale-125"
          />
          Telegram
        </FadeUp>
      </div>
    </section>
  );
}
