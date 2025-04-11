import { SkillTagType } from "../../../types";



export default function SkillTag(props: SkillTagType) {
  const { name, icon } = props;
  return (
    <div className="flex justify-center items-center rounded-3xl border w-fit p-2 gap-2">
      {icon}
      <p>{name}</p>
    </div>
  );
}
