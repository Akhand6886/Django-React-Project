// src/components/Navbar/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-100">
      <div className="text-xl font-bold">MangaMotive</div>
      <ul className="flex gap-6">
        <li>
          <Link to="/" className="hover:text-gray-600 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link to="/chapter" className="hover:text-gray-600 transition-colors">
            Anime
          </Link>
        </li>
        <li>
          <Link to="" className="hover:text-gray-600 transition-colors">
            Manga
          </Link>
        </li>
        <li>
          <Link to="" className="hover:text-gray-600 transition-colors">
            Manhwa
          </Link>
        </li>
        <li>
          <Link to="/login" className="hover:text-gray-600 transition-colors">
            Login
          </Link>
        </li>
        <li>
          <Link to="/register" className="hover:text-gray-600 transition-colors">
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
