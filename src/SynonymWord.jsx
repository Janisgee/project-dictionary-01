export default function SynonymWord(props) {
  function handleSynonymSearch(event) {
    event.preventDefault();
    props.searchSynonymWord(props.synonym);
  }

  return (
    <li className="SynonymWord">
      <button onClick={handleSynonymSearch}>{props.synonym}</button>
    </li>
  );
}
