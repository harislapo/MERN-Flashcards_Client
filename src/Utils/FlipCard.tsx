import React from 'react';
import './FlipCard.css';

const FlipCard = (props: { card: string }) => {
  return (
    <li className="FlipCard">
      {props.card}
      <button onClick={() => {}}>X</button>
    </li>
  );
};

export default FlipCard;
