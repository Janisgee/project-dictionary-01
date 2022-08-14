import React from "react";
import Meaning from "./Meaning";
import "./Results.css";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h3 className="text-capitalize">{props.results.word}</h3>
          <Phonetic phonetic={props.results.phonetics[0]} />
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning
                meaning={meaning}
                searchSynonymWord={props.searchSynonymWord}
              />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
