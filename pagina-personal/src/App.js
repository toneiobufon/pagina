import burritosolo from './burritosolo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={burritosolo} className="burritosolo" alt="burrito" />
        <p>
          Bienvenidos, quieren cafe? 
        </p>
        <a
          className="App-link"
          href="https://www.gentlebarn.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Be Gentle
        </a>
      </header>
    </div>
  );
}

export default App;
