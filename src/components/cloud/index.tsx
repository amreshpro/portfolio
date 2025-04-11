import { Cloud, renderSimpleIcon } from "react-icon-cloud";
import * as simpleIcons from "simple-icons";

const icons = [
  simpleIcons.siSpringboot,
  simpleIcons.siGo,
  simpleIcons.siJavascript,
  simpleIcons.siReact,
  simpleIcons.siTailwindcss,
  simpleIcons.siHtml5,
  simpleIcons.siCss3,
  simpleIcons.siNodedotjs,
  simpleIcons.siMongodb,
  simpleIcons.siPostgresql,
  simpleIcons.siGit,
  simpleIcons.siLinux,
  simpleIcons.siGithub,
  simpleIcons.siDocker,
  simpleIcons.siLeetcode,
  simpleIcons.siHackerrank,
  simpleIcons.siMedium,
  simpleIcons.siSpring,
  simpleIcons.siPostman,
  simpleIcons.siPostgresql,
  simpleIcons.siMysql
];

const cloudOptions = {
  id: "skill-cloud",
  options: {
    tooltip: "native" as const,
    reverse: true,
    depth: 1,
    imageScale: 2,
    initial: [0.2, -0.2],
    outlineColour: "#0000",
    clickToFront: 500,
    wheelZoom: false,
  },
  canvasProps: {
    style: {
      width: "100%",
      height: "400px",
      maxWidth: "700px",
    },
  },
};

export default function CloudGlobe() {
  return (
    <div className="flex justify-center items-center p-6">
      <Cloud {...cloudOptions}>
        {icons.map((icon) =>
          renderSimpleIcon({
            icon,
            size: 42,
            aProps: {
              href: "#",
              title: icon.title,
              onClick: (e) => e.preventDefault(),
            },
          })
        )}
      </Cloud>
    </div>
  );
}
