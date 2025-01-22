import React from 'react';

function CardLarge({ image, category, date, title, excerpt }) {
  return (
    <div className="flex gap-4 mb-4">
      {/* 
        - w-1/2  => 50% width
        - bg-center bg-cover => center the background image
        - min-h-[200px] => ensure a minimum height
      */}
      <div
        className="w-1/2 bg-center bg-cover min-h-[200px]"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* 
        - w-1/2 => other 50%
        - flex flex-col justify-center => vertical alignment for the text block
      */}
      <div className="w-1/2 flex flex-col justify-center">
        {/* 
          - text-sm => small font
          - text-gray-500 => lighter gray color
          - mb-2 => margin bottom 
        */}
        <span className="text-sm text-gray-500 mb-2">
          {category} | {date}
        </span>

        {/* 
          - text-lg => slightly larger text
          - font-semibold => semi-bold
          - mb-2 => margin bottom
        */}
        <h3 className="text-lg font-semibold mb-2">{title}</h3>

        {/* 
          - text-gray-700 => medium gray
          - mb-3 => margin bottom
        */}
        <p className="text-gray-700 mb-3">{excerpt}</p>

        {/* 
          - text-black => black text
          - font-bold => bold
          - underline => underlined link
        */}
        <a href="#readMore" className="text-black font-bold underline">
          Read Full →
        </a>
      </div>
    </div>
  );
}

export default CardLarge;
