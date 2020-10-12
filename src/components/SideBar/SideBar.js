import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPicture,
  faThumbtack,
  faSlidersH,
} from "@fortawesome/fontawesome-free-solid";

const sideBarContent = [
  { name: "Photos", icon: faPicture },
  { name: "Props", icon: faThumbtack },
  { name: "Filters", icon: faSlidersH },
];

const SideBar = () => {
  return (
    <div class="main-sidebar">
      {sideBarContent.map((item) => {
        <SideBarChoice name={item.name} icon={item.icon} />;
      })}
    </div>
  );
};

const SideBarChoice = ({ name, icon }) => {
  return (
    <div className="sidebar-choice">
      <button className="sidebar-btn">
        <FontAwesomeIcon icon={icon} />
      </button>
      <PhotoStrip name={name} />
    </div>
  );
};

const PhotoStrip = ({ name }) => {
  return (
    <div class="photo-strip">
      <span class="photo-text">{name}</span>
    </div>
  );
};

export default SideBar;
