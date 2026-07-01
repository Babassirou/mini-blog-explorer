function StatusMessage(props) {
  if (props.loading) {
    return <p>Loading posts...</p>;
  }

  if (props.error) {
    return <p>{props.error}</p>;
  }

  if (props.posts === 0) {
    return <p>No posts found!</p>;
  }

  return null;
}

export default StatusMessage;