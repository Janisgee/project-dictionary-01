import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h5 className="partOfSpeech text-capitalize">
        {props.meaning.partOfSpeech}
      </h5>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              <em className="example">{definition.example}</em>
            </p>
          </div>
        );
      })}
      <Synonyms
        synonyms={props.meaning.synonyms}
        searchSynonymWord={props.searchSynonymWord}
      />
    </div>
  );
}
