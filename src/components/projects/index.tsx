import ProjectsList from "../../constants/ProjectsList";
import ProjectCard from "../ui/project-card";
import Title from "../ui/title";

export default function Projects() {
  return (
    <div className="p-6  flex flex-col justify-center items-center">
      <Title as="h1" content="Projects" />
      <div className="project-list p-4">
        {ProjectsList?.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </div>
  );
};


