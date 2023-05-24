import BlogMenu from "../components/BlogMenu";
import { Outlet } from "react-router-dom";
import "./BlogLayout.css";

function BlogLayout() {
  return (
    <>
      <div>
        <BlogMenu />
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default BlogLayout;
