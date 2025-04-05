import React from "react";
import "./style.css";
import { BlogsArrayList } from "@/data/BlogsContent";
import BlogItem from "../blog-item";
import Title from "../title";

export default function BlogList() {
  return (
    <section className="blog-section" id="blogs">
        <Title as="h2" text="Recent Blogs"/>
      <div className="blog-list">
        {BlogsArrayList.map((blog) => (
          <BlogItem
            key={blog.id}
            title={blog.title}
            link={blog.link}
            date={blog.date}
          />
        ))}
      </div>
    </section>
  );
}
