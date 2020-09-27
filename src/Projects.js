import React, { useState } from 'react';

const Projects = ({ id }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: show
          ? 'url("https://media.allure.com/photos/59b020b3981e2a240fc6a0bb/master/pass/poop-color-wellness.jpg")'
          : 'linear-gradient(to top right, #00f260, #0575e6)',
      }}
      className="section"
      id={id}
    >
      <div class="accordion">
        <section class="accordion-item">
          <h1>Section 1</h1>
          <div class="accordion-item-content">
            <p>Content for section 1</p>
          </div>
        </section>
        <section class="accordion-item">
          <h1>Section 2</h1>
          <div class="accordion-item-content">
            <p>Content for section 2</p>
          </div>
        </section>
        <section class="accordion-item accordion-item--default">
          <h1>Section 3</h1>
          <div class="accordion-item-content">
            <p>Content for section 3</p>
            <p>This is my default state.</p>
          </div>
        </section>
        <section class="accordion-item">
          <h1>Section 4</h1>
          <div class="accordion-item-content">
            <p>Content for section 4</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
