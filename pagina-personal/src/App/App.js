import burritosolo from './burritosolo.svg';
import './App.css';

import Nav from '../Components/Nav/Nav';

import About from '../Components/About/About.js';
import Projects from '../Components/Projects/Projects';
import Contact from '../Components/Contact/Contact';
import Header from '../Components/Header/Header';

import { BrowserRouter as Router,
        Switch,
        Route,
        Link, 
        Routes} from 'react-router-dom';


function App() {
  return (

    <div className='App'>
      {/* <Header/> */}
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
    
 
       
  
    // </div>
    // </Router>
    //  */}
    
    //   // <Router>
    //   //   <div>
    //   //     <Header />
    //   //   </div>
    //   //     <Link to='../Projects/Projects.js' component={Projects} />
    //   //   <img src={burritosolo} className="burritosolo" alt="burrito" />
    //   //   <p>
    //   //     Bienvenidos, quieren café? 
    //   //   </p>
    //   //   <a
      //     className="App-link"
      //     href="https://www.gentlebarn.org/"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Gentle Click
      //   </a>
      // </Router>


  );
}


export default App;
