import { ProjectsType } from "../../../constants/ProjectsList";

const ProjectCard = (props: ProjectsType) => {
  const { imageUrl, title, liveLink, codeLink, stack, tags = [] } = props;
  return (
    <div className="max-w-sm rounded-2xl shadow-xl overflow-hidden card-border bg-[var(--primary)]">
      <img
        className="w-full h-48 object-cover"
        src={imageUrl}
        alt={`${title} Screenshot`}
      />

      <div className="p-5">
        {/* Title */}
        <h2 className="text-xl font-bold mb-2">{title}</h2>

        {/* Links */}
        <div className="flex space-x-4 mb-4">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:underline font-medium"
            >
              🌐 Live
            </a>
          )}
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline font-medium"
          >
            💻 Code
          </a>
        </div>

        {/* Stack */}
        <p className="text-sm mb-3">
          <strong>Stack:</strong> {stack}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className=" bg-[var(--background)] text-xs font-semibold px-2.5 py-0.5 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
