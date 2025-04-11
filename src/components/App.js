import React, { useState, createContext } from "react";
import NavBar from "/src/components/NavBar/NavBar";
import SideBar from "/src/components/SideBar/SideBar";
import PropertiesBar from "/src/components/PropertiesBar/PropertiesBar";
import Canvas from "/src/components/Canvas/Canvas";

import { PropertyContextProvider } from "/src/context/PropertyContext";
import "./App.css";

const App = () => {

  const [savingPhoto, setSavingPhoto] = useState(false);

  const handleSavePhoto = (state) => {
    setSavingPhoto(state);
  };

  return (
    <div className="main-wrapper">
      <NavBar savingPhotoHandler={handleSavePhoto} />
      
      <Canvas savingPhoto={savingPhoto} savingPhotoHandler={handleSavePhoto} />

      <PropertyContextProvider>
        <SideBar />
        <PropertiesBar />
      </PropertyContextProvider>
    </div>
  );
};

export default App;
