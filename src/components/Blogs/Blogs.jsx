import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
export default function Blogs({ handleToAddBookmarks, handleMarkAsRead }) {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3">
      <h1 className="text-3xl font-bold">Blogs: {blogs.length}</h1>
      {blogs.map((blog) => (
        <Blog
          handleToAddBookmarks={handleToAddBookmarks}
          handleMarkAsRead={handleMarkAsRead}
          key={blog.id}
          blog={blog}
        ></Blog>
      ))}
    </div>
  );
}

Blogs.propTypes = {
  handleToAddBookmarks: PropTypes.func,
};
