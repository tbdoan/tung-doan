import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Nav from './Nav'
import Library from './Library'
import Projects from './Projects'
import Landing from './Landing'
import Footer from './Footer'

function App() {
  return (
    <div id='page-container'>
    <Router>
      <div className='App' id='content-wrap'>
        <Nav />
        <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/about' component={Library} />
          <Route path='/projects' component={Projects} />
        </Switch>
      </div>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
