

function FilterBar(props) {
  const posts = props.users || [];
  const userIds = [...new Set(posts.map((post) => post.userId))];

  return (
    <select className="FilterBar"
      value={props.selectedUserId}
      onChange={(e) => props.setSelectedUserId(e.target.value)}
    >
      <option value="">All posts</option>

      {userIds.map((userId) => (
        <option
            key={userId}
            value={userId}
        >
        User {userId}
            </option>
        ))}
    </select>

  );
  
}

export default FilterBar;