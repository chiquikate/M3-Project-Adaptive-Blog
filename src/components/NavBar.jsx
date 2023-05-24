import { NavLink } from "react-router-dom";
import refocus from "../assets/refocus-logo.png";
import "./NavBar.css";

function NavBar() {
  function menuMobile(e) {
    let navbar = e.menuList;
    navbar.classList.toggle("show");
  }

  return (
    <div className="navbar">
      <div className="logo">
        <div>
          <a href="https://refocus.me/ph/" target="_blank" title="Refocus">
            <img src={refocus} alt="refocus-logo" className="refocus-logo" />
          </a>
        </div>
      </div>
      <div className="menu-list">
        <p className="blog">
          <NavLink to="/all-posts">BLOG</NavLink>
        </p>
        <p className="about-us">
          <NavLink to="about-us">ABOUT US</NavLink>
        </p>
        <p className="reviews">
          <NavLink to="reviews">REVIEWS</NavLink>
        </p>
      </div>
      <div className="account-input">
        <button type="button" className="signup-btn">
          SIGN UP
        </button>
        <button type="button" className="login-btn">
          LOG IN
        </button>
      </div>
    </div>
  );
}

export default NavBar;
