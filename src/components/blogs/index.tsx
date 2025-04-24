import BlogsList from "../../constants/BlogsList";
import BlogCard from "../ui/blog-card";
import Title from "../ui/title";

export default function Blogs() {
  return (
    <section id="blogs" className=" flex flex-col  items-center">
        <Title as="h1" content="Recent Blogs" />
      <div
        className="blog-section my-8 p-4 rounded-2xl bg-[var(--primary)] max-h-[500px]  overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 "
        id="blogs"
      >
        <div className="blog-list card-border rounded-2xl  flex flex-col justify-center  gap-2 p-4  ">
          {BlogsList.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              link={blog.link}
              date={blog.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
