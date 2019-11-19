import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [msg, setMsg] = useState('Default message');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{msg}</p>
        <button onClick={() => setMsg('New new message')}>CHANGE MSG</button>
      </header>
    </div>
  );
}

export default App;
