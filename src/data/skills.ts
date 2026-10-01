import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";
import { technologies } from "./technologies";

export type Skill = {
  name: string;
  icon: IconType | LucideIcon;
  level: number; // percentage, 0-100
  color: string; // icon colour
};

// Listed in column order: 4 skills per column, top to bottom
const skillConfig: { name: string; level: number; color: string }[] = [
  // Column 1: Data & Analytics
  { name: "Python", level: 80, color: "#4B8BBE" },
  { name: "SQL", level: 85, color: "#38BDF8" },
  { name: "Power BI", level: 80, color: "#F2C811" },
  { name: "Excel", level: 90, color: "#21A366" },
  // Column 2: Programming & Web
  { name: "JavaScript", level: 75, color: "#F7DF1E" },
  { name: "React", level: 75, color: "#61DAFB" },
  { name: "Next.js", level: 70, color: "#F8FAFC" },
  { name: "Django", level: 70, color: "#44B78B" },
  // Column 3: Foundations
  { name: "HTML", level: 90, color: "#E34F26" },
  { name: "CSS", level: 85, color: "#2D8FDD" },
  { name: "MySQL", level: 80, color: "#5B9BD5" },
  { name: "Git", level: 75, color: "#F05032" },
];

export const skills: Skill[] = skillConfig.map(({ name, level, color }) => {
  const tech = technologies.find((t) => t.name === name);
  if (!tech) throw new Error(`Missing technology: ${name}`);
  return { name, icon: tech.icon, level, color };
});