import { useEffect, useLayoutEffect, useRef, useState } from "react";

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
  const linkRefs = useRef([]);
  const clickLockRef = useRef(false);

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
    <header className="sticky top-0 z-50 w-full border-b border-[#bcc6cc] bg-[#f8f9fa]/95 backdrop-blur px-6 md:px-10">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-0 md:px-6">
        <a
          href="#top"
          className="flex shrink-0 items-baseline gap-1 text-2xl font-bold tracking-tight text-navy transition-opacity duration-200 hover:opacity-70"
        >
          <span>HYUNMOO&nbsp;PIA</span>
          <span className="text-[15px] font-semibold tracking-normal text-brand-blue">
            탐정
          </span>
        </a>

        <nav className="relative hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              ref={(el) => (linkRefs.current[i] = el)}
              href={link.href}
              onClick={() => handleNavClick(i)}
              className={`relative py-2 text-[16px] transition-colors duration-200 ${
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

        <div className="flex items-center gap-4">
          <a
            href="tel:010-3583-3542"
            className="hidden items-center justify-center rounded-md border border-[#bcc6cc] px-6 py-2 text-[16px] font-bold text-navy transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-sm sm:flex"
          >
            전화 상담
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center rounded-md bg-navy px-6 py-2 text-[16px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy/90 hover:shadow-md"
          >
            비공개 상담
          </a>
        </div>
      </div>
    </header>
  );
}
