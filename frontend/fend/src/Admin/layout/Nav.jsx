import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AdminName, Logout } from "../Api/Api";

function Nav() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // Check if admin is logged in
  const isAdmin = !!AdminName();

  const handleLogout = () => {
    Logout();
    navigate("/Login");
  };

  return (
    <nav className="flex flex-col md:flex-row md:items-center md:justify-between px-6 py-4 bg-gray-100 border-b shadow-md">
      {/* Top bar: brand + hamburger button (visible on mobile) */}
      <div className="flex items-center justify-between">
        <Link to="/" className="text-xl font-bold hover:text-indigo-600 transition">
          MangaMotive
        </Link>

        {/* Hamburger button - hidden on md+ screens */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 hover:text-gray-600 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Menu items */}
      <ul
        className={`flex-col mt-4 md:mt-0 md:flex md:flex-row md:items-center md:gap-6
          ${isOpen ? "flex gap-4" : "hidden"}
        `}
      >
        {/* Public Links */}
        <li>
          <Link
            to="/"
            className="font-bold hover:text-gray-600 transition-colors py-2"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/chapter"
            className="font-bold hover:text-gray-600 transition-colors py-2"
          >
            Anime
          </Link>
        </li>
        <li>
          <Link
            to="/manga"
            className="font-bold hover:text-gray-600 transition-colors py-2"
          >
            Manga
          </Link>
        </li>
        <li>
          <Link
            to="/manhwa"
            className="font-bold hover:text-gray-600 transition-colors py-2"
          >
            Manhwa
          </Link>
        </li>

        {/* Authentication Links */}
        {!isAdmin && (
          <>
            <li>
              <Link
                to="/login"
                className="font-bold hover:text-gray-600 transition-colors py-2"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="font-bold hover:text-gray-600 transition-colors py-2"
              >
                Sign Up
              </Link>
            </li>
          </>
        )}

        {/* Admin Panel Links */}
        {isAdmin && (
          <>
            <li>
              <Link
                to="/Admin"
                className="font-bold hover:text-gray-600 transition-colors py-2"
              >
                Admin Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/Admin/Posts"
                className="font-bold hover:text-gray-600 transition-colors py-2"
              >
                Manage Posts
              </Link>
            </li>
            <li>
              <Link
                to="/Admin/Categories"
                className="font-bold hover:text-gray-600 transition-colors py-2"
              >
                Manage Categories
              </Link>
            </li>
            <li>
              <Link
                to="/Admin/Inbox"
                className="font-bold hover:text-gray-600 transition-colors py-2"
              >
                Inbox
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-gray-600 font-medium">{AdminName()}</span>
              <img
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                className="w-8 h-8 rounded-full border"
                alt="Admin Avatar"
              />
              <button
                onClick={handleLogout}
                className="text-gray-500 hover:text-red-600 transition focus:outline-none"
              >
                <FontAwesomeIcon icon={faArrowRightFromBracket} size="lg" />
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
