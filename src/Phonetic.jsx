export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <h5>{props.phonetic.text}</h5>
        <audio controls src={props.phonetic.audio} title="Pronounce"></audio>
      </div>
    );
  } else {
    return (
      <div className="Phonetic">
        <h5>{props.phonetic.text}</h5>
      </div>
    );
  }
}
