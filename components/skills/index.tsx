"use client";
import React from "react";
import SkillBox from "./box";
import { SkillPropTypes } from "@/types";
import {
  BackendTechnologiesArrayList,
  DatabaseArrayList,
  FrontendTechnologiesArrayList,
  OtherSkillsArrayList,
  ProgrammingLanguagesArrayList,
} from "@/data/SkillsContent";
import "./style.css";
import Title from "../title";

// Skill categories with their display names
const SKILL_SECTIONS = [
  { title: "Programming Languages", data: ProgrammingLanguagesArrayList },
  { title: "Backend Technologies", data: BackendTechnologiesArrayList },
  { title: "Frontend Technologies", data: FrontendTechnologiesArrayList },
  { title: "Databases", data: DatabaseArrayList },
  { title: "Other Skills", data: OtherSkillsArrayList },
];

export default function Skills() {
  return (
    <section className="skills-container" id="skills">
      <Title text="Skills" />
      {SKILL_SECTIONS.map((section) => (
        <div key={section?.title} className="skills-section">
          <Title as="h3" text={section?.title} />
          <div className="skills-row">
            {section?.data?.map((skill: SkillPropTypes) => (
              <SkillBox key={skill?.id} {...skill} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
