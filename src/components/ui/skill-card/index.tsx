import { SkillCardType, SkillTagType } from "../../../types";
import SkillTag from "../skill-tag";

export default function SkillCard(props: SkillCardType) {
  const { icon: Icon, title, skills } = props;
  return (
    <div className="p-4 card-border shadow rounded-2xl bg-[var(--primary)] flex flex-col gap-5  items-center w-fit h-fit ">
      <div className="content flex gap-4 justify-center items-center">
        <Icon className="" size={30} />
        <h2 className={"text-2xl"}>{title}</h2>
      </div>
      <div className="skills flex flex-wrap justify-center gap-5 p-5">
        {skills.map((skill: SkillTagType) => {
          const { name, icon } = skill;
          return <SkillTag key={name + Icon} name={name} icon={icon} />;
        })}
      </div>
    </div>
  );
}
