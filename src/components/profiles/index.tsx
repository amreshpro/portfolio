import { SiLeetcode, SiHackerrank } from "react-icons/si";
import Title from "../ui/title";
import ProfileCard from "../ui/profile-card";

export default function Profiles() {
  return (
    <div id="profiles" className="profiles  flex flex-col justify-center items-center ">
      <Title as="h1" content="Problem Solving "/>
      <div className="profiles-container  flex flex-wrap justify-center items-center gap-8 my-8">
        <ProfileCard
          platform="LeetCode"
          username="amreshpro"
          link="https://leetcode.com/amreshpro"
          icon={<SiLeetcode />}
          stats={["Solved: 28+"]}
        />

        <ProfileCard
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
