import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './base.css';

import Navbar from './Navbar';
import Profile from './Profile';
import Contact from './Contact';
import Footer from './Footer';
import Landing from './Landing';
import Projects from './Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Landing id="section1" />
        <hr style={{ margin: 0 }} />
        <Profile id="profile" />
        <hr style={{ margin: 0 }} />
        <Projects dark={true} id={'projects'} />
        <hr style={{ margin: 0 }} />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
