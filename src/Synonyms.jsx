import React from "react";
import "./Synonyms.css";
import SynonymWord from "./SynonymWord";

export default function Synonyms(props) {
  if (props.synonyms && props.synonyms.length > 0) {
    return (
      <ul className="Synonyms">
        <div className="Similar">Similar:</div>
        {props.synonyms.map(function (synonym, index) {
          return (
            <span key={index}>
              <SynonymWord
                synonym={synonym}
                searchSynonymWord={props.searchSynonymWord}
              />
            </span>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
