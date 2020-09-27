import React, { useState } from 'react';
import {
  dodgepog,
  spotiqueue,
  mafia,
  seascape,
  skinalytics,
  smartfin,
} from './Text';
import AccordionSection from './AccordionSection';
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
      <div className="accordion">
        <h1>Projects</h1>
        <AccordionSection
          title={dodgepog.title}
          techs={dodgepog.techs}
          description={dodgepog.description}
          link={dodgepog.link}
        />
        <AccordionSection
          title={spotiqueue.title}
          techs={spotiqueue.techs}
          description={spotiqueue.description}
          link={spotiqueue.link}
        />
        <AccordionSection
          title={mafia.title}
          techs={mafia.techs}
          description={mafia.description}
          link={mafia.link}
        />
        <AccordionSection
          title={seascape.title}
          techs={seascape.techs}
          description={seascape.description}
          link={seascape.link}
        />
        <br />
        <h1>Experience</h1>
        <AccordionSection
          title={smartfin.title}
          techs={smartfin.techs}
          description={smartfin.description}
          link={smartfin.link}
        />
        <AccordionSection
          title={skinalytics.title}
          techs={skinalytics.techs}
          description={skinalytics.description}
          link={skinalytics.link}
        />
      </div>
    </div>
  );
};

export default Projects;
