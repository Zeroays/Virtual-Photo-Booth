import React from "react";
import "./navbar.css";
import logo from "../../assets/icons/camera_logo.png";

const NavBar = ({ savingPhotoHandler }) => {
  return (
    <div className="navbar">
      <NavBarLeftContent />
      <NavBarRightContent savingPhotoHandler={savingPhotoHandler} />
    </div>
  );
};

const NavBarLeftContent = () => {
  return (
    <div className="navbar-left-content">
      <Logo />
    </div>
  );
};

const NavBarRightContent = ({ savingPhotoHandler }) => {
  return (
    <div className="navbar-right-content">
      <SaveButton savingPhotoHandler={savingPhotoHandler} />
    </div>
  );
};

const Logo = () => {
  return <img className="logo" src={logo} alt="camera-logo" />;
};

const SaveButton = ({ savingPhotoHandler }) => {
  return (
    <button onClick={() => savingPhotoHandler(true)} className="save-btn">
      Save
    </button>
  );
};

export default NavBar;
