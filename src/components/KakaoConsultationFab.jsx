import { KAKAO_LINK } from "../config/contact";
import FabLink from "./FabLink";

export default function KakaoConsultationFab() {
  return (
    <FabLink
      href={KAKAO_LINK}
      label="카카오톡 상담"
      backgroundColor="#fee500"
      newWindow
    >
      <svg viewBox="0 0 64 64" className="size-12 md:size-14" aria-hidden="true" focusable="false">
        <path
          fill="#3c1e1e"
          d="M32 10c-13.8 0-25 8.7-25 19.4 0 6.8 4.5 12.8 11.4 16.3L15.7 55l10.4-6.7c1.9.4 3.9.6 5.9.6 13.8 0 25-8.7 25-19.5S45.8 10 32 10Z"
        />
        <text x="32" y="35" textAnchor="middle" fill="#fee500" fontFamily="Arial, sans-serif" fontSize="15" fontWeight="800">
          TALK
        </text>
      </svg>
    </FabLink>
  );
}
