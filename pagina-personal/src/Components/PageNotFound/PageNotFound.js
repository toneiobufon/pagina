import React from 'react';
import { NavLink } from 'react-router-dom';
import NotFound404Photo from '../images/404.png';

const PageNotFound = (props) => {

  return (
    <div className="page-not-found" style={{ minHeight: '100%', backgroundColor: 'rgba(96,126,106, 0.75)', paddingTop: '16px', paddingBottom: '64px'}}>
        <div style={{color: 'white', fontWeight: 'bold', backgroundColor: 'black', width: '75%', margin: '2rem auto', padding: '1rem 0.5rem', borderRadius: '0.5rem'}}>
            <h1 style={{color: 'white', fontWeight: 'bold', backgroundColor: 'black', margin: '1rem auto', fontSize: '8rem'}}>404</h1>
            <p style={{color: '#DBE5CC', fontSize: '18px' }}>We live in a world of uncertainty. But certainly, the page you were looking for isn't here.</p>
            <p style={{color: '#DBE5CC', fontSize: '18px' }}>There's no place like home, so would you like to go <NavLink to="/">home</NavLink> instead?</p>
        </div>
       
        <div style={{width: '85%', margin: '0 auto'}}>
            <a href="https://hexcolorpedia.com/color/pantone-404-c/" target="_blank" rel="nofollow noopener noreferrer">
            <img
                src={NotFound404Photo}
                alt="not found 404 doorknob hanger"
                style={{ borderRadius: '3%' }}
            />
            </a>
        </div>

        <iframe title="color songs playlist"  
            style={{borderRadius:'12px', width: '80%', marginBottom: '4rem', marginTop: '4rem'}} 
            src="https://open.spotify.com/embed/playlist/6rdQqPhaMObe7wd94tbJtw?utm_source=generator" 
            width="100%" height="380" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
        </iframe>
    </div>
  );
};

export default PageNotFound;