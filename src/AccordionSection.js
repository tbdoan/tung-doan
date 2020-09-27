import React from 'react';

const AccordionSection = ({ title, techs, description, link }) => {
  return (
    <section class="accordion-item">
      <h2>{title}</h2>
      <div class="accordion-item-content">
        <p style={{ marginBottom: 0 }}>
          {description}{' '}
          {link ? (
            <span>
              Source <a href={link}>here.</a>{' '}
            </span>
          ) : (
            ''
          )}
        </p>
        <p
          style={{
            fontStyle: 'italic',
            color: 'lightgrey',
            margin: '0',
          }}
        >
          {techs}
        </p>
      </div>
    </section>
  );
};

export default AccordionSection;
