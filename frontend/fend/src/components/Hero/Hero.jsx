import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      {/* Background image handled in CSS or inline style */}
      <div className="hero-overlay">
        <h1>Welcome to Gates</h1>
        <p>Get the latest news on your favourite mangas, anime and manhwas around the world!</p>
        <div className="hero-email-box">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
        {/* Example side category links (vertical) */}
        <div className="hero-categories">
          <a href="#action">Action</a>
          <a href="#romance">Romance</a>
          <a href="#fantasy">Fantasy</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
