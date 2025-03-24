import React from "react";
import Link from "next/link";

interface BlogItemProps {
  title: string;
  link: string;
  date?: string;
}

export default function BlogItem({ title, link, date }: BlogItemProps) {
  return (
    <Link href={link} className="blog-item">
      <h3 className="blog-title">{title}</h3>
      {date && <p className="blog-date">{new Date(date).toDateString()}</p>}
    </Link>
  );
}
