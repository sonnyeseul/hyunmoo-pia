// Site imagery, bundled locally (no external hosting, nothing that expires).
import hero from "./hero.jpg";
import servicesBento from "./services-bento.jpg";
import officeMap from "./map.jpg";

import caseFamily from "./cases/family.jpg";
import caseCorporate from "./cases/corporate.jpg";
import caseSafety from "./cases/safety.jpg";
import caseLocate from "./cases/locate.jpg";

import kspia from "./emblems/01-kspia.png";
import pinews from "./emblems/02-pinews.png";
import koreaPia from "./emblems/03-korea-pia.png";
import kpia from "./emblems/04-kpia.png";

import iconFamily from "./icons/family.png";
import iconCorporate from "./icons/corporate.png";
import iconSafety from "./icons/safety.png";

export const heroImage = hero;
export const servicesBentoImage = servicesBento;
export const mapImage = officeMap;

export const caseImages = {
  family: caseFamily,
  corporate: caseCorporate,
  safety: caseSafety,
  locate: caseLocate,
};

// Order is fixed — matches the association row on the site.
export const associationEmblems = [
  { src: kspia, alt: "대한민국탐정 PIA (KSPIA)" },
  { src: pinews, alt: "국정보안뉴스 PInews" },
  { src: koreaPia, alt: "한국PIA탐정" },
  { src: kpia, alt: "대한민국탐정 KPIA" },
];

export const problemIcons = {
  family: iconFamily,
  corporate: iconCorporate,
  safety: iconSafety,
};
