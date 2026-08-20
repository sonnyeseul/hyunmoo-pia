import { useEffect } from "react";

/**
 * Lightbox for viewing a certificate/license image at full size.
 * Opened by clicking the "정식 사업자 등록 업체" / "PIA 공인 탐정사 인증" badges in the footer.
 */
export default function CertificateModal({ image, alt, title, onClose }) {
  useEffect(() => {
    if (!image) return;
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/80 p-6 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-[560px] flex-col items-center gap-4 rounded-[10px] bg-white p-4 shadow-2xl md:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="닫기"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-bg-gray text-slate transition-colors duration-200 hover:bg-navy hover:text-white"
        >
          ✕
        </button>
        <span className="mt-2 text-[14px] font-bold tracking-[1.2px] text-navy">{title}</span>
        <img
          src={image}
          alt={alt}
          className="max-h-[75vh] w-auto rounded-[6px] object-contain shadow-[0_1px_1px_rgba(0,0,0,0.1)]"
        />
      </div>
    </div>
  );
}
