import { SiLeetcode, SiHackerrank } from "react-icons/si";
import ProblemSolvingCard from "../ui/profile-card";
import Title from "../ui/title";

export default function Profiles() {
  return (
    <div className="profiles  flex flex-col justify-center items-center ">
      <Title as="h1" content="Problem Solving "/>
      <div className="profiles-container  flex flex-wrap justify-center items-center gap-8 my-8">
        <ProblemSolvingCard
          platform="LeetCode"
          username="amreshpro"
          link="https://leetcode.com/amreshpro"
          icon={<SiLeetcode />}
          stats={["Solved: 20+"]}
        />

        <ProblemSolvingCard
          platform="HackerRank"
          username="amreshpro"
          link="https://www.hackerrank.com/amreshpro"
          icon={<SiHackerrank />}
          stats={["4⭐ in Problem Solving"]}
        />
      </div>
    </div>
  );
}
