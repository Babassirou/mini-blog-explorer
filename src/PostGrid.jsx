import PostCard from "./PostCard";

function PostGrid(props) {
  return (
    <div className="PostGrid">
      {props.posts.map((post) => (
        <PostCard className = "hover"
          key={post.id}
          userId={post.userId}
          id={post.id}
          title={post.title}
          body={post.body}
        />
      ))}
    </div>
  );
}

export default PostGrid;