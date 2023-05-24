import React from "react";
import redheart from "../assets/redheart.png";
import "./Favorites.css";

function Favorites(props) {
  return (
    <div className="favorites-container">
      {props.favorite.map((favorite) => {
        return (
          <div className="favorite-card">
            <h4 className="title">{favorite.title}</h4>
            <p className="text">{favorite.text}</p>
            <div className="foot-note">
              <p className="date-posted">{favorite.date}</p>
              <p className="author">{favorite.author}</p>
              <img
                src={redheart}
                alt="heart-btn"
                className="heart-btn"
                height="13px"
                width="13px"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Favorites;
