import { ReactNode } from "react";
import { IconType } from "react-icons";

export type SkillTagType = {
    name: string;
    icon: ReactNode;
  };

  export type SkillCardType = {
    icon : IconType,
    title : string,
    color:string,
    skills :  SkillTagType[]
  }