import "./App.css";
import Logo from "./assets/images/full/logo.png";
import { login } from "./utilities/Request";

function App() {
  login().then(response => {
    console.log(response);
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
        <p>This is a ReactJS template project</p>
        <a
          className="App-link"
          href="https://github.com/Oaks-Solution-and-Studio/OSAS-ReactJS-Template"
          target="_blank"
          rel="noopener noreferrer">
          Check ReadMe
        </a>
      </header>
    </div>
  );
}

export default App;
