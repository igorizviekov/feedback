import React from 'react';

export default function ScoreBarItem({ score, value }) {
  return (
    <div
      className={`score-bar-item${score === value ? ' active ' : ''}${
        value === 'n/a' ? ' last ' : ''
      }`}
    >
      {value}
    </div>
  );
}
