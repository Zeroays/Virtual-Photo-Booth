import React, { useState } from "react";
import "./App.css";
import NavBar from "/src/components/NavBar/NavBar";
import SideBar from "/src/components/SideBar/SideBar";
import PropertiesBar from "/src/components/PropertiesBar/PropertiesBar";
import Canvas from "/src/components/Canvas/Canvas";

const App = () => {
  const [currentProperty, setCurrentProperty] = useState("Photos");

  const handleCurrentProperty = (property) => {
    setCurrentProperty(property);
  };

  return (
    <div className="main-wrapper">
      <NavBar />
      <SideBar propertyHandler={handleCurrentProperty} />
      <PropertiesBar property={currentProperty} />
      <Canvas />
    </div>
  );
};

export default App;
