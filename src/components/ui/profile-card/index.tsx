import { FaExternalLinkAlt } from "react-icons/fa";
import { ProfileCardType } from "../../../types";

export default function ProfileCard(props: ProfileCardType) {
  const { platform, username, link, icon, stats } = props;
  return (
    <div className="flex items-center gap-4 bg-[var(--primary)] card-border rounded-xl shadow-md p-5 hover:shadow-lg transition-all">
     
      {/* Icon */}
      <div className="text-7xl text-[#6366F1]">{icon}</div>

      {/* Info */}
      <div className="flex-1">
        <h3 className="text-2xl font-bold ">{platform}</h3>
        <p className="text-lg ">@{username}</p>

        {/* Stats */}
        {stats && (
          <ul className="text-lg  mt-2 space-y-1">
            {stats.map((s, i) => (
              <li key={i}>• {s}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Link */}
      <a href={link} target="_blank" rel="noopener noreferrer" className="">
        <FaExternalLinkAlt size={30}  className="text-blue-500"/>
      </a>
    </div>
  );
}
