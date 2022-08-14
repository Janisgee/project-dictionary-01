import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  const [word, setWord] = useState(props.defaultWord);
  const [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function doSearch(searchWord) {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelApiKey = `563492ad6f91700001000001ef2a7f4d89e64dcd9a1bfa9cdc98ff70`;
    const pexelUrl = `https://api.pexels.com/v1/search?query=${searchWord}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelApiKey}` };

    axios.get(pexelUrl, { headers: headers }).then(handlePexelsResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    doSearch(word);
  }
  function getInputWord(event) {
    setWord(event.target.value);
  }
  function searchSynonymWord(synonymWord) {
    setWord(synonymWord);
    doSearch(synonymWord);
  }

  function load() {
    setLoaded(true);
    doSearch(word);
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search a word ..."
            className="searchForm"
            autoFocus={true}
            value={word}
            onChange={getInputWord}
          />
          <input
            type="submit"
            value="Search"
            className="searchButton btn btn-warning"
          />
        </form>
        <Results results={results} searchSynonymWord={searchSynonymWord} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading ...";
  }
}
