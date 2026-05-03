/**
 * @file ScrollReveal — utility wrapper that fades in children on scroll.
 * Uses the Intersection Observer API to detect when the element enters
 * the viewport, then triggers a CSS transition (opacity + translateY).
 * Once revealed, the observer is disconnected to avoid re-triggering.
 *
 * Part of the Atomic Design utility layer (not an atom/molecule/organism).
 */
"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  /** Content to reveal on scroll */
  children: ReactNode;
  /** Optional delay in ms before the transition starts (stagger effect) */
  delay?: number;
}

/**
 * Wraps children in a div that animates from transparent/offset to visible
 * when 15% of the element enters the viewport.
 */
export default function ScrollReveal({ children, delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Observe the element and reveal it when it enters the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el); // Only animate once
        }
      },
      { threshold: 0.15 } // Trigger when 15% is visible
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
