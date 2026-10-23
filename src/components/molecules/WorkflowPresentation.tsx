"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { FiArrowLeft, FiArrowRight, FiCheck, FiCheckSquare, FiCode, FiFileText, FiPause, FiPlay } from "react-icons/fi";
import { developmentApproach } from "@/data/profile";

const icons = [FiFileText, FiCode, FiCheckSquare];
const motionQuery = "(prefers-reduced-motion: reduce)";

function subscribeToMotion(onChange: () => void) {
  const query = window.matchMedia(motionQuery);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

export default function WorkflowPresentation() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useSyncExternalStore(
    subscribeToMotion,
    () => window.matchMedia(motionQuery).matches,
    () => true,
  );
  const playing = !paused && !hovered && visible && !reducedMotion;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    let inView = false;
    const updateVisibility = () => setVisible(inView && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      updateVisibility();
    }, { threshold: 0.5 });
    observer.observe(section);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  function selectSlide(index: number) {
    setPaused(true);
    setActive((index + developmentApproach.length) % developmentApproach.length);
  }

  return (
    <section
      ref={sectionRef}
      id="workflow"
      aria-labelledby="workflow-heading"
      aria-roledescription="carousel"
      className="workflow-presentation"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={(event) => {
        if (!(event.target as HTMLElement).closest("[data-rotation]")) setPaused(true);
      }}
    >
      <div className="workflow-header">
        <h3 id="workflow-heading">How I Work</h3>
        <div className="workflow-controls" role="group" aria-label="Presentation controls">
          {!reducedMotion && (
            <button data-rotation type="button" className="workflow-play" aria-label={paused ? "Play presentation" : "Pause presentation"} onClick={() => setPaused((current) => !current)}>
              {paused ? <FiPlay aria-hidden="true" /> : <FiPause aria-hidden="true" />}
              <span>{paused ? "Play" : "Pause"}</span>
            </button>
          )}
          <button type="button" aria-label="Previous step" onClick={() => selectSlide(active - 1)}><FiArrowLeft aria-hidden="true" /></button>
          <button type="button" aria-label="Next step" onClick={() => selectSlide(active + 1)}><FiArrowRight aria-hidden="true" /></button>
        </div>
      </div>

      <div id="workflow-slide" className="workflow-scenes" aria-live={playing ? "off" : "polite"} aria-atomic="true">
        {developmentApproach.map((item, index) => {
          const Icon = icons[index];
          return (
            <div key={item.step} className={`workflow-scene${active === index ? " is-active" : ""}`} aria-hidden={active !== index}>
              <div className="workflow-copy">
                <div className="workflow-position"><span>0{index + 1}</span><span>/ 0{developmentApproach.length}</span></div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
              <div className={`workflow-artifact workflow-artifact-${index}`} aria-hidden="true">
                <div className="workflow-artifact-heading"><Icon /><span>{item.artifact}</span></div>
                <div className="workflow-artifact-rows">
                  {item.artifactItems.map((line, lineIndex) => (
                    <div key={line} className="workflow-artifact-row" style={{ animationDelay: `${150 + lineIndex * 200}ms` }}>
                      {index === 2 ? <FiCheck className="workflow-check" /> : <span className="workflow-line-number">0{lineIndex + 1}</span>}
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="workflow-steps" role="group" aria-label="Presentation steps">
        {developmentApproach.map((item, index) => (
          <button
            key={item.step}
            type="button"
            aria-label={`Step ${index + 1}: ${item.step}`}
            aria-current={active === index ? "step" : undefined}
            aria-controls="workflow-slide"
            onClick={() => selectSlide(index)}
          >
            <span className="workflow-step-number">0{index + 1}</span>
            <span>{item.step}</span>
            {active === index && (
              <span key={active} className="workflow-progress" aria-hidden="true" style={{ animationPlayState: playing ? "running" : "paused" }} onAnimationEnd={() => {
                if (playing) setActive((current) => (current + 1) % developmentApproach.length);
              }} />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
