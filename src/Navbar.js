import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="nav" id="navbar">
      <div className="nav-content">
        <li className="nav-logo nav-item">
          <Link
            to="section1"
            activeClass="active"
            offset={-70}
            spy={true}
            smooth={true}
            duration={500}
          >
            TD
          </Link>
        </li>
        <ul className="nav-items">
          <li className="nav-item">
            <Link
              activeClass="active"
              to="profile"
              hashSpy={true}
              spy={true}
              smooth={true}
              duration={500}
            >
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="projects"
              hashSpy={true}
              spy={true}
              smooth={true}
              duration={500}
            >
              Projects and Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="contact"
              hashSpy={true}
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
