import burritosolo from './burritosolo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
  );
}

export default App;
