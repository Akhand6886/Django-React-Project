// src/components/CardLarge/CardLarge.jsx
import React from 'react';

function CardLarge({ image, category, date, title, excerpt }) {
  return (
    <div className="flex gap-4 mb-4">
      <div
        className="w-1/2 bg-center bg-cover min-h-[200px]"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="w-1/2 flex flex-col justify-center">
        <span className="text-sm text-gray-500 mb-2">
          {category} | {date}
        </span>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-3">{excerpt}</p>
        <a href="#readMore" className="text-black font-bold underline">
          Read Full →
        </a>
      </div>
    </div>
  );
}

export default CardLarge;
