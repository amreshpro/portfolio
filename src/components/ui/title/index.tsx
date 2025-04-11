import { JSX } from "react";

type TitleType = {
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  content: string;
};

export default function Title({ className = "p-2 px-4 w-fit rounded-2xl text-center bg-[var(--primary)] card-border", as = "h1", content='' }: TitleType) {
  const Tag = as;
  return <Tag className={className}>{content}</Tag>;
}
