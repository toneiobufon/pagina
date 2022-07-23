import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import HKN from '../images/HKN.png';

const Header = props => {
  return (
    <header>
      <nav>
        {/* <Link to="/">
          <div className="img-container">
            <img src={HKN} alt="logo" />
          </div>
        </Link> */}
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