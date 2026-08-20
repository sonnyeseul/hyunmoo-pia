import { useEffect, useRef, useState } from "react";

/**
 * Wraps its children in a container that fades up into view the first time
 * it crosses into the viewport while scrolling, then stays visible.
 * Respects prefers-reduced-motion (see the .fade-up rule in index.css).
 */
export default function FadeUp({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`fade-up ${visible ? "fade-up-visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
