import React from 'react';

const Section = ({ title, subtitle, dark, id }) => {
  return (
    <div
      style={{ minHeight: '100vh' }}
      className={'section' + (dark ? ' section-dark' : '')}
      id={id}
    >
      <div className="section-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Section;
