import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.css'
// import HKN from '../images/HKN.png';

const Header = props => {
  return (
    <header>
      <nav>
        <div className="nav-links">
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
          <NavLink activeClassName="active" to="/about">
            About
          </NavLink>
          <NavLink activeClassName="active" to="/projects">
            Projects
          </NavLink>
          <NavLink activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;