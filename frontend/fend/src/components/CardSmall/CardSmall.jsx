import React from 'react';
import './CardSmall.css';

const CardSmall = ({ image, title, date, excerpt }) => {
  return (
    <div className="card-small">
      <div
        className="card-small-img"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="card-small-content">
        <h4>{title}</h4>
        <span>{date}</span>
        {excerpt && <p>{excerpt}</p>}
      </div>
    </div>
  );
};

export default CardSmall;
