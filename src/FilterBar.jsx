

function FilterBar(props) {
  const posts = props.users || [];

  return (
    <select className="FilterBar"
      value={props.selectedUserId}
      onChange={(e) => props.setSelectedUserId(e.target.value)}
    >
      <option value="">All posts</option>

      {posts.map((item) => (
        <option key={item.id}>
          User: {item.userId}
        </option>
      ))}
    </select>
  );
}

export default FilterBar;