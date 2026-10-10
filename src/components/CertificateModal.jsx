import { useEffect, useRef } from "react";

const MAX_HEIGHT =
  "calc(100dvh - 2rem - env(safe-area-inset-top, 0px) - env(safe-area-inset-bottom, 0px))";

export default function CertificateModal({ image, alt, title, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!image || !dialog) return;

    const previousFocus = document.activeElement;
    const previousBodyOverflow = document.body.style.overflow;
    const previousRootOverflow = document.documentElement.style.overflow;

    dialog.showModal();
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousRootOverflow;
      if (dialog.open) dialog.close();
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) {
        previousFocus.focus({ preventScroll: true });
      }
    };
  }, [image]);

  function dismiss() {
    if (dialogRef.current?.open) dialogRef.current.close();
    onClose();
  }

  if (!image) return null;

  return (
    <dialog
      ref={dialogRef}
      aria-label={title}
      onCancel={(event) => {
        event.preventDefault();
        dismiss();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) dismiss();
      }}
      className="fixed inset-0 m-auto h-fit max-h-[var(--certificate-max-height)] max-w-[560px] overflow-hidden rounded-[10px] border-0 bg-white p-0 text-navy shadow-2xl backdrop:bg-navy/80"
      style={{
        width:
          "calc(100vw - 2rem - env(safe-area-inset-left, 0px) - env(safe-area-inset-right, 0px))",
        "--certificate-max-height": MAX_HEIGHT,
      }}
    >
      <div className="flex max-h-[var(--certificate-max-height)] flex-col">
        <div className="flex shrink-0 items-center justify-between gap-4 border-b border-border-gray px-4 py-3 md:px-6">
          <h2 className="text-sm font-bold text-navy">{title}</h2>
          <button
            type="button"
            onClick={dismiss}
            aria-label="자격증 이미지 닫기"
            className="flex size-11 shrink-0 items-center justify-center rounded-full bg-bg-gray text-slate transition-colors duration-200 hover:bg-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
              className="size-5"
            >
              <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="min-h-0 overflow-y-auto overscroll-contain p-4 md:p-6">
          <img
            src={image}
            alt={alt}
            className="mx-auto block h-auto w-auto max-w-full rounded-[6px] object-contain"
          />
        </div>
      </div>
    </dialog>
  );
}
