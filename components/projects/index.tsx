import React from "react";
import "./style.css";
import Title from "../title";
import ProjectCard from "../project-card";
import { ProjectsArrayList } from "@/data/ProjectContent";

export default function Projects() {
  return (
    <div className="projects">
      <Title text="Projects" />
      {ProjectsArrayList?.map((project) => {
        return <ProjectCard key={project?.id} {...project} />;
      })}
    </div>
  );
}
