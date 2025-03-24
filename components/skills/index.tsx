"use client";
import React from "react";
import SkillBox from "./box";
import { SkillPropTypes } from "@/types";
import {
  BACKEND_TECHNOLOGY,
  DATABASE,
  OTHER_SKILLS,
  PROGRAMMING_LANGUAGES,
} from "@/data/SKILLS";
import "./style.css";
import Title from "../ui/title";

// Skill categories with their display names
const SKILL_SECTIONS = [
  { title: "Programming Languages", data: PROGRAMMING_LANGUAGES },
  { title: "Backend Technologies", data: BACKEND_TECHNOLOGY },
  { title: "Databases", data: DATABASE },
  { title: "Other Skills", data: OTHER_SKILLS },
];

export default function Skills() {
  return (
    <section className="skills-container" id="skills">
      <Title text="Skills" />
      {SKILL_SECTIONS.map((section) => (
        <div key={section?.title} className="skills-section">
          <Title as="h3" text={section?.title} />
          <div className="skills-row">
            {section?.data.map((skill: SkillPropTypes) => (
              <SkillBox key={skill?.id} {...skill} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
