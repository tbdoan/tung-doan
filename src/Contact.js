import React from 'react';

const Contact = ({ title, subtitle, dark, id }) => {
  return (
    <div style={{ minHeight: '100vh' }} className={'section contact'} id={id}>
      <div className="section-content">
        <h1>Email: tbdoan@ucsd.edu</h1>
        <h1>Number: 510.299.9709</h1>
      </div>
    </div>
  );
};

export default Contact;
