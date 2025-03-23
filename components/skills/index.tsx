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

// Skill categories with their display names
const SKILL_SECTIONS = [
  { title: "Programming Languages", data: PROGRAMMING_LANGUAGES },
  { title: "Backend Technologies", data: BACKEND_TECHNOLOGY },
  { title: "Databases", data: DATABASE },
  { title: "Other Skills", data: OTHER_SKILLS },
];

export default function Skills() {
  return (
    <section className="skills-container">
      <h1 className="skills-title">Skills</h1>

      {SKILL_SECTIONS.map((section) => (
        <div key={section?.title} className="skills-section">
          <h3 className="section-title">{section?.title}</h3>
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
