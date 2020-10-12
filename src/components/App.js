import React from "react";
import "./App.css";
import NavBar from "/src/components/NavBar/NavBar";
import SideBar from "/src/components/SideBar/SideBar";

const App = () => {
  return (
    <div className="main-wrapper">
      <NavBar />
      <SideBar />
    </div>
  );
};

export default App;
