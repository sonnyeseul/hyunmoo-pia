import { useEffect, useRef, useState } from "react";
import { promotionImage } from "../assets/site";
import { KAKAO_LINK } from "../config/contact";
import {
  hidePromotionForToday,
  markPromotionShown,
  shouldShowPromotion,
} from "../utils/promotionVisibility";

const MAX_HEIGHT =
  "calc(100dvh - 2rem - env(safe-area-inset-top, 0px) - env(safe-area-inset-bottom, 0px))";

function restoreFocus(previousFocus) {
  if (
    previousFocus instanceof HTMLElement &&
    previousFocus !== document.body &&
    previousFocus.isConnected
  ) {
    previousFocus.focus({ preventScroll: true });
    return;
  }

  // Automatic entry often starts with body focused; return to the home link.
  document.querySelector("header a, header button")?.focus({ preventScroll: true });
}

export default function PromotionPopup({ consultationHref = KAKAO_LINK }) {
  const dialogRef = useRef(null);
  // Keep the initial eligibility decision during StrictMode's effect replay.
  const [visible, setVisible] = useState(shouldShowPromotion);
  const opensNewTab = /^https?:\/\//.test(consultationHref);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!visible || !dialog) return;

    const previousFocus = document.activeElement;
    const previousBodyOverflow = document.body.style.overflow;
    const previousRootOverflow = document.documentElement.style.overflow;

    try {
      if (!dialog.open) dialog.showModal();
    } catch {
      setVisible(false);
      return;
    }

    markPromotionShown();
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousRootOverflow;
      if (dialog.open) dialog.close();
      restoreFocus(previousFocus);
    };
  }, [visible]);

  function dismiss() {
    // Only user actions update visibility. Native close events from effect
    // cleanup must not dismiss the replayed dialog in development StrictMode.
    if (dialogRef.current?.open) dialogRef.current.close();
    setVisible(false);
  }

  function handleCancel(event) {
    event.preventDefault();
    dismiss();
  }

  function handleHideToday() {
    hidePromotionForToday();
    dismiss();
  }

  if (!visible) return null;

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="promotion-dialog-title"
      aria-describedby="promotion-discount-note"
      onCancel={handleCancel}
      className="fixed inset-0 m-auto h-fit max-h-[var(--promotion-max-height)] max-w-md overflow-hidden rounded-xl border-0 bg-white p-0 text-navy shadow-2xl backdrop:bg-black/70"
      style={{
        width:
          "calc(100vw - 2rem - env(safe-area-inset-left, 0px) - env(safe-area-inset-right, 0px))",
        "--promotion-max-height": MAX_HEIGHT,
      }}
    >
      <h2 id="promotion-dialog-title" className="sr-only">
        30% 할인 이벤트
      </h2>
      <button
        type="button"
        onClick={dismiss}
        aria-label="이벤트 팝업 닫기"
        className="absolute right-3 top-3 z-10 flex size-11 items-center justify-center rounded-full bg-navy/90 text-white shadow-sm transition-opacity duration-150 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
          className="size-5"
        >
          <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
        </svg>
      </button>
      <div
        className="max-h-[var(--promotion-max-height)] overflow-y-auto overscroll-contain"
        data-promotion-scroll
      >
        <div className="relative" data-promotion-image-frame>
          <img
            src={promotionImage}
            width="1122"
            height="1402"
            alt="현무 민간조사 탐정사무소 고객 부담 완화 이벤트. 필요한 도움, 더 부담 없이. 고객님의 부담을 덜고자 30% 할인 혜택을 준비했습니다."
            className="block h-auto w-full"
          />
          <div className="absolute inset-x-0 bottom-0 flex h-[14.194%] items-center justify-center px-6">
            <a
              href={consultationHref}
              target={opensNewTab ? "_blank" : undefined}
              rel={opensNewTab ? "noopener noreferrer" : undefined}
              onClick={dismiss}
              className="inline-flex h-12 w-full max-w-xs items-center justify-center rounded-lg bg-white px-6 text-base font-semibold text-navy shadow-sm transition-opacity duration-150 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              상담 문의하기
            </a>
          </div>
        </div>
        <p
          id="promotion-discount-note"
          className="border-t border-border-gray px-5 py-3 text-xs leading-relaxed text-slate"
        >
          초기 상담은 무료입니다. 할인 적용 범위와 견적은 상담 시 안내드립니다.
        </p>
        <div className="flex divide-x divide-border-gray border-t border-border-gray bg-white">
          <button
            type="button"
            onClick={handleHideToday}
            className="min-h-11 flex-1 px-4 py-3 text-sm text-slate transition-colors duration-150 hover:bg-bg-gray focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-brand-blue"
          >
            오늘은 그만 보기
          </button>
          <button
            type="button"
            onClick={dismiss}
            className="min-h-11 flex-1 px-4 py-3 text-sm text-slate transition-colors duration-150 hover:bg-bg-gray focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-brand-blue"
          >
            닫기
          </button>
        </div>
      </div>
    </dialog>
  );
}
