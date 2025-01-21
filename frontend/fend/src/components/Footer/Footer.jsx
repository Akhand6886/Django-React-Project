import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <h3>Gates</h3>
        <p>
          Gates is a blog that focuses on Japanese art and anime. 
          We feature information on unique conventions and other insights into the world of anime, 
          manga, and artists as well as plenty of news about art and cartoon creation in the Japanese culture.
        </p>
        <div className="footer-bottom">
          <p>© 2025 Gates. All rights reserved.</p>
          <div className="footer-social">
            <a href="#twitter">Twitter</a>
            <a href="#youtube">YouTube</a>
            <a href="#instagram">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
