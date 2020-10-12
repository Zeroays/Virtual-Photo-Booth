import React, { useState } from "react";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faThumbtack,
  faSlidersH,
} from "@fortawesome/fontawesome-free-solid";

const sideBarContent = [
  { name: "Photos", icon: faImage },
  { name: "Props", icon: faThumbtack },
  { name: "Filters", icon: faSlidersH },
];

const SideBar = () => {
  return (
    <div className="main-sidebar">
      {sideBarContent.map((item) => {
        return (
          <SideBarChoice name={item.name} icon={item.icon} key={item.name} />
        );
      })}
    </div>
  );
};

const SideBarChoice = ({ name, icon }) => {
  const [photoStripVisible, setPhotoStripVisiblilty] = useState(false);

  const handlePhotoStripVisibility = () => {
    setPhotoStripVisiblilty(!photoStripVisible);
  };
  return (
    <div className="sidebar-choice">
      <button
        className="sidebar-btn"
        onMouseEnter={handlePhotoStripVisibility}
        onMouseLeave={handlePhotoStripVisibility}
      >
        <FontAwesomeIcon icon={icon} />
      </button>
      <PhotoStrip name={name} visible={photoStripVisible} />
    </div>
  );
};

const PhotoStrip = ({ name, visible }) => {
  return (
    <div className={`photo-strip ${visible ? "strip-active" : ""}`}>
      <span className="photo-text">{name}</span>
    </div>
  );
};

export default SideBar;
