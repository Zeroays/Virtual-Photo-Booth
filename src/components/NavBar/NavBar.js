import React from "react";
import "./navbar.css";
import logo from "../../assets/images/camera_logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <NavBarLeftContent />
      <NavBarRightContent />
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

const NavBarRightContent = () => {
  return (
    <div className="navbar-right-content">
      <SaveButton />
    </div>
  );
};

const Logo = () => {
  return <img className="logo" src={logo} alt="camera-logo" />;
};

const SaveButton = () => {
  return <button className="save-btn">Save</button>;
};

export default NavBar;
