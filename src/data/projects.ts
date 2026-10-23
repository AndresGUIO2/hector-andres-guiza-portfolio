export const syntelleProject = {
  name: "Syntelle",
  cover: "/images/syntelle/cover.webp",
  subtitle: "Conversational AI characters",
  href: "https://app.syntelle.online",
  description:
    "A voice-first AI experience with expressive characters. Speak naturally, interrupt replies, and customize expressions and movement while following the conversation in a live transcript.",
  technologies: ["Vue.js", "TypeScript", "Go", "Python / FastAPI", "WebRTC", "PostgreSQL", "Azure Speech", "Gemini"],
  highlights: [
    { title: "Voice conversation", description: "Speech recognition, spoken AI replies, and interruption handling with a visible conversation history." },
    { title: "Expressive characters", description: "Synchronized lip movement, natural blinking, breathing, and configurable facial expressions and gestures." },
    { title: "Full stack engineering", description: "A responsive Vue interface connected to Go and Python services, combining AI, speech, and real-time media." },
  ],
  screenshots: [
    {
      src: "/images/syntelle/conversation.png",
      label: "Voice conversation",
      alt: "Syntelle character alongside a live conversation transcript and microphone controls",
    },
    {
      src: "/images/syntelle/customization.png",
      label: "Character controls",
      alt: "Syntelle customization panel with blinking, breathing, facial expression, and head gesture controls",
    },
    {
      src: "/images/syntelle/expressions.png",
      label: "Expressions & gestures",
      alt: "Syntelle smiling during laughter playback with expression and gesture settings visible",
    },
  ],
};
