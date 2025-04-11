import { Link } from "react-router-dom";

interface BlogItemProps {
  title: string;
  link: string;
  date?: string;
}

export default function BlogCard({ title, link, date }: BlogItemProps) {
  return (
    <div className="bg-[var(--background)] rounded-2xl p-4  underline hover:text-blue-500">
      <Link
        to={link}
        className="blog-item  rounded-2xl"
      >
        <h3 className="blog-title">{title}</h3>
        {date && <p className="blog-date">{new Date(date).toDateString()}</p>}
      </Link>
    </div>
  );
}
