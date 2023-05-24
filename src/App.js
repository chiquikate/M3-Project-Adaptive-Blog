import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import postsData from "./components/posts.json";
import React, { useState } from "react";
import RootLayout from "./layout/RootLayout";
import BlogLayout from "./layout/BlogLayout";
import AboutUs from "./pages/AboutUs";
import Reviews from "./pages/Reviews";
import AllPosts from "./pages/AllPosts";
import Favorites from "./pages/Favorites";
import SinglePage from "./pages/SinglePage";
import AddPost from "./pages/AddPost";
import "./App.css";

const getData = (data) => {
  console.log(data);
};

function App() {
  const [post, setPost] = useState(postsData);
  const [favorite, setIsFavorite] = useState([]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<BlogLayout />}>
            <Route
              path="all-posts"
              element={<AllPosts post={post} setFavorites={setIsFavorite} />}
            />
            <Route
              path="favorites"
              element={<Favorites favorite={favorite} />}
            />
            <Route
              path="add-post"
              element={<AddPost onSubmit={getData} addPost={setPost} />}
            />
          </Route>
          <Route path="all-posts/single-page/:id" element={<SinglePage />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
