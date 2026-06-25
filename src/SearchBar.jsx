function SearchBar(props) {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Insert your search..."
        value={props.searchTerm}
        onChange={(e) => props.setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
