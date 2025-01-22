import React from 'react';

function SectionHeading({ title }) {
  return (
    <div>
      {/* 
        text-2xl => ~1.5rem
        font-bold => bold
      */}
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  );
}

export default SectionHeading;
