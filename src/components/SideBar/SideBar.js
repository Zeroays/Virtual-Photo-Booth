import React, { useState, useEffect } from "react";
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

const SideBar = ({ propertyHandler }) => {
  return (
    <div className="main-sidebar">
      {sideBarContent.map((item) => {
        return (
          <SideBarChoice
            name={item.name}
            icon={item.icon}
            key={item.name}
            propertyHandler={propertyHandler}
          />
        );
      })}
    </div>
  );
};

const SideBarChoice = ({ name, icon, propertyHandler }) => {
  const [photoStripVisible, setPhotoStripVisiblilty] = useState(false);

  const smallScreenSize = 480;
  const [width, setWidth] = useState(window.innerWidth);

  const handlePhotoStripVisibility = () => {
    if (width <= smallScreenSize) return;
    setPhotoStripVisiblilty(!photoStripVisible);
  };

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <div className="sidebar-choice">
      <SideBarButton
        data={{ name, icon }}
        handlers={{ handlePhotoStripVisibility, propertyHandler }}
      />
      <PhotoStrip name={name} visible={photoStripVisible} />
    </div>
  );
};

const SideBarButton = ({ handlers, data }) => {
  const { handlePhotoStripVisibility, propertyHandler } = handlers;
  const { name, icon } = data;
  return (
    <button
      className="sidebar-btn"
      onMouseEnter={handlePhotoStripVisibility}
      onMouseLeave={handlePhotoStripVisibility}
      onClick={() => propertyHandler(name)}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
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
