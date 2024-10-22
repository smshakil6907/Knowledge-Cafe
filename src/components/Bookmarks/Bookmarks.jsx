import PropTypes from "prop-types";
import React from "react";
import Bookmark from "../Bookmark/Bookmark";

export default function Bookmarks({ bookmarks, readingTime }) {
  return (
    <div className="md:w-1/3 bg-gray-300 ml-4 rounded-lg">
      <h1 className="text-2xl text-center font-bold text-purple-800">
        Reading Time: {readingTime} min
      </h1>
      <h3 className="text-2xl text-center">
        Bookmarked Blogs: {bookmarks.length}
      </h3>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
}

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
};
