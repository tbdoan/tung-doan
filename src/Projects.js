import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Projects = ({ dark, id }) => {
  return (
    <div
      style={{ minHeight: '100vh' }}
      className={'section' + (dark ? ' section-dark' : '')}
      id={id}
    >
      <Accordion className="container project-accordion">
        <Card>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              className="project-title"
              eventKey="0"
            >
              <h5>DodgePOG</h5>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p
                style={{ fontStyle: 'italic', color: 'rgba(255,255,255, 0.7)' }}
              >
                Technologies used: Electron, jQuery, Puppeteer, Keras, Jupyter
                Notebook
              </p>
              Desktop app that uses a machine learning algorithm to predict win
              rates in the loading screen of a League of Legends match. <br />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default Projects;
