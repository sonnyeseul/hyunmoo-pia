import { useEffect, useLayoutEffect, useRef, useState } from "react";
import BrandWordmark from "./BrandWordmark";
import { PHONE_LINK } from "../config/contact";

const NAV_LINKS = [
  { label: "서비스 분야", href: "#services" },
  { label: "현무 PIA 소개", href: "#about" },
  { label: "자격 및 인증", href: "#qualifications" },
  { label: "업무 절차", href: "#principles" },
  { label: "비밀보장", href: "#confidentiality" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const linkRefs = useRef([]);
  const clickLockRef = useRef(false);
  const mobileSummaryRef = useRef(null);

  // Measure & move the sliding underline under the active tab.
  useLayoutEffect(() => {
    const el = linkRefs.current[activeIndex];
    if (el) {
      setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
    }
  }, [activeIndex]);

  useEffect(() => {
    function reMeasure() {
      const el = linkRefs.current[activeIndex];
      if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
    }
    window.addEventListener("resize", reMeasure);
    return () => window.removeEventListener("resize", reMeasure);
  }, [activeIndex]);

  // Scrollspy: whichever section is crossing the "active band" near the top
  // of the viewport becomes the active tab, and the underline follows it.
  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.querySelector(link.href)).filter(
      Boolean
    );

    const observer = new IntersectionObserver(
      (entries) => {
        if (clickLockRef.current) return; // don't fight a just-clicked tab
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sections.indexOf(entry.target);
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      {
        root: null,
        rootMargin: "-96px 0px -65% 0px",
        threshold: 0,
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    function handleKeyDown(event) {
      if (event.key !== "Escape" || document.querySelector("dialog[open]")) return;
      event.preventDefault();
      setMobileMenuOpen(false);
      mobileSummaryRef.current?.focus();
    }

    function handleResize() {
      if (window.innerWidth >= 1280) setMobileMenuOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileMenuOpen]);

  function handleNavClick(index) {
    setActiveIndex(index);
    // Briefly ignore scrollspy updates so the underline doesn't flicker
    // back and forth while the smooth scroll animation is in flight.
    clickLockRef.current = true;
    window.setTimeout(() => {
      clickLockRef.current = false;
    }, 700);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#bcc6cc] bg-[#f8f9fa]/95 px-4 backdrop-blur sm:px-6 md:px-10">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-3 py-3 sm:min-h-24 sm:flex-row sm:justify-between sm:gap-4 sm:py-0">
        <a
          href="#top"
          onClick={() => setMobileMenuOpen(false)}
          className="flex shrink-0 items-center transition-opacity duration-200 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
        >
          <BrandWordmark />
        </a>

        <nav aria-label="주요 메뉴" className="relative hidden shrink-0 items-center gap-4 xl:flex">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              ref={(el) => (linkRefs.current[i] = el)}
              href={link.href}
              onClick={() => handleNavClick(i)}
              className={`relative whitespace-nowrap py-2 text-sm transition-colors duration-200 ${
                activeIndex === i
                  ? "font-bold text-brand-blue"
                  : "font-normal text-slate hover:text-brand-blue"
              }`}
            >
              {link.label}
            </a>
          ))}
          <span
            className="pointer-events-none absolute bottom-0 h-[2px] rounded-full bg-brand-blue transition-all duration-300 ease-out"
            style={{ left: indicator.left, width: indicator.width }}
          />
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href={PHONE_LINK}
            onClick={() => setMobileMenuOpen(false)}
            className="flex min-h-10 items-center justify-center whitespace-nowrap rounded-md border border-[#bcc6cc] px-4 py-2 text-sm font-bold text-navy transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-sm sm:text-base"
          >
            전화 상담
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex min-h-10 items-center justify-center whitespace-nowrap rounded-md bg-navy px-4 py-2 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy/90 hover:shadow-md sm:text-base"
          >
            비공개 상담
          </a>
          <details
            open={mobileMenuOpen}
            onToggle={(event) => setMobileMenuOpen(event.currentTarget.open)}
            className="xl:hidden"
          >
            <summary
              ref={mobileSummaryRef}
              aria-label={mobileMenuOpen ? "주요 메뉴 닫기" : "주요 메뉴 열기"}
              aria-controls="mobile-navigation"
              className="flex size-11 items-center justify-center rounded-md border border-border-gray bg-white text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
                className="size-5"
              >
                <path
                  d={mobileMenuOpen ? "m6 6 12 12M18 6 6 18" : "M4 6h16M4 12h16M4 18h16"}
                  strokeLinecap="round"
                />
              </svg>
            </summary>
            <nav
              id="mobile-navigation"
              aria-label="모바일 주요 메뉴"
              className="absolute inset-x-0 top-full grid grid-cols-2 gap-1 border-b border-border-gray bg-bg-gray p-4 shadow-lg sm:px-6 md:px-10"
            >
              {NAV_LINKS.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    handleNavClick(i);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex min-h-11 items-center rounded-md px-3 py-2 text-sm focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-blue ${
                    activeIndex === i
                      ? "bg-brand-blue/10 font-bold text-brand-blue"
                      : "text-slate hover:bg-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
