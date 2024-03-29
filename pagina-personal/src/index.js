import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';


import About from './Components/About.js';
import Projects from './Components/Projects.js';
import Contact from './Components/Contact.js';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<BrowserRouter>
    <div id='content-wrap'>
      <Header/>
    </div>

    <Routes className='nav-links'>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route 
        path='*'
        element={
          <main className='deadend'>
            <p>This is a dead-end !</p>
          </main>
        }
        />
    </Routes>
    <Footer/>

</BrowserRouter>



);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
