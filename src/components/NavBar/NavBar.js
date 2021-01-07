import React from "react";
import "./navbar.css";
import logo from "../../assets/icons/camera_logo.png";
import { useDispatch } from "react-redux";
import { deletePhotoProps } from "../../redux/actions/photoProps.action";

const NavBar = ({ savingPhotoHandler }) => {
  const dispatch = useDispatch();

  const deleteCanvasPhotoProps = () => {
    dispatch(deletePhotoProps());
  };

  return (
    <div className="navbar">
      <NavBarLeftContent />
      <NavBarRightContent
        savingPhotoHandler={savingPhotoHandler}
        deletingPhotoPropsHandler={deleteCanvasPhotoProps}
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

const NavBarRightContent = ({
  savingPhotoHandler,
  deletingPhotoPropsHandler,
}) => {
  return (
    <div className="navbar-right-content">
      <ClearPropsButton deletingPhotoPropsHandler={deletingPhotoPropsHandler} />
      <SaveButton savingPhotoHandler={savingPhotoHandler} />
    </div>
  );
};

const Logo = () => {
  return <img className="logo" src={logo} alt="camera-logo" />;
};

const ClearPropsButton = ({ deletingPhotoPropsHandler }) => {
  return (
    <button className="clear-props-btn" onClick={deletingPhotoPropsHandler}>
      Clear Props
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
