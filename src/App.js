import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './Navbar';
import ProfileCard from './ProfileCard';
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
        <ProfileCard dark={false} id="section2" />
        <Projects dark={true} id={'section3'} />
        <Section
          title="Contact Me"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
        <Footer />
      </div>
    );
  }
}

export default App;
