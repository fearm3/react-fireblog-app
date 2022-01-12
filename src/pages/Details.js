import React, { useContext } from "react";
import BlogCard from "../components/BlogCard";
import { BlogContext } from "../contexts/BlogContext";

const Details = () => {
  const { blogsInfo, getBlogs, isLoading } = useContext(BlogContext);
  console.log(blogsInfo);
  return (
    <div>
      <BlogCard />
    </div>
  );
};

export default Details;
