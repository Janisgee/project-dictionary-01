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
          <Dictionary defaultWord="sunset" />
        </header>
        <footer>
          This project was coded by{" "}
          <a
            href="https://janischan-portfolio-jc.netlify.app/"
            title="Janis Homepage"
            target="_blank"
            rel="noreferrer"
          >
            Janis Chan
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/Janisgee/project-dictionary-01"
            title="Open-sourced in Github"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://project-dictionary-01.netlify.app"
            title="Netlify Webpage"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
