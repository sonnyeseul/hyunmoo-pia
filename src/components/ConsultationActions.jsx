import TelegramConsultationFab from "./TelegramConsultationFab";
import SmsConsultationFab from "./SmsConsultationFab";
import KakaoConsultationFab from "./KakaoConsultationFab";

export default function ConsultationActions() {
  return (
    <nav
      aria-label="빠른 상담"
      className="fixed z-40 flex flex-col gap-3"
      style={{
        right: "calc(1rem + env(safe-area-inset-right, 0px))",
        bottom: "calc(1.25rem + env(safe-area-inset-bottom, 0px))",
      }}
    >
      <TelegramConsultationFab />
      <SmsConsultationFab />
      <KakaoConsultationFab />
    </nav>
  );
}
