import React, { Fragment } from 'react';
import ScoreBar from './ScoreBar';

export default function Card({ title, content, cardId }) {
  return (
    <>
      <h1>{title}</h1>
      {content.map((item) => (
        <div key={cardId + item.stat} className='card-scores-section'>
          <p>{item.description}</p>
          <ScoreBar score={item.stat} />
        </div>
      ))}
    </>
  );
}
