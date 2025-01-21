// src/components/SectionHeading/SectionHeading.jsx
import React from 'react';

function SectionHeading({ title }) {
  return (
    <div>
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  );
}

export default SectionHeading;
