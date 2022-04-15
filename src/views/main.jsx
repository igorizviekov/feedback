import '../styles/Styles.scss';
import React from 'react';
import Card from '../components/Card';
import About from '../components/About';
import { mockData } from '../helpers/mockdata';
export default function Main() {
  return (
    <div className='main-container'>
      <div className='main'>
        <About />
        {mockData.map((card) => (
          <Card
            title={card.title}
            content={card.content}
            key={card.id}
            cardId={card.id}
          />
        ))}
      </div>
    </div>
  );
}
