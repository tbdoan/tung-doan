import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';

function Nav() {
  return (
    <nav>
      <Link to='/personal-website' className='nav-links'>
        <h3>logo</h3>
      </Link>

      <div className='right-side'>
        <ul className='nav-list'>
          <Link to='/personal-website/about' className='nav-links'>
            <li>about</li>
          </Link>
          <Link to='/personal-website/projects' className='nav-links'>
            <li>projects</li>
          </Link>
        </ul>
        <div>
          {/* <!-- Add icon library --> */}
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          {/* Add font awesome icons  */}
          <a href="mailto:tbdoan@ucsd.edu" className="fa fa-envelope-o fa-lg"> </a>
          <a href="https://github.com/tbdoan" className="fa fa-github fa-lg"> </a>
          <a href="https://www.linkedin.com/in/tung-doan-860540195/" className="fa fa-linkedin fa-lg"> </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;