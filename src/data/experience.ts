import { ClipboardList, Headset, HeartPulse, Laptop } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Experience = {
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  skills: string[];
  icon: LucideIcon;
};

export const experiences: Experience[] = [
  {
    role: "Technology Intern",
    organization: "Tech Savanna",
    location: "Nairobi, Kenya",
    period: "2026",
    description:
      "Gained practical experience working in a technology environment, contributing to digital projects and strengthening my skills in web development, problem-solving, and technology implementation. Worked with team members to understand requirements and develop practical solutions.",
    skills: ["Python", "Django", "React", "Problem Solving", "Web Development"],
    icon: Laptop,
  },
  {
    role: "ICT Support Attachment",
    organization: "Kenya National Highways Authority (KeNHA)",
    location: "Nairobi, Kenya",
    period: "May – July 2026",
    description:
      "Provided technical support to different departments, troubleshooting hardware, software, networking, and user-related issues. Assisted with computer and peripheral setup, network connectivity, software configuration, and Microsoft Office support while maintaining accurate technical information and resolving user requests.",
    skills: [
      "Technical Support",
      "Troubleshooting",
      "Networking",
      "Microsoft Office",
      "Problem Solving",
    ],
    icon: Headset,
  },
  {
    role: "Data Collection Assistant",
    organization: "Government ESR Survey",
    location: "Meru, Kenya",
    period: "2026",
    description:
      "Participated in field data collection for a government socioeconomic survey. Registered households, collected and verified respondent information, and ensured data was accurately captured during fieldwork.",
    skills: [
      "Data Collection",
      "Data Entry",
      "Data Validation",
      "Accuracy",
      "Communication",
    ],
    icon: ClipboardList,
  },
  {
    role: "Administrative & Data Support",
    organization: "Hospital",
    location: "Kenya",
    period: "2026",
    description:
      "Supported hospital reception and administrative operations, working with patient and insurance information and assisting with data entry and information management. Developed practical experience handling sensitive records accurately and interacting with people in a professional environment.",
    skills: [
      "Data Entry",
      "Information Management",
      "Data Accuracy",
      "Administration",
      "Communication",
    ],
    icon: HeartPulse,
  },
];