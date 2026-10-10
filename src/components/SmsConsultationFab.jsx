import { SMS_LINK } from "../config/contact";
import FabLink from "./FabLink";

export default function SmsConsultationFab() {
  return (
    <FabLink href={SMS_LINK} label="상담 문의 안내" backgroundColor="#52677f">
      <svg
        viewBox="0 0 24 24"
        className="size-8 text-white md:size-9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M5 3.5h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9l-5 3v-3a2 2 0 0 1-1-1.7V5.5a2 2 0 0 1 2-2Z" />
        <path d="M7.5 8h9M7.5 12h6.5" />
      </svg>
    </FabLink>
  );
}
