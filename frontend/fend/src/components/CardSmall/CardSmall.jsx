import React from 'react';

function CardSmall({ image, title, date, excerpt }) {
  return (
    
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
      
      {/* 
        - w-full => fill width on mobile so the image is top and center
        - sm:w-[80px] => switch to a fixed 80px width on bigger screens
        - h-[80px] => fixed height
        - bg-cover / bg-center => background positioning
        - flex-shrink-0 => image won't shrink if container is tight
      */}
      <div
        className="w-full sm:w-[80px] h-[80px] bg-center bg-cover flex-shrink-0"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* 
        - flex => if we want to manipulate text further
        - flex-col => stack text items vertically
        - mt-2 => small top margin on mobile, so text isn't flush against image
        - sm:mt-0 => remove that margin on bigger screens
      */}
      <div className="flex flex-col mt-2 sm:mt-0">
        {/* text-base => ~1rem font size, font-semibold => semi-bold */}
        <h4 className="text-base font-semibold m-0">{title}</h4>
        <span className="text-sm text-gray-600">{date}</span>

        {excerpt && (
          <p className="mt-2 text-sm text-gray-700">
            {excerpt}
          </p>
        )}
      </div>
    </div>
  );
}

export default CardSmall;
