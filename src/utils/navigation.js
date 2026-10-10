// Queries select a service or policy section; the path remains the page/anchor.
export function readHashRoute(hash = window.location.hash) {
  const value = hash.replace(/^#/, "");
  const queryStart = value.indexOf("?");
  return {
    path: queryStart < 0 ? value : value.slice(0, queryStart),
    params: new URLSearchParams(queryStart < 0 ? "" : value.slice(queryStart + 1)),
  };
}

export function goTo(hash, query) {
  const path = hash.replace(/^#/, "");
  const search = query ? new URLSearchParams(query).toString() : "";
  const target = search ? `${path}?${search}` : path;
  if (window.location.hash.replace(/^#/, "") === target) {
    // Revisit the same target even when the browser does not emit hashchange.
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  } else {
    window.location.hash = target;
  }
}
