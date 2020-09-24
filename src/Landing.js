import React from 'react';

const Landing = ({ dark, id }) => {
  return (
    <div
      style={{ minHeight: '100vh', textAlign: 'center' }}
      className={'section' + (dark ? ' section-dark' : '')}
      id={id}
    >
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <div id="name-card" className="section-content">
        <h1>Tung Doan</h1>
        <p>✨ Spent way too long animating this ✨</p>
      </div>
    </div>
  );
};

export default Landing;
