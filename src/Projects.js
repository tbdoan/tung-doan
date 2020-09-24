import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Projects = ({ id }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'gray',
        backgroundImage: show
          ? 'url("https://media.allure.com/photos/59b020b3981e2a240fc6a0bb/master/pass/poop-color-wellness.jpg")'
          : 'inherit',
      }}
      className="section"
      id={id}
    >
      <Accordion className="container project-accordion">
        <Card>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              onClick={() => setShow(true)}
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
                Technologies used: Electron, jQuery, Puppeteer, sci-kit learn,
                Keras, Jupyter Notebook
              </p>
              Desktop app that uses a machine learning algorithm to predict win
              rates in the loading screen of a League of Legends match. Source
              code <a href="https://github.com/DhanviDesu/Dodgepog">here</a>.
              <br />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              className="project-title"
              variant="link"
              eventKey="1"
            >
              <h5>Spotiqueue</h5>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <p
                style={{ fontStyle: 'italic', color: 'rgba(255,255,255, 0.7)' }}
              >
                Technologies used: Typescript, Node, Express, Firebase, Postman
              </p>
              SMS app that allows hosts to create a room and guests to add songs
              to the host's queue by sending a short code followed by a song
              link. Uses the Spotify and Twilio APIs. Source code{' '}
              <a href="https://github.com/tbdoan/qmeup">here</a>.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default Projects;
