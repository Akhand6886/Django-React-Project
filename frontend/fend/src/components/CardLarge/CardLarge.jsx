import React from 'react';
import './CardLarge.css';

const CardLarge = ({ image, category, date, title, excerpt }) => {
  return (
    <div className="card-large">
      <div
        className="card-large-img"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="card-large-content">
        <span className="card-large-category">{category} | {date}</span>
        <h3>{title}</h3>
        <p>{excerpt}</p>
        <a href="#readMore">Read Full →</a>
      </div>
    </div>
  );
};

export default CardLarge;
