// Only web derivatives are imported. Private identifiers are covered in the
// image pixels; archived originals and redaction masters stay out of the bundle.
import piaPlaque from "./gallery/web/01-pia-plaque.webp";
import piaLicenseFramed from "./gallery/web/02-pia-license.webp";
import piaCertificate from "./gallery/web/03-pia-certificate.webp";
import psgGuard from "./gallery/web/04-psg-guard.webp";
import counselor from "./gallery/web/07-counselor.webp";
import digitalAsset from "./gallery/web/08-digital-asset.webp";
import environment from "./gallery/web/10-environment.webp";
import currencyEdu from "./gallery/web/11-currency-edu.webp";
import businessRegistrationFramed from "./gallery/web/12-business-registration.webp";

import cardPia from "./cards/web/card-pia.webp";
import cardPsg from "./cards/web/card-psg.webp";
import cardCounselor from "./cards/web/card-counselor.webp";
import cardEnvironment from "./cards/web/card-environment.webp";
import cardDigitalAsset from "./cards/web/card-digital-asset.webp";
import cardCurrencyEdu from "./cards/web/card-currency-edu.webp";
import cardPress from "./cards/web/card-press.webp";

export { default as businessRegistrationImage } from "./business-registration.webp";
export { default as piaLicenseImage } from "./pia-license.webp";

export const certificateGallery = [
  { src: piaPlaque, alt: "PIA 탐정사 인증패 (한국특수교육재단·한국공인탐정협회)" },
  { src: piaLicenseFramed, alt: "PIA 탐정사 자격증" },
  { src: piaCertificate, alt: "PIA 탐정사 자격인증서 (대한공인탐정연구협회)" },
  { src: psgGuard, alt: "특수경호사(PSG) 자격증" },
  { src: counselor, alt: "심리상담사 1급 자격증" },
  { src: digitalAsset, alt: "디지털자산관리사 1급 자격증" },
  { src: environment, alt: "환경관리전문가 1급 자격증" },
  { src: currencyEdu, alt: "화폐교육지도사 자격증" },
  { src: businessRegistrationFramed, alt: "사업자등록증 (현무 민간조사 탐정사무소)" },
];

export const certificateCards = [
  { src: cardPia, alt: "PIA 탐정사 자격 카드 (한국공인탐정협회)", width: 286, height: 450 },
  { src: cardPsg, alt: "특수경호사(PSG) 자격 카드 (한국탐정협회)", width: 289, height: 450 },
  { src: cardCounselor, alt: "심리상담사 1급 자격 카드", width: 709, height: 450 },
  { src: cardEnvironment, alt: "환경관리전문가 1급 자격 카드", width: 712, height: 450 },
  { src: cardDigitalAsset, alt: "디지털자산관리사 1급 자격 카드", width: 696, height: 450 },
  { src: cardCurrencyEdu, alt: "화폐교육지도사 자격 카드", width: 700, height: 450 },
  { src: cardPress, alt: "국정보안뉴스 취재기자 카드", width: 287, height: 450 },
];
