import React from "react";
import "./style.css";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface TitleProps {
  text: string;
  as?: HeadingLevel; // default = h2
  className?: string;
}

export default function Title({ text, as = "h2", className = "" }: TitleProps) {
  const HeadingTag = as;

  return <HeadingTag className={`section-title ${className}`}>{text}</HeadingTag>;
}
