import { Award, GraduationCap, LineChart, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { technologies } from "./technologies";

export type Stat = {
  icon: LucideIcon;
  value: string;
  label: string;
};

export const aboutStats: Stat[] = [
  { icon: Award, value: "First Class", label: "Honours Degree" },
  { icon: GraduationCap, value: "Maths & CS", label: "Maseno University, Kenya" },
  { icon: Wrench, value: `${technologies.length}+`, label: "Tools & Technologies" },
  { icon: LineChart, value: "Data", label: "Analytics & Science Focus" },
];

export const aboutIntro =
  "I'm Murugi Victoriana, a Mathematics & Computer Science graduate with a First Class Honours degree from Maseno University, Kenya. I'm passionate about using data, technology and problem-solving to turn information into meaningful insights.";

export const aboutStory: string[] = [
  "My background in mathematics has strengthened my analytical and logical thinking, while my computer science training has given me a strong foundation in programming and technology.",
  "I'm currently building my career in Data Analytics and Data Science, with a focus on developing practical skills in SQL, Python, Excel, Power BI, data visualization, and data modelling. I enjoy working with data, exploring patterns, solving problems, and presenting insights in a way that supports better decision-making.",
  "Beyond data, I have experience building web applications using technologies such as Python, Django, React, Next.js, HTML, CSS, and JavaScript. These projects have helped me develop my ability to learn quickly, work independently, and turn ideas into functional digital solutions.",
  "I'm a curious and continuous learner who believes that growth comes from consistently building, experimenting, and applying what I learn to real-world problems.",
];

export const aboutCurrently =
  "Building my skills, creating practical projects, and looking for opportunities to grow as a Data Analyst / Data Scientist.";