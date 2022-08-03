import burritosolo from './images/burritosolo.svg';
import './index.css';


import About from './Components/About.js';
import Projects from './Components/Projects.js';
import Contact from './Components/Contact.js';
import Header from './Components/Header';

import { BrowserRouter as Router,
        Switch,
        Route,
        Link, 
        Routes} from 'react-router-dom';


function App() {
  return (

    <div className='App' id='page-container'>
     
      <h1>Here we are</h1>
      

      <Link to='../Projects/Projects.js' component={Projects} />
        <img src={burritosolo} className="burritosolo" alt="burrito" />
        <p>
        Bienvenidos, quieren café? 
        </p>
        <a
          className="App-link"
          href="https://www.gentlebarn.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gentle Click
        </a>
      
      </div>
  


  );
}


export default App;
