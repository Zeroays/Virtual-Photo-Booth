import React, { useState } from "react";
import "./App.css";
import NavBar from "/src/components/NavBar/NavBar";
import SideBar from "/src/components/SideBar/SideBar";
import PropertiesBar from "/src/components/PropertiesBar/PropertiesBar";
import Canvas from "/src/components/Canvas/Canvas";

const App = () => {
  const [currentProperty, setCurrentProperty] = useState("Photos");

  const [savingPhoto, setSavingPhoto] = useState(false);

  const handleCurrentProperty = (property) => {
    setCurrentProperty(property);
  };

  const handleSavePhoto = (state) => {
    setSavingPhoto(state);
  };

  return (
    <div className="main-wrapper">
      <NavBar savingPhotoHandler={handleSavePhoto} />
      <SideBar propertyHandler={handleCurrentProperty} />
      <PropertiesBar property={currentProperty} />
      <Canvas savingPhoto={savingPhoto} savingPhotoHandler={handleSavePhoto} />
    </div>
  );
};

export default App;
