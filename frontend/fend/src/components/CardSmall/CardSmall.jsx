// src/components/CardSmall/CardSmall.jsx
import React from 'react';

function CardSmall({ image, title, date, excerpt }) {
  return (
    <div className="flex gap-2 mb-4">
      <div
        className="w-[80px] h-[80px] bg-center bg-cover flex-shrink-0"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="flex flex-col justify-center">
        <h4 className="m-0 text-base font-semibold">{title}</h4>
        <span className="text-sm text-gray-600">{date}</span>
        {excerpt && (
          <p className="mt-2 text-sm text-gray-700">{excerpt}</p>
        )}
      </div>
    </div>
  );
}

export default CardSmall;
