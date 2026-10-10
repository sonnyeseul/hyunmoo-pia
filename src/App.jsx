import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import ServiceDetail from "./pages/ServiceDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ConsultationActions from "./components/ConsultationActions";
import PromotionPopup from "./components/PromotionPopup";
import { readHashRoute } from "./utils/navigation";

const POLICY_SECTIONS = {
  privacy: "privacy-section-1",
  scope: "privacy-section-2",
  storage: "privacy-section-3",
};

export default function App() {
  const [route, setRoute] = useState(() => readHashRoute());

  useEffect(() => {
    function handleHashChange() {
      setRoute(readHashRoute());
    }
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    // Wait for the destination page to mount, including direct bookmarked URLs.
    const frame = requestAnimationFrame(() => {
      if (route.path === "privacy-policy") {
        const sectionId = POLICY_SECTIONS[route.params.get("section")];
        if (sectionId) {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: "auto" });
          return;
        }
      } else if (route.path && route.path !== "service-detail") {
        document.getElementById(route.path)?.scrollIntoView({ behavior: "auto" });
        return;
      }
      window.scrollTo({ top: 0, behavior: "auto" });
    });
    return () => cancelAnimationFrame(frame);
  }, [route]);

  const isServiceDetail = route.path === "service-detail";
  const isPrivacyPolicy = route.path === "privacy-policy";
  const category = route.params.get("category") ?? "family";
  return (
    <>
      {isServiceDetail ? (
        <ServiceDetail key={category} category={category} />
      ) : isPrivacyPolicy ? (
        <PrivacyPolicy section={route.params.get("section")} />
      ) : (
        <HomePage />
      )}
      <ConsultationActions />
      {!isServiceDetail && !isPrivacyPolicy && <PromotionPopup />}
    </>
  );
}
