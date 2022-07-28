import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  const [word, setWord] = useState("");
  const [results, setResults] = useState(null);

  function displayResults(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
    console.log(response.data[0].word);
  }

  function getInputWord(event) {
    setWord(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(displayResults);
  }

  return (
    <div className="Dictionary">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search a word ..."
          className="searchForm"
          autoFocus={true}
          onChange={getInputWord}
        />
        <input
          type="submit"
          value="Search"
          className="searchButton btn btn-warning"
        />
      </form>
      <Results results={results} />
    </div>
  );
}
