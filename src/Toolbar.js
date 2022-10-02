import "./toolbar.css";

export default function Toolbar({filters, selected, onSelectFilter}) {
  return filters.map((filter, i) => (
    <input
      type="button"
      key={i}
      className={"ghost-button" + (filter === selected ? ' selected' : '')}
      onClick={() => onSelectFilter(filter)}
      value={filter}
    />
  ));
}