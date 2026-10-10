// Site imagery, bundled locally (no external hosting, nothing that expires).
import hero from "./hero-document-review.jpg";
import servicesBento from "./services-desk-review.webp";
import officeMap from "./map-1200.webp";
import statisticsCity768 from "./statistics-city-768.webp";
import statisticsCity1280 from "./statistics-city-1280.webp";
import statisticsCity1920 from "./statistics-city-1920.webp";
import promotion from "./promotion-30-percent.webp";

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
export const statisticsCityImage = statisticsCity1280;
export const statisticsCitySrcSet = `${statisticsCity768} 768w, ${statisticsCity1280} 1280w, ${statisticsCity1920} 1920w`;
export const promotionImage = promotion;

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
