import React from "react";
import "./navbar.css";
import logo from "../../assets/icons/camera_logo.png";
import { useDispatch } from "react-redux";
import { deletePhotoProps } from "../../redux/actions/photoProps.action";

const NavBar = ({ savingPhotoHandler }) => {
  return (
    <div className="navbar">
      <NavBarLeftContent />
      <NavBarRightContent
        savingPhotoHandler={savingPhotoHandler}
      />
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
      <ClearDropDown />
      <SaveButton savingPhotoHandler={savingPhotoHandler} />
    </div>
  );
};

const Logo = () => {
  return <img className="logo" src={logo} alt="camera-logo" />;
};

const ClearDropDown = () => {
  return (
    <div className="clear-dropdown">
      <button className="clear-dropdown-btn">Clear</button>
        <div className="clear-dropdown-content">
          <ClearPropsButton />
        </div>
    </div>
  );
}

const ClearPropsButton = () => {
  const dispatch = useDispatch();

  const deleteCanvasPhotoProps = () => {
    dispatch(deletePhotoProps());
  };

  return (
    <button className="clear-props-btn" onClick={deleteCanvasPhotoProps}>
      Props
    </button>
  );
};

const SaveButton = ({ savingPhotoHandler }) => {
  return (
    <button onClick={() => savingPhotoHandler(true)} className="save-btn">
      Save
    </button>
  );
};

export default NavBar;
