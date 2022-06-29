import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://change.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sign the Petition
        </a>
      </header>
    </div>
  );
}

export default App;
