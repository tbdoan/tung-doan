import React from 'react';

const Landing = ({ dark, id }) => {
  return (
    <div
      style={{ minHeight: '100vh', textAlign: 'center' }}
      className={'section' + (dark ? ' section-dark' : '')}
      id={id}
    >
      <div className="section-content">
        <h1>Tung Doan</h1>
        <p>Tastes Like Teen Spirit</p>
      </div>
    </div>
  );
};

export default Landing;
