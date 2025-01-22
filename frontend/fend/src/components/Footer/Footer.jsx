import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white p-8">
      <div className="max-w-screen-xl mx-auto">
        <h3 className="mb-4 text-xl font-bold">Gates</h3>
        <p className="leading-relaxed">
          Gates is a blog that focuses on Japanese art and anime. We feature
          information on unique conventions and insights into the world of
          anime, manga, and artists, as well as plenty of news about art and
          cartoon creation in Japanese culture.
        </p>
        
        <div className="flex flex-col sm:flex-row sm:justify-between mt-8">
          <p className="mb-4 sm:mb-0">© 2025 Gates. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#twitter" className="text-white hover:underline">Twitter</a>
            <a href="#youtube" className="text-white hover:underline">YouTube</a>
            <a href="#instagram" className="text-white hover:underline">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
