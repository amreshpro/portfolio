import { FaExternalLinkAlt } from "react-icons/fa";
import { ProfileCardType } from "../../../types";

const ProblemSolvingCard = (props:ProfileCardType) => {

    const { platform, username, link, icon, stats } = props
  return (
    <div className="flex items-center gap-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md p-5 hover:shadow-lg transition-all">
      {/* Icon */}
      <div className="text-4xl text-[#6366F1]">{icon}</div>

      {/* Info */}
      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          {platform}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">@{username}</p>

        {/* Stats */}
        {stats && (
          <ul className="text-xs text-gray-500 dark:text-gray-400 mt-2 space-y-1">
            {stats.map((s, i) => (
              <li key={i}>• {s}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Link */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-500 hover:text-indigo-700"
      >
        <FaExternalLinkAlt />
      </a>
    </div>
  );
};

export default ProblemSolvingCard;
