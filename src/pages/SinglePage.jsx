import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import postsData from "../components/posts.json";
import commentIcon from "../assets/comment.png";
import heart from "../assets/heart-btn.png";
import "./SinglePage.css";

function SinglePage(props) {
  const { id } = useParams();
  const post = postsData.find((post) => post.id.toString() === id);

  const [text, setText] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
    props.onSubmit();
  };

  const getComment = (e) => {
    const text = e.target.value;
    setText(text);
  };

  const addNewCommentHandle = (e) => {
    e.preventDefault();
    console.log("Add New Comment");

    post.comments.push({
      text: text,
      author: "Anonymous",
      date: "08-01-2022",
      likes: 26,
      isLiked: false,
    });

    setText("");
  };

  return (
    <div className="single-post">
      <div className="back-btn">
        <NavLink to="/all-posts">BLOGS</NavLink>
      </div>
      <div className="post-title">{post ? <p>{post.title}</p> : "No data"}</div>
      <div className="post-author-date">
        <div className="post-author">{post.author}</div>
        <div className="post-date">{post.date}</div>
      </div>
      <div className="post-content">{post.text}</div>
      <div class="post-comment-likes">
        <img
          src={commentIcon}
          alt="comment-icon2"
          className="post-comment-icon"
          height="13px"
          width="13px"
        />
        <p className="post-comment-count">238</p>
        <img
          src={heart}
          alt="heart-btn2"
          className="post-heart"
          height="13px"
          width="13px"
        />
        <p className="post-like-counter">{post.likes}</p>
      </div>

      <form onSubmit={submitHandle}>
        <div className="leave-comment">Leave a Comment</div>
        <textarea className="comment-box" onChange={getComment}></textarea>
        <button
          type="submit"
          className="send-btn"
          onClick={addNewCommentHandle}
        >
          SEND
        </button>
      </form>
      <div className="allComments">
        <div className="comments-title">Comments:</div>
        {post.comments.map((comment) => (
          <div className="comment-content" key={comment.id}>
            <div className="comment-author">{comment.author}</div>
            <div className="comment-text">{comment.text}</div>
            <div className="comment-date-likes">
              <div className="comment-date">{comment.date}</div>
              <img
                src={heart}
                alt="heart-btn3"
                className="comment-heart-btn"
                height="13px"
                width="13px"
              />
              <p className="comment-like-counter">{comment.likes}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="show-more">
        <button className="show-more-btn">Show more</button>
      </div>
    </div>
  );
}

export default SinglePage;
