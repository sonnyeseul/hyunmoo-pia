export const PROMOTION_CAMPAIGN_ID = "30-percent-v1";
export const PROMOTION_SESSION_KEY = `hyunmoo-pia:promotion:${PROMOTION_CAMPAIGN_ID}:seen`;
export const PROMOTION_TODAY_KEY = `hyunmoo-pia:promotion:${PROMOTION_CAMPAIGN_ID}:hidden-date`;

// Persists across route changes even when browser storage is unavailable.
let seenInThisApp = false;

export function getLocalDateString(date = new Date()) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

export function shouldShowPromotion() {
  if (seenInThisApp || typeof window === "undefined") return false;

  try {
    if (window.sessionStorage.getItem(PROMOTION_SESSION_KEY) === "1") return false;
  } catch {
    // A blocked storage API does not prevent showing the promotion once.
  }

  try {
    if (window.localStorage.getItem(PROMOTION_TODAY_KEY) === getLocalDateString()) {
      return false;
    }
  } catch {
    // The app-memory flag still prevents repeat popups during this visit.
  }

  return true;
}

export function markPromotionShown() {
  seenInThisApp = true;
  try {
    window.sessionStorage.setItem(PROMOTION_SESSION_KEY, "1");
  } catch {
    // The memory flag is sufficient for navigation within the running app.
  }
}

export function hidePromotionForToday() {
  markPromotionShown();
  try {
    window.localStorage.setItem(PROMOTION_TODAY_KEY, getLocalDateString());
  } catch {
    // The promotion remains hidden in the running app if storage is blocked.
  }
}
