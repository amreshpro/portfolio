import React from "react";
import "./style.css";
import { BLOGS } from "@/data/BLOGS";
import BlogItem from "../blog-item";
import Title from "../title";

export default function BlogList() {
  return (
    <section className="blog-section" id="blogs">
        <Title as="h2" text="Recent Blogs"/>
      <div className="blog-list">
        {BLOGS.map((blog) => (
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
