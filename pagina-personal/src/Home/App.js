import burritosolo from './burritosolo.svg';
import './App.css';
import Nav from './Nav';
import About from '../About/About.js';
import Projects from '../Projects/Projects';
import {BrowserRouter as Router, Link, Switch, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Nav/>
        <Routes>
          <Route path='/' component={Home} />
          <Route path='../About/About.js' component={About} />
          <Route path='../Projects/Projects.js' component={Projects} />
        </Routes>

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
      </header>
    </div>
    </Router>
  );
}

const Home = () => {
  <div>
    <h1>Home</h1>
  </div>
}

export default App;
