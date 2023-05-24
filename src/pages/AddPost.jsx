import { PostImage } from "../components/PostImage";
import { NavLink } from "react-router-dom";
import "./AddPost.css";

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddPost(props) {
  const [fileUrl, setFileUrl] = useState("");
  const handleImageSuccess = (imageUrl) => {
    setFileUrl(imageUrl);
  };

  const [post, setPost] = useState([]);

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [author, setAuthor] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
    props.onSubmit();
  };

  const getTitle = (event) => {
    const title = event.target.value;
    setTitle(title);
  };

  const getText = (event) => {
    const text = event.target.value;
    setText(text);
  };

  const getDate = (event) => {
    const date = event.target.value;
    setDate(date);
  };

  const getAuthor = (event) => {
    const author = event.target.value;
    setAuthor(author);
  };

  const addNewBlogHandle = (e) => {
    e.preventDefault();

    const newBlog = {
      icon: fileUrl,
      title: title,
      text: text,
      date: date,
      author: author,
      id: uuidv4(),
    };
    setPost([...post, newBlog]);
    props.addPost((prev) => [...prev, newBlog]);

    setTitle("");
    setText("");
    setDate("");
    setAuthor("");

    <NavLink to="/" />;
  };

  return (
    <>
      <div className="container">
        <form className="add-page" onSubmit={submitHandle}>
          <div className="new-post">NEW POST</div>
          <div className="add-title">ADD TITLE</div>
          <div>
            <textarea
              className="title-content"
              required
              type="text"
              value={title}
              onChange={getTitle}
            ></textarea>
          </div>
          <div className="add-author">AUTHOR</div>
          <div>
            <textarea
              className="author-content"
              required
              type="text"
              value={author}
              onChange={getAuthor}
            ></textarea>
          </div>
          <div className="add-text">ADD TEXT</div>
          <div>
            <textarea
              className="text-content"
              required
              type="text"
              value={text}
              onChange={getText}
            ></textarea>
          </div>
          <div className="add-date">DATE</div>
          <div>
            <textarea
              className="date-content"
              required
              type="text"
              value={date}
              onChange={getDate}
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="post-btn"
              onClick={addNewBlogHandle}
            >
              POST
            </button>
          </div>
          <div>
            <div className="add-image">
              <PostImage
                addImageSuccessful={handleImageSuccess}
                className="uploaded-image"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddPost;
