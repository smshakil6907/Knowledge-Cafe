import PropTypes from "prop-types";
import React from "react";
import { FaBookmark } from "react-icons/fa";
export default function Blog({ blog, handleToAddBookmarks, handleMarkAsRead }) {
  const {
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-11">
      <img src={cover} alt={`Cover picture of the title ${title}`} />
      <div className="flex justify-between">
        <div className="flex mt-5">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl font-bold">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="mt-5">
          <span>{reading_time} min read</span>
          <button onClick={() => handleToAddBookmarks(blog)} className="ml-2">
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-4xl mt-5 font-bold">{title}</h2>
      <p className="mt-3">
        {hashtags.map((hash) => (
          <span>
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
      <button
        className="text-purple-800 font-bold underline"
        onClick={() => handleMarkAsRead(reading_time)}
      >
        Mark as read
      </button>
    </div>
  );
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
