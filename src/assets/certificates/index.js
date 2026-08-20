// Locally bundled certificate imagery. All personal identifiers
// (생년월일 / 자격증번호 / 등록번호 등) are masked in the image files themselves,
// not via CSS — the raw files carry no personal data.
import piaPlaque from "./gallery/01-pia-plaque.jpg";
import piaLicenseFramed from "./gallery/02-pia-license.jpg";
import piaCertificate from "./gallery/03-pia-certificate.jpg";
import psgGuard from "./gallery/04-psg-guard.jpg";
import droneAerial from "./gallery/05-drone-aerial.jpg";
import droneInstructor from "./gallery/06-drone-instructor.jpg";
import counselor from "./gallery/07-counselor.jpg";
import digitalAsset from "./gallery/08-digital-asset.jpg";
import forest from "./gallery/09-forest.jpg";
import environment from "./gallery/10-environment.jpg";
import currencyEdu from "./gallery/11-currency-edu.jpg";
import businessRegistrationFramed from "./gallery/12-business-registration.jpg";

import cardPia from "./cards/card-pia.jpg";
import cardPsg from "./cards/card-psg.jpg";
import cardBoat from "./cards/card-boat.jpg";
import cardForest from "./cards/card-forest.jpg";

export const certificateGallery = [
  { src: piaPlaque, alt: "PIA 탐정사 인증패 (한국특수교육재단·한국공인탐정협회)" },
  { src: piaLicenseFramed, alt: "PIA 탐정사 자격증" },
  { src: piaCertificate, alt: "PIA 탐정사 자격인증서 (대한공인탐정연구협회)" },
  { src: psgGuard, alt: "특수경호사(PSG) 자격증" },
  { src: droneAerial, alt: "드론 항공촬영사 자격증" },
  { src: droneInstructor, alt: "드론 교육지도사 자격증" },
  { src: counselor, alt: "심리상담사 1급 자격증" },
  { src: digitalAsset, alt: "디지털자산관리사 1급 자격증" },
  { src: forest, alt: "산림자원관리사 1급 자격증" },
  { src: environment, alt: "환경관리전문가 1급 자격증" },
  { src: currencyEdu, alt: "화폐교육지도사 자격증" },
  { src: businessRegistrationFramed, alt: "사업자등록증 (현무 민간조사 탐정사무소)" },
];

export const certificateCards = [
  { src: cardPia, alt: "PIA 탐정사 자격 카드 (한국공인탐정협회)" },
  { src: cardPsg, alt: "특수경호사(PSG) 자격 카드 (한국탐정협회)" },
  { src: cardBoat, alt: "동력수상레저기구 조종면허증" },
  { src: cardForest, alt: "산림자원관리사 1급 자격 카드" },
];
