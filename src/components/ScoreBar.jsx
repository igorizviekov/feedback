import React from 'react';
import ScoreBarItem from './ScoreBarItem';
export default function ScoreBar({ score }) {
  return (
    <div className='score-bar'>
      <ScoreBarItem value={1} score={score} />
      <ScoreBarItem value={2} score={score} />
      <ScoreBarItem value={3} score={score} />
      <ScoreBarItem value={4} score={score} />
      <ScoreBarItem value={5} score={score} />
      <ScoreBarItem value='n/a' score={score} />
    </div>
  );
}
