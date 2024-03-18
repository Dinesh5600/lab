import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, I'm Dinesh, a 4th-year student at Dal.
        </p>
       
        <a
          className="App-link"
          href="https://web.cs.dal.ca/~dsalem/csci3172/lab1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          About Me
        </a>
      </header>
    </div>
  );
}

export default App;

