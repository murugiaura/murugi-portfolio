import { Database, LayoutDashboard, Table, Terminal } from "lucide-react";
import type { LucideIcon } from "lucide-react";


export type JourneyWork = {
  title: string;
  description: string;
  tags: string[];
  github: string; // link to the repo or folder
  images: string[]; // screenshots, e.g. "/images/data/excel/cleaning.png"
};

export type JourneyStep = {
  title: string;
  icon: LucideIcon;
  description: string;
  topics: string[];
  inProgress?: boolean;
  work?: JourneyWork[]; // add this line
};

export const journeyIntro: string[] = [
  "My journey into data began with a strong interest in using numbers, technology, and problem-solving to understand information and support better decisions.",
  "With my background in Mathematics & Computer Science, I decided to focus on building practical skills in Data Analytics and Data Science. I have been learning and practicing the tools used throughout the data workflow, moving from data preparation and querying to analysis, visualization, and modelling.",
];

export const workflow = ["Prepare", "Query", "Analyse", "Visualise", "Model"];

export const journeySteps: JourneyStep[] = [
  {
    title: "SQL",
    icon: Database,
    description:
      "Building strong skills in querying and analysing relational data, including joins, CTEs, subqueries, window functions, aggregations, and more advanced SQL techniques.",
    topics: ["Joins", "CTEs", "Subqueries", "Window Functions", "Aggregations"],
  },
  {
  title: "Excel",
  icon: Table,
  description:
    "Using Excel for data cleaning, analysis, pivot tables, lookups, conditional logic, charts, and transforming raw data into useful information.",
  topics: ["Data Cleaning", "Pivot Tables", "Lookups", "Conditional Logic", "Charts"],
  work: [
    {
      title: "Coffee Sales Dashboard",
      description:
        "Performed data cleaning,analysis and visualized the data ",
      tags: ["Data Cleaning", "Pivot Tables"], // REPLACE with what you used
      github: "https://github.com/murugiaura/Coffee-Orders-Excel-Dashboard",
      images: [
         "/images/excel2.jpeg",
        
      ],
    },
  ],
},
  {
    title: "Power BI",
    icon: LayoutDashboard,
    description:
      "Currently developing my skills in Power BI, including data cleaning, transformation, data modelling, relationships, star schemas, and DAX, with a focus on creating meaningful dashboards and insights.",
    topics: ["Data Modelling", "Star Schemas", "DAX", "Dashboards"],
    inProgress: true,
  },
  {
    title: "Python & Pandas",
    icon: Terminal,
    description:
      "Using Python for data analysis and learning Pandas for working with, cleaning, transforming, and exploring datasets programmatically.",
    topics: ["Python", "Pandas", "Cleaning", "Exploration"],
  },
];

export const currentlyBuilding =
  "I am now putting these skills together through practical data projects. My goal is to move beyond tutorials and apply what I have learned to real-world datasets, build a portfolio of meaningful projects, and continue growing as a data professional.";