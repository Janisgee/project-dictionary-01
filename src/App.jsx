import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div className="logoHeading">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Dictionary</h1>
          </div>
          <Dictionary />
        </header>
        <footer>Coded by Janis Chan</footer>
      </div>
    </div>
  );
}

export default App;
