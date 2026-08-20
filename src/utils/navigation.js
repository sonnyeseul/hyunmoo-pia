/**
 * Tiny hash-based "router" — no external routing library.
 *
 * Section anchors on the home page (e.g. "#services", "#contact") keep
 * working exactly as before. A small set of reserved hash values (see
 * DETAIL_PAGE_HASHES in App.jsx) instead render a full detail page
 * ("service-detail", "privacy-policy"). goTo() below is how any component
 * — a service card, a footer link — triggers that navigation.
 */
export function goTo(hash) {
  if (window.location.hash === `#${hash}`) {
    // Same target already in the URL (e.g. clicking the card twice) —
    // hashchange won't fire on its own, so nudge it manually.
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  } else {
    window.location.hash = hash;
  }
}
