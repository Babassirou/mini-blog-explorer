function PostCard(props) {
  return (
    <div className="PostCard">
      <div> User ID: {props.userId}</div>
      <div> ID : {props.id}</div>
      <div>title: {props.title}</div>
      <div> Body: {props.body}</div>
    </div>
  );
}

export default PostCard;