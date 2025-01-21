import React from 'react';
import { Link } from 'react-router-dom';  // <-- Import Link
import './Navbar.css';
import '../../Routers/AppRoutes'


const Navbar = () => {
  return (
    <nav className="navbar">
      <div  className="navbar-logo">MangaMotive</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/chapter">Anime</Link></li>
        <li><Link to="">Manga</Link></li>
        <li><Link>Manhwa</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Sign Up</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
