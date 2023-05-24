import BlogComponent from "../components/BlogComponent";
import "./AllPosts.css";

function AllPosts(props) {
  const posts = props.post;

  return (
    <>
      <div className="card">
        {posts.map((post) => (
          <BlogComponent
            key={post.id}
            post={post}
            setIsFavorite={props.setFavorites}
          />
        ))}
      </div>
    </>
  );
}

export default AllPosts;
