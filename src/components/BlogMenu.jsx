import { NavLink } from "react-router-dom";
import "./BlogMenu.css";

function BlogMenu() {
  return (
    <>
      <div className="blog-menu">
        <div className="option">
          <NavLink to="all-posts" className="all-posts">
            ALL POSTS
          </NavLink>
          <NavLink to="favorites" className="favorites">
            FAVORITES
          </NavLink>
        </div>
        <div className="add">
          <NavLink to="add-post" className="add-post">
            + ADD POST
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default BlogMenu;
