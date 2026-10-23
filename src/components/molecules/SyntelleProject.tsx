"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiChevronUp, FiMaximize2, FiX } from "react-icons/fi";
import { syntelleProject as project } from "@/data/projects";

interface ScreenshotViewerProps {
  selected: number;
  onSelect: (index: number) => void;
  onClose: () => void;
}

function ScreenshotViewer({ selected, onSelect, onClose }: ScreenshotViewerProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const screenshot = project.screenshots[selected];

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, []);

  function move(direction: number) {
    onSelect((selected + direction + project.screenshots.length) % project.screenshots.length);
  }

  return (
    <dialog
      ref={dialogRef}
      className="project-viewer"
      aria-label="Syntelle screenshots"
      onCancel={onClose}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          move(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}
    >
      <div className="project-viewer-content">
        <div className="project-viewer-toolbar">
          <span aria-live="polite">{screenshot.label} <span className="project-viewer-count">{selected + 1} / {project.screenshots.length}</span></span>
          <button type="button" aria-label="Close screenshot" onClick={onClose}><FiX aria-hidden="true" /></button>
        </div>
        <div className="project-viewer-image">
          <Image src={screenshot.src} alt={screenshot.alt} fill sizes="96vw" className="object-contain" />
        </div>
        <div className="project-viewer-navigation">
          <button type="button" onClick={() => move(-1)}><FiArrowLeft aria-hidden="true" /> Previous</button>
          <button type="button" onClick={() => move(1)}>Next <FiArrowRight aria-hidden="true" /></button>
        </div>
      </div>
    </dialog>
  );
}

export default function SyntelleProject({ onCollapse }: { onCollapse: () => void }) {
  const [selected, setSelected] = useState(0);
  const [viewerOpen, setViewerOpen] = useState(false);
  const screenshot = project.screenshots[selected];

  return (
    <article id="syntelle" aria-labelledby="syntelle-heading" className="syntelle-project w-full bg-card rounded-lg overflow-hidden scroll-mt-20">
      <figure>
        <button
          type="button"
          className="project-preview relative block w-full aspect-[2/1] bg-[#29282c]"
          aria-label={`Enlarge Syntelle screenshot: ${screenshot.label}`}
          onClick={() => setViewerOpen(true)}
        >
          <Image src={screenshot.src} alt={screenshot.alt} fill sizes="(min-width: 1440px) 1022px, (min-width: 1024px) calc(100vw - 418px), calc(100vw - 32px)" className="object-contain" />
          <span className="project-zoom"><FiMaximize2 aria-hidden="true" /></span>
        </button>
        <figcaption className="sr-only">Product screenshots provided by the project creator.</figcaption>
      </figure>

      <div className="project-gallery" role="group" aria-label="Syntelle screenshot gallery">
        {project.screenshots.map((image, index) => (
          <button key={image.src} type="button" aria-label={`Show ${image.label.toLowerCase()}`} aria-pressed={selected === index} onClick={() => setSelected(index)}>
            <span className="project-thumbnail relative block aspect-[2/1] overflow-hidden rounded-sm">
              <Image src={image.src} alt="" fill sizes="(min-width: 1024px) 260px, 30vw" className="object-contain" />
            </span>
            <span className="project-thumbnail-label">{image.label}</span>
          </button>
        ))}
      </div>

      <div className="px-5 pb-6 sm:px-7 sm:pb-7">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 id="syntelle-heading" className="text-dark text-[26px] font-semibold leading-tight">{project.name}</h3>
            <p className="text-secondary text-[14px] mt-1">{project.subtitle}</p>
          </div>
          <a className="project-visit inline-flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-2.5 text-[14px] font-medium text-white" href={project.href} target="_blank" rel="noopener noreferrer" aria-label="Open Syntelle app (opens in a new tab)">
            Open app <FiArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        <p className="text-secondary text-[14px] leading-6 mt-4 max-w-[75ch]">{project.description}</p>
        <ul className="project-technologies flex flex-wrap gap-x-4 gap-y-2 mt-5" aria-label="Syntelle technology stack">
          {project.technologies.map((technology) => <li key={technology} className="text-secondary text-[12px] font-medium">{technology}</li>)}
        </ul>
        <div className="mt-5 border-t border-gray-200">
          <h4 className="pt-4 text-dark text-[14px] font-medium">Project details</h4>
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-5">
            {project.highlights.map((highlight) => (
              <div key={highlight.title}>
                <dt className="text-dark text-[14px] font-medium">{highlight.title}</dt>
                <dd className="text-secondary text-[13px] leading-6 mt-1">{highlight.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <button type="button" onClick={onCollapse} className="inline-flex items-center gap-2 text-accent text-[18px] font-medium mt-6 hover:underline">
          Show less <FiChevronUp size={14} aria-hidden="true" />
        </button>
      </div>
      {viewerOpen && <ScreenshotViewer selected={selected} onSelect={setSelected} onClose={() => setViewerOpen(false)} />}
    </article>
  );
}
