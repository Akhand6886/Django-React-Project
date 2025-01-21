// src/components/Footer/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white p-8">
      <div className="max-w-screen-xl mx-auto">
        <h3 className="mb-4 text-xl font-bold">Gates</h3>
        <p className="leading-relaxed">
          Gates is a blog that focuses on Japanese art and anime...
        </p>
        <div className="flex justify-between mt-8">
          <p>© 2025 Gates. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#twitter" className="text-white">Twitter</a>
            <a href="#youtube" className="text-white">YouTube</a>
            <a href="#instagram" className="text-white">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
