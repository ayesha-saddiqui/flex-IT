/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Layout = ({ layoutRef }) => {
  return (
    <main ref={layoutRef}>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};
