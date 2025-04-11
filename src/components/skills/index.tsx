import SkillsList from "../../constants/SkillsList";
import SkillCard from "../ui/skill-card";
import Title from "../ui/title";

export default function Skills() {
  return (
    <div id="skills" className="skill-container flex flex-col  items-center ">
      <Title content="Skills"/>
      <div className="skill  flex flex-wrap gap-8 justify-center   p-4">
        {SkillsList.map((skills) => {
          return <SkillCard {...skills} key={skills.title} />;
        })}
      </div>
    </div>
  );
}
