import React from "react";
import Navbar from "./navbar/main-navbar";
import Sidebar from "./sidebar/sidebar";
import Customer from "../pages/content";
const SidebarComponent = () => {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Customer />
      </div>
    </>
  );
};

export default SidebarComponent;
