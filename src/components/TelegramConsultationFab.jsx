import { TELEGRAM_LINK } from "../config/contact";
import FabLink from "./FabLink";

export default function TelegramConsultationFab() {
  return (
    <FabLink
      href={TELEGRAM_LINK}
      label={TELEGRAM_LINK ? "텔레그램 상담" : "텔레그램 상담 (준비 중)"}
      backgroundColor="#27a7e7"
      newWindow
    >
      <svg viewBox="0 0 24 24" className="size-8 md:size-9" aria-hidden="true" focusable="false">
        <path
          fill="#fff"
          d="M21.4 3.2c.5-.2 1 .3.9.8l-3.8 16.3c-.1.7-.9 1-1.5.6l-5.2-3.9-2.8 2.7c-.3.3-.8.1-.8-.3l.4-5.1 9.2-8.3c.2-.2 0-.4-.2-.3L6.4 12.9l-4.6-1.4c-.7-.2-.7-1.1-.1-1.4L21.4 3.2Z"
        />
      </svg>
    </FabLink>
  );
}
