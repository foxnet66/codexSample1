export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
  platform: string;
  services: string[];
  url: string;
}

export const projects: Project[] = [
  {
    id: "atlas",
    title: "Atlas Finance",
    description:
      "A fintech super-app that unifies digital banking, personal wealth insights, and concierge human support in a unified mobile-first experience.",
    image: "/images/atlas.svg",
    tag: "Fintech",
    platform: "iOS, Android",
    services: ["Product design", "Mobile engineering", "Design system"],
    url: "#"
  },
  {
    id: "lumen",
    title: "Lumen Health",
    description:
      "Patient-centric platform for remote diagnostics and personalized treatment plans with HIPAA-compliant collaboration tools.",
    image: "/images/lumen.svg",
    tag: "Healthcare",
    platform: "Web",
    services: ["UX research", "Web app", "Analytics"],
    url: "#"
  },
  {
    id: "nebula",
    title: "Nebula XR Museum",
    description:
      "Immersive museum installation blending spatial computing and storytelling to showcase interactive art from global creators.",
    image: "/images/nebula.svg",
    tag: "Spatial",
    platform: "Immersive",
    services: ["Creative tech", "3D", "Realtime engine"],
    url: "#"
  },
  {
    id: "sprout",
    title: "Sprout Foods",
    description:
      "E-commerce growth program integrating subscriptions, loyalty, and dynamic content personalization to boost LTV by 35%.",
    image: "/images/sprout.svg",
    tag: "DTC",
    platform: "Web, Shopify",
    services: ["CRO", "Headless commerce", "Content design"],
    url: "#"
  },
  {
    id: "aether",
    title: "Aether Mobility",
    description:
      "Launch campaign and companion app for an electric vehicle startup delivering real-time diagnostics and over-the-air updates.",
    image: "/images/aether.svg",
    tag: "Mobility",
    platform: "iOS, Android, Web",
    services: ["Product strategy", "Brand", "Full-stack"],
    url: "#"
  },
  {
    id: "pulse",
    title: "Pulse Insights",
    description:
      "AI-powered analytics suite for enterprise teams to discover actionable signals across customer journeys in real time.",
    image: "/images/pulse.svg",
    tag: "SaaS",
    platform: "Web",
    services: ["AI", "Data visualization", "Platform engineering"],
    url: "#"
  }
];
