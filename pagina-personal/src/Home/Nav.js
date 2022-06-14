import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
      <nav>
          
          <ul className='nav-links'>
              <li>Home</li>
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
          </ul>
      </nav>
    );
  }
  
  export default Nav;