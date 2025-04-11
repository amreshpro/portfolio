import { Code2, Cpu, CpuIcon, Database, GalleryVerticalEnd } from "lucide-react";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import {
  FaDocker,
  FaGitAlt,
  FaJava,
  FaLinux,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { FaGolang, FaJs } from "react-icons/fa6";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

export default [
  {
    icon: Code2,
    title: "Programming Languages",
    color: "text-orange-500",
    skills: [
      { name: "Java", icon: <FaJava className="w-4 h-4 text-pink-500 " /> },
      { name: "Go", icon: <FaGolang className="w-4 h-4 text-blue-500 " /> },
      {
        name: "JavaScript",
        icon: <FaJs className="w-4 h-4 text-yellow-500 " />,
      },
    ],
  },

  {
    icon: CpuIcon,
    title: "Backend",
    color: "text-green-400",
    skills: [
      {
        name: "SpringBoot",
        icon: <FaJava className="w-4 h-4 text-[#62df3c]" />,
      },
      {
        name: "Node.js",
        icon: <FaNodeJs className="w-4 h-4 text-[#339933]" />,
      },
    ],
  },
  {
    icon: Database,
    title: "Database",
    color: "text-green-400",
    skills: [
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="w-4 h-4 text-[#336791]" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="w-4 h-4 text-[#47A248]" />,
      },
    ],
  },
  {
    icon: GalleryVerticalEnd,
    title: "Frontend",
    color: "text-blue-400",
    skills: [
      { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="w-4 h-4 text-white" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" />,
      },
      {
        name: "HTML5",
        icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" />,
      },
      {
        name: "CSS3",
        icon: <BsFileEarmarkCode className="w-4 h-4 text-[#1572B6]" />,
      },
    ],
  },

  {
    icon: Cpu,
    title: "Tools & Technologies",
    color: "text-pink-400",
    skills: [
      {
        name: "VS Code",
        icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" />,
      },
      {
        name: "Docker",
        icon: <FaDocker className="w-4 h-4 text-[#2496ED]" />,
      },
      
      { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
      { name: "Linux", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
      {
        name: "REST APIs",
        icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" />,
      },
      { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-white" /> },
      { name: "Vite", icon: <SiVite className="w-4 h-4 text-[#ffe344]" /> },
    ],
  },
];
