import Image from "next/image";
import "./style.css";

export default function SkillBox({
  name,
  image_url,
}: {
  name: string;
  image_url: string;
}) {
  return (
    <div className="box">
      <div className="content">
        <Image
          unoptimized={true}
          width={46}
          height={46}
          src={image_url}
          alt={name}
        />
        <h3>{name}</h3>
      </div>
    </div>
  );
}
