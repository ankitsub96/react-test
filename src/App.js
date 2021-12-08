import logo from './logo.svg';
import './App.css';

function App() {
  let a=[1,2]
  let b=[...a]
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
        <p>es6 syntax::</p>
        <ol>
        {a.map(el=>{
          return <li>{el}</li>
        })}
        </ol>
        <ol>
        {b.map(el=>{
          return <li>{el}</li>
        })}
        </ol>
      </header>
    </div>
  );
}

export default App;
