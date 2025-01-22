import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  // Track whether mobile menu is open
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-col md:flex-row md:items-center md:justify-between px-6 py-4 bg-gray-100">
      {/* Top bar: brand + hamburger button (visible on mobile) */}
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold">MangaMotive</div>

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
      {/* 
        On mobile:
          - hidden if isOpen === false
          - block if isOpen === true
        On md+ screens:
          - always flex
      */}
      <ul
        className={`flex-col mt-4 md:mt-0 md:flex md:flex-row md:items-center md:gap-6
          ${isOpen ? 'flex gap-4' : 'hidden'}
        `}
      >
        <li>
          <Link
            to="/"
            className="underline-from-center hover:text-gray-600 transition-colors py-2"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/chapter"
            className="underline-from-center hover:text-gray-600 transition-colors py-2"
          >
            Anime
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="underline-from-center hover:text-gray-600 transition-colors py-2"
          >
            Manga
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="underline-from-center hover:text-gray-600 transition-colors py-2"
          >
            Manhwa
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="underline-from-center hover:text-gray-600 transition-colors py-2"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/register"
            className="underline-from-center hover:text-gray-600 transition-colors py-2"
          >
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
