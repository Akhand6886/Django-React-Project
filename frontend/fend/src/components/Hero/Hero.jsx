// src/components/Hero/Hero.jsx
import React from 'react';

function Hero() {
  return (
    <section
      className="relative h-[70vh] bg-center bg-cover"
      style={{ backgroundImage: 'url("/image1.png")' }} 
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 text-white flex flex-col justify-center px-8 max-w-screen-xl mx-auto">
        <h1 className="text-5xl mb-4">Welcome to Gates</h1>
        <p className="max-w-xl">
          Get the latest news on your favourite mangas, anime and manhwas around the world!
        </p>
        <div className="mt-4 flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 outline-none flex-1"
          />
          <button className="bg-white text-black px-4 py-2 font-bold">
            Subscribe
          </button>
        </div>
        {/* side categories if desired */}
        <div className="absolute bottom-8 right-8 flex flex-col space-y-2">
          <a href="#action" className="text-white font-bold underline">
            Action
          </a>
          <a href="#romance" className="text-white font-bold underline">
            Romance
          </a>
          <a href="#fantasy" className="text-white font-bold underline">
            Fantasy
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
