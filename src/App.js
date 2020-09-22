import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Section from './Section';
import dummyText from './DummyText';
import Footer from './Footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Section
          title="Tung Doan"
          subtitle={dummyText}
          dark={true}
          id="section1"
        />
        <Section
          title="About"
          subtitle={dummyText}
          dark={false}
          id="section2"
        />
        <Section
          title="Projects and Experience"
          subtitle={dummyText}
          dark={true}
          id="section3"
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
