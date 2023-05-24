import NavBar from "../components/NavBar";
import FooterLayout from "./FooterLayout";
import { Outlet } from "react-router-dom";
import "./RootLayout.css";

function RootLayout() {
  return (
    <>
      <div className="root-layout">
        <div className="nav-layout">
          <NavBar />
        </div>
      </div>
      <main className="main">
        <Outlet />
      </main>
      <div className="footer-layout">
        <FooterLayout />
      </div>
    </>
  );
}

export default RootLayout;
