import { useState } from "react";
import { businessRegistrationImage, piaLicenseImage } from "../assets/certificates";
import CertificateModal from "./CertificateModal";
import { goTo } from "../utils/navigation";
import BrandWordmark from "./BrandWordmark";
import { PHONE_LINK, PHONE_NUMBER } from "../config/contact";

const SITEMAP_LINKS = [
  { label: "서비스 분야", href: "#services" },
  { label: "자격 및 인증", href: "#qualifications" },
  { label: "업무 절차", href: "#principles" },
];

const LEGAL_LINKS = [
  { label: "개인정보처리방침", href: "privacy-policy" },
  { label: "업무 범위 안내", href: "privacy-policy?section=scope" },
  { label: "자료 보관·폐기 정책", href: "privacy-policy?section=storage" },
];

const BADGES = [
  {
    label: "정식 사업자 등록 업체",
    image: businessRegistrationImage,
    alt: "사업자등록증 (현무 민간조사 탐정사무소)",
  },
  {
    label: "PIA 공인 탐정사 인증",
    image: piaLicenseImage,
    alt: "PIA 탐정사 자격증 (손성오)",
  },
];

function FooterColumnHeading({ children }) {
  return (
    <div className="text-[12px] font-bold tracking-[1.2px] text-navy">{children}</div>
  );
}

export default function Footer() {
  // Which badge's certificate is currently open in the lightbox, if any.
  const [activeBadge, setActiveBadge] = useState(null);

  return (
    <footer className="border-t border-[#bcc6cc] bg-[#e7e8e9] px-6 md:px-10 pb-16 pt-16 md:pb-[120px] md:pt-[121px]">
      <div className="mx-auto max-w-[1200px] px-0 md:px-6">
        {/* Footer content stays static (no fade-up) alongside the fixed nav. */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-12">
          <div className="flex flex-col gap-4 md:col-span-5">
            <BrandWordmark footer />
            <p className="max-w-[460px] text-[16px] leading-relaxed text-slate">
              현무민간조사 탐정사무소는 부산을 기반으로 전국의 상담을 받습니다.
              사안에 맞는 자료 수집과 사실관계 확인을 돕습니다.
            </p>
          </div>

          <div className="flex flex-col gap-6 md:col-span-2">
            <FooterColumnHeading>사이트맵</FooterColumnHeading>
            <ul className="flex flex-col gap-3.5">
              {SITEMAP_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[13px] text-slate transition-colors duration-200 hover:text-brand-blue"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6 md:col-span-2">
            <FooterColumnHeading>법적 고지</FooterColumnHeading>
            <ul className="flex flex-col gap-3.5">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => goTo(link.href)}
                    className="text-left text-[13px] text-slate transition-colors duration-200 hover:text-brand-blue"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6 md:col-span-3">
            <FooterColumnHeading>연락처</FooterColumnHeading>
            <div className="flex flex-col gap-1 text-[13px] text-slate">
              <a href={PHONE_LINK} className="w-fit transition-colors duration-200 hover:text-brand-blue">
                대표전화: {PHONE_NUMBER}
              </a>
              <a
                href="mailto:actoz2001@gmail.com"
                className="w-fit transition-colors duration-200 hover:text-brand-blue"
              >
                이메일: actoz2001@gmail.com
              </a>
              <span>주소: 부산광역시 동래구 여고북로 102</span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center gap-4 border-t border-[#bcc6cc]/50 pt-8 md:mt-16 md:flex-row md:justify-between md:pt-12">
          <p className="text-[13px] text-slate">
            © 2026 현무 PIA 민간조사 탐정사무소. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            {BADGES.map((badge) => (
              <button
                key={badge.label}
                type="button"
                onClick={() => setActiveBadge(badge)}
                className="rounded-sm border border-[#bcc6cc] px-3.5 py-1.5 text-[10px] text-slate transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-blue hover:text-brand-blue hover:shadow-sm"
              >
                {badge.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <CertificateModal
        image={activeBadge?.image ?? null}
        alt={activeBadge?.alt ?? ""}
        title={activeBadge?.label ?? ""}
        onClose={() => setActiveBadge(null)}
      />
    </footer>
  );
}
