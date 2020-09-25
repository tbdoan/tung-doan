import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './base.css';

import Navbar from './Navbar';
import Profile from './Profile';
import Section from './Section';
import dummyText from './DummyText';
import Footer from './Footer';
import Landing from './Landing';
import Projects from './Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Landing dark={false} id="section1" />
        <Profile id="profile" />
        <Projects dark={true} id={'projects'} />
        <Section
          title="Contact Me"
          subtitle={dummyText}
          dark={false}
          id="contact"
        />
        <Footer />
      </div>
    );
  }
}

export default App;
