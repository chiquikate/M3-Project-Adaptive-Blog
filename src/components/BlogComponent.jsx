import { useState } from "react";
import { NavLink } from "react-router-dom";
import comment from "../assets/comment.png";
import heart from "../assets/heart-btn.png";
import redheart from "../assets/redheart.png";

const BlogComponent = ({ post, setIsFavorite }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [like, setLike] = useState(post.likes);

  const setFavorites = () => {
    setIsLiked(!isLiked);

    setLike(like + (isLiked ? -1 : 1));

    const newFavorites = {
      title: post.title,
      date: post.date,
      author: post.author,
      text: post.text,
    };

    setIsFavorite((prev) => [...prev, newFavorites]);
  };

  return (
    <div key={post.id}>
      <div className="blog-card" key={post.id}>
        <NavLink to={`single-page/${post.id}`}>
          <img
            src={post.icon}
            alt="blog-pic"
            className="image"
            // height="220px"
            // width="380px"
          />
          <h4 className="title">{post.title}</h4>
        </NavLink>
        <p className="text">{post.text}</p>
        <div className="foot-note">
          <p className="date-posted">{post.date}</p>
          <p className="author">{post.author}</p>
          <img
            src={comment}
            alt="comment-icon"
            className="comment-icon"
            height="13px"
            width="13px"
          />
          <p className="comment-count">238</p>
          <img
            src={isLiked ? redheart : heart}
            onClick={setFavorites}
            alt="heart-btn"
            className="heart-btn"
            height="13px"
            width="13px"
          />
          <p className="like-counter">{like}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
