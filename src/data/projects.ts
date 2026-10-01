import {
  Siren,
  ShoppingBag,
  Stethoscope,
  Store,
  UserRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Project = {
  title: string;
  description: string;
  tech: string[];
  icon: LucideIcon; // shown when there's no screenshot yet
  live?: string; // leave out if not live
  github?: string; // leave out to hide the GitHub button
  image?: string; // e.g. "/images/projects/biography.png"
  clientWork?: boolean;
};

export const projects: Project[] = [
  {
    title: "Biography Profile Website",
    description:
      "A professional personal profile website built for a client to showcase their biography, career, diplomatic engagements, achievements, recognition, and professional journey.",
    tech: ["Next.js", "React", "HTML", "CSS"],
    icon: UserRound,
    live: "https://kaberia-biography.vercel.app",
    github: "", // add your repo link, or leave empty to hide the button
    image: "",
    clientWork: true,
  },
  {
    title: "Fashion E-commerce Website",
    description:
      "A fashion e-commerce website that gives users an online shopping experience, with product browsing and a structured interface for presenting fashion products.",
    tech: ["Django", "Python", "HTML", "CSS", "JavaScript"],
    icon: ShoppingBag,
    live: "https://victoriaaura.pythonanywhere.com/home/",
    github: "",
    image: "",
  },
  {
    title: "Hospital Management Portal",
    description:
      "A full-stack hospital web application for managing patients, appointments, hospital information, and administration through one centralized digital system.",
    tech: ["Python", "Django", "HTML", "CSS", "JavaScript"],
    icon: Stethoscope,
  },
  {
    title: "Marketplace Platform",
    description:
      "A full-stack marketplace where users browse and interact with products. I built a responsive interface and connected the frontend to a Django backend.",
    tech: ["React", "Django", "CSS"],
    icon: Store,
  },
  {
    title: "Emergency Response Platform",
    description:
      "A full-stack platform giving users quick access to emergency services and information, combining a responsive React frontend with a Django backend.",
    tech: ["React", "Django", "CSS"],
    icon: Siren,
  },
];