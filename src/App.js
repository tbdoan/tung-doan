import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './Navbar';
import ProfileCard from './ProfileCard';
import Section from './Section';
import dummyText from './DummyText';
import Footer from './Footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Section title="About" subtitle={dummyText} dark={true} id="section1" />
        <ProfileCard title="Tung Doan" dark={false} id="section2" />
        <Section
          title="Projects and Experience"
          subtitle={dummyText}
          dark={true}
          id={'section3'}
        />
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
