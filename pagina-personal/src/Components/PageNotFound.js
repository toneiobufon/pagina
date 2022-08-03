import React from 'react';
import { NavLink } from 'react-router-dom';
import NotFound404Photo from '../images/404.png';

const PageNotFound = (props) => {

  return (
    <div className="page-not-found" style={{ minHeight: '100%', backgroundColor: 'rgba(96,126,106, 0.75)', paddingTop: '16px', paddingBottom: '64px'}}>
       <h1>This is a deadend!</h1>
    </div>
  );
};

export default PageNotFound;