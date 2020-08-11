import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';

function Nav() {
  return (
    <nav>
      <Link to='/' className='nav-links'>
        <h3>logo</h3>
      </Link>
      <ul className='nav-list'>
        <Link to='/about' className='nav-links'>
          <li>about</li>
        </Link>
        <Link to='projects' className='nav-links'>
          <li>projects</li>
        </Link>
      </ul>
      <div className='button-group'>
      {/* <!-- Add icon library --> */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      {/* Add font awesome icons  */}
      <a href="#" class="fa fa-facebook"></a>
      <a href="#" class="fa fa-twitter"></a>
      </div>
    </nav>
  );
}

export default Nav;