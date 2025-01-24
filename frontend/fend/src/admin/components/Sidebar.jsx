import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen flex flex-col">
      <h2 className="text-2xl font-bold p-4">Admin Panel</h2>
      <ul className="space-y-4 px-4">
        <li>
          <Link to="/admin/blogs" className="hover:text-gray-300">
            Blogs
          </Link>
        </li>
        <li>
          <Link to="/admin/blogs/create" className="hover:text-gray-300">
            Create Blog
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
