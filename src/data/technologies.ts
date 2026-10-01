import type { IconType } from "react-icons";
import {
  SiPython,
  SiMysql,
  SiGit,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiDjango,
  SiHtml5,
  SiCss, // replaces SiCss3
} from "react-icons/si";
import { FaFileExcel } from "react-icons/fa"; // replaces SiMicrosoftexcel
import { Database, LayoutDashboard } from "lucide-react"; // LayoutDashboard stands in for Power BI
import type { LucideIcon } from "lucide-react";

export type Technology = {
  name: string;
  icon: IconType | LucideIcon;
};

export const technologies: Technology[] = [
  { name: "Python", icon: SiPython },
  { name: "SQL", icon: Database },
  { name: "Power BI", icon: LayoutDashboard },
  { name: "Excel", icon: FaFileExcel },
  { name: "MySQL", icon: SiMysql },
  { name: "Git", icon: SiGit },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Django", icon: SiDjango },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss },
];