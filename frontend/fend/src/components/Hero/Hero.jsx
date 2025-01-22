import React from 'react';

function Hero() {
  return (
    <section
      className="relative h-[70vh] bg-center bg-cover"
      style={{ backgroundImage: 'url("/image1.png")' }} 
    >
      {/* 
        Overlay for darkening + text 
        absolute inset-0 => fill entire section
        bg-black/40 => 40% black overlay
        text-white => white text
        flex flex-col justify-center => vertically center text
        px-8 => horizontal padding
        max-w-screen-xl => limit max width on large screens
        mx-auto => center horizontally 
      */}
      <div className="absolute inset-0 bg-black/40 text-white flex flex-col justify-center px-8 max-w-screen-xl mx-auto">
        <h1 className="text-5xl mb-4">Welcome to Gates</h1>
        <p className="max-w-xl">
          Get the latest news on your favourite mangas, anime and manhwas around the world!
        </p>
        
        {/* Email input and button */}
        <div className="mt-4 flex max-w-sm">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 outline-none flex-1"
          />
          <button className="bg-white text-black px-4 py-2 font-bold">
            Subscribe
          </button>
        </div>

        {/* Side category links (optional) */}
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
