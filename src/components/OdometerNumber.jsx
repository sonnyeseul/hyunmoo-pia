import { useEffect, useRef, useState } from "react";
import "./odometer.css";

const DIGIT_HEIGHT = 1.2;

/** Rolls each digit once its number enters view, preserving punctuation and width. */
export default function OdometerNumber({ value, suffix = "" }) {
  const ref = useRef(null);
  const [state, setState] = useState("pending");
  const formattedValue = String(value);
  const label = `${formattedValue}${suffix ? ` ${suffix}` : ""}`;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer;

    const finishForReducedMotion = () => {
      if (motionPreference.matches) {
        observer?.disconnect();
        setState("complete");
      }
    };

    if (motionPreference.matches || !("IntersectionObserver" in window)) {
      setState("complete");
    } else {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setState("running");
            observer.disconnect();
          }
        },
        { threshold: 0.5 },
      );
      observer.observe(element);
    }

    motionPreference.addEventListener("change", finishForReducedMotion);
    return () => {
      observer?.disconnect();
      motionPreference.removeEventListener("change", finishForReducedMotion);
    };
  }, []);

  const characters = [...formattedValue];
  const digitCount = characters.filter((character) => /\d/.test(character)).length;
  let digitIndex = 0;

  return (
    <span
      ref={ref}
      className="odometer-number"
      data-state={state}
      data-final-value={label}
      role="img"
      aria-label={label}
    >
      <span className="odometer-value" aria-hidden="true">
        {characters.map((character, characterIndex) => {
          if (!/\d/.test(character)) {
            return (
              <span key={characterIndex} className="odometer-punctuation">
                {character}
              </span>
            );
          }

          const reelIndex = digitIndex++;
          const stop = 20 + Number(character);
          const duration = 1700 + (reelIndex / Math.max(digitCount - 1, 1)) * 250;
          const isLastDigit = reelIndex === digitCount - 1;

          return (
            <span key={characterIndex} className="odometer-digit">
              <span
                className="odometer-reel"
                style={{
                  "--odometer-final-offset": `${-stop * DIGIT_HEIGHT}em`,
                  "--odometer-duration": `${duration}ms`,
                }}
                onAnimationEnd={
                  isLastDigit ? () => setState("complete") : undefined
                }
              >
                {Array.from({ length: stop + 1 }, (_, index) => (
                  <span key={index} className="odometer-reel-digit">
                    {index % 10}
                  </span>
                ))}
              </span>
            </span>
          );
        })}
        {suffix && <span className="odometer-suffix">{suffix}</span>}
      </span>
    </span>
  );
}
