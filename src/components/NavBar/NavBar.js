import React from "react";
import "./navbar.css";
import logo from "../../assets/images/camera_logo.png";

const NavBar = () => {
  return (
    <div class="navbar">
      <NavBarLeftContent />
      <NavBarRightContent />
    </div>
  );
};

const NavBarLeftContent = () => {
  return (
    <div class="navbar-left-content">
      <Logo />
    </div>
  );
};

const NavBarRightContent = () => {
  return (
    <div class="navbar-right-content">
      <SaveButton />
    </div>
  );
};

const Logo = () => {
  return <img class="logo" src={logo} alt="camera-logo" />;
};

const SaveButton = () => {
  return <button class="save-btn">Save</button>;
};

export default NavBar;
