import React from 'react';

const Contact = ({ title, subtitle, dark, id }) => {
  return (
    <div
      style={{ minHeight: '100vh' }}
      className={'section' + (dark ? ' section-dark' : '')}
      id={id}
    >
      <div className="section-content">
        <h1>Email: tbdoan@ucsd.edu</h1>
        <p>( hit me up (: ))</p>
      </div>
    </div>
  );
};

export default Contact;
