import logo from './logo.svg';
import './App.css';
import { FaAppleWhole } from "react-icons/fa6";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <FaAppleWhole />やっほー <code>src/App.js</code> and save to reload.<FaAppleWhole />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
