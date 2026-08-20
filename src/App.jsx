import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import ServiceDetail from "./pages/ServiceDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";

// Tiny hash-based "router" — no external routing library needed.
// Section anchors on the home page (e.g. "#services") are left completely
// alone; only these two reserved hash values switch to a full detail page.
const DETAIL_PAGES = {
  "service-detail": ServiceDetail,
  "privacy-policy": PrivacyPolicy,
};

function readHash() {
  return window.location.hash.replace(/^#/, "");
}

export default function App() {
  const [hash, setHash] = useState(readHash);

  useEffect(() => {
    function handleHashChange() {
      const next = readHash();
      setHash(next);
      if (DETAIL_PAGES[next]) {
        window.scrollTo({ top: 0, behavior: "auto" });
      } else if (next) {
        // Not a detail page — it's a home-page section anchor. The target
        // element may not exist yet (e.g. we were just on a detail page),
        // so wait a tick for HomePage to mount, then scroll to it.
        requestAnimationFrame(() => {
          document.getElementById(next)?.scrollIntoView();
        });
      }
    }
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const DetailPage = DETAIL_PAGES[hash];
  if (DetailPage) return <DetailPage />;
  return <HomePage />;
}
