"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { FaArrowRight, FaChevronUp, FaTimes } from "react-icons/fa";
import SectionHeading from "@/components/atoms/SectionHeading";
import TagBadge from "@/components/atoms/TagBadge";

/** Paths to the HistorIA project screenshot images for the gallery */
const screenshots = [
  "/images/historia/screenshot-1.jpg",
  "/images/historia/screenshot-2.jpg",
  "/images/historia/screenshot-3.jpg",
  "/images/historia/screenshot-4.jpg",
  "/images/historia/screenshot-5.jpg",
];

/** Technologies used in the HistorIA project, displayed as tag badges */
const techStack = ["Kotlin", "Android SDK", "Jetpack Compose", "Room DB", "Gemini AI", "Coroutines", "FSM Engine", "DataStore"];

/** Core architectural pillars of the HistorIA project with descriptions */
const pillars = [
  {
    title: "Hybrid Narrative Engine",
    text: "A deterministic FSM handles all mechanical outcomes while Google Gemini serves as a \"Flavor Layer,\" describing outcomes with rich, context-aware prose that adapts to player history.",
  },
  {
    title: "MVVM + Clean Architecture",
    text: "Room DB is the absolute Source of Truth. Manual DI maintains full control over simulation engines. Jetpack Compose UI uses StateFlow for reactive updates.",
  },
  {
    title: "Real-Time NPC Simulation",
    text: "Background runtime simulates up to 200 NPCs (40 active/rendered). Each has individual traits, tasks, and schedules creating a living environment.",
  },
  {
    title: "Social Protocol System",
    text: "Communication through Public (ROOM), Private (WHISPER), and Remote (RADIO) channels with enforced social rules for tactical depth.",
  },
];

/**
 * Renders the portfolio section — an atomic-design organism that composes
 * SectionHeading atom and TagBadge atoms into a featured-project showcase.
 * Displays a collapsed card that expands into a detailed view with
 * screenshot gallery, technical pillars, features, and a lightbox zoom.
 */
export default function PortfolioSection() {
  /** Whether the project detail card is expanded or collapsed */
  const [expanded, setExpanded] = useState(false);
  /** URL of the currently zoomed screenshot, or null when lightbox is closed */
  const [zoomed, setZoomed] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center gap-[33px]">
      <SectionHeading
        title="Portfolio"
        description="Featured projects showcasing expertise in game development, AI integration, and Android architecture."
      />

      {!expanded ? (
        /* Collapsed card */
        <div className="flex items-center justify-center w-full">
          <div className="bg-white rounded-lg overflow-hidden w-full sm:w-[310px] flex-shrink-0">
            <img
              src="/images/historia/cover.png"
              alt="HistorIA — Starship Centaurus"
              className="w-full h-[200px] sm:h-[300px] object-cover"
            />
            <div className="p-6">
              <h3 className="text-dark text-[18px] font-medium">
                HistorIA — Starship Centaurus
              </h3>
              <p className="text-secondary text-[14px] leading-5 mt-2">
                Sci-fi narrative investigation game for Android. Identify a traitor among the crew before the starship fails. Hybrid FSM + LLM engine with deterministic simulation and dynamic Gemini-powered storytelling.
              </p>
              <div className="flex flex-wrap gap-1 mt-3">
                {["Kotlin", "Jetpack Compose", "Gemini AI", "Room DB"].map((t) => (
                  <TagBadge key={t} text={t} size="sm" variant="accent" />
                ))}
              </div>
              <button
                onClick={() => setExpanded(true)}
                className="inline-flex items-center gap-2 text-accent text-[18px] font-medium capitalize mt-4 hover:underline cursor-pointer"
              >
                Learn more
                <FaArrowRight className="text-[14px]" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Expanded view */
        <div className="w-full bg-white rounded-lg overflow-hidden">
          {/* Screenshot gallery */}
          <div className="flex justify-center flex-wrap gap-3 p-4">
            {screenshots.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`HistorIA screenshot ${i + 1}`}
                className="h-[200px] md:h-[280px] rounded-lg object-cover flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setZoomed(src)}
              />
            ))}
          </div>

          <div className="p-6 md:p-10">
            <h3 className="text-dark text-[24px] md:text-[28px] font-bold">
              HistorIA — Starship Centaurus
            </h3>
            <p className="text-secondary text-[15px] leading-6 mt-3">
              A sci-fi narrative investigation game for Android where you play as the Captain of the starship Centaurus. Your mission: identify a traitor among the crew before the ship&apos;s integrity fails or time runs out. A cutting-edge fusion of deterministic simulation engines and dynamic LLM storytelling via Google Gemini.
            </p>

            {/* Technical Pillars */}
            <h4 className="text-dark text-[18px] font-bold mt-8 mb-4">Technical Pillars</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pillars.map((p) => (
                <div key={p.title} className="border border-gray-200 rounded-lg p-4">
                  <h5 className="text-dark text-[15px] font-medium">{p.title}</h5>
                  <p className="text-secondary text-[13px] leading-5 mt-1">{p.text}</p>
                </div>
              ))}
            </div>

            {/* Key Features */}
            <h4 className="text-dark text-[18px] font-bold mt-8 mb-4">Key Features</h4>
            <ul className="space-y-2">
              <li className="flex gap-2 text-[14px]">
                <span className="text-accent font-bold">&#9679;</span>
                <span className="text-dark"><strong>Tactical Terminal:</strong> Command-line inspired interface (MIRAR, BUSCAR, REVISAR) blending retro-tech aesthetics with modern UX.</span>
              </li>
              <li className="flex gap-2 text-[14px]">
                <span className="text-accent font-bold">&#9679;</span>
                <span className="text-dark"><strong>Integrity System:</strong> High-stakes survival loop balancing investigation with repairing sabotage.</span>
              </li>
              <li className="flex gap-2 text-[14px]">
                <span className="text-accent font-bold">&#9679;</span>
                <span className="text-dark"><strong>Evidence Protocol:</strong> Gather 3+ pieces of actionable evidence before making a formal accusation.</span>
              </li>
              <li className="flex gap-2 text-[14px]">
                <span className="text-accent font-bold">&#9679;</span>
                <span className="text-dark"><strong>2D Pixel Runtime:</strong> Custom 2D map engine for real-time navigation and NPC tracking.</span>
              </li>
            </ul>

            {/* Tech Stack */}
            <h4 className="text-dark text-[18px] font-bold mt-8 mb-4">Technology Stack</h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((t) => (
                <TagBadge key={t} text={t} size="md" variant="accent" />
              ))}
            </div>

            <button
              onClick={() => setExpanded(false)}
              className="inline-flex items-center gap-2 text-accent text-[18px] font-medium capitalize mt-8 hover:underline cursor-pointer"
            >
              Show less
              <FaChevronUp className="text-[14px]" />
            </button>
          </div>
        </div>
      )}

      {/* Lightbox overlay — portal-rendered full-screen zoom on screenshot click */}
      {zoomed && createPortal(
        <div
          className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center p-4"
          onClick={() => setZoomed(null)}
        >
          <button
            onClick={() => setZoomed(null)}
            className="absolute top-4 right-4 text-white text-[28px] hover:text-gray-300 transition-colors cursor-pointer"
          >
            <FaTimes />
          </button>
          <img
            src={zoomed}
            alt="Zoomed screenshot"
            className="max-w-full max-h-[90vh] rounded-lg object-contain"
            // Prevent click on image from closing the lightbox
            onClick={(e) => e.stopPropagation()}
          />
        </div>,
        document.body
      )}
    </div>
  );
}
