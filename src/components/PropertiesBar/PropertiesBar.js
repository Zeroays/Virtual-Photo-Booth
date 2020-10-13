import React from "react";
import "./propertiesbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/fontawesome-free-solid";
import Photos from "./Photos/Photos";
import Props from "./Props/Props";
import Filters from "./Filters/Filters";

const propertyExplanations = {
  Photos: `Choose from the stock photos, or upload one of your own.`,
  Props: `Choose as many of the props below to add to the canvas.  
  Use the Search Bar to filter out the props.  Hovering over them 
  will reveal their name.`,
  Filters: `Choose from either the Presets, or click the Custom Tab
  to adjust settings like contrast and greyscale, and set an overlay.`,
};

const PropertiesBar = ({ property }) => {
  return (
    <div className="sidebar-properties">
      <PropertiesBarTitle property={property} />
      <PropertiesBarContent property={property} />
    </div>
  );
};

const PropertiesBarTitle = ({ property }) => {
  return (
    <div className="property-info">
      <span className="property-title">{property}</span>
      <button className="question-btn">
        <FontAwesomeIcon icon={faQuestionCircle} />
      </button>
      <PropertiesBarExplanation property={property} />
    </div>
  );
};

const PropertiesBarExplanation = ({ property }) => {
  return (
    <div className="property-explanation">
      <p>{propertyExplanations[property]}</p>
    </div>
  );
};

const PropertiesBarContent = ({ property }) => {
  return (
    <div className="property-content">
      {
        {
          Photos: <Photos />,
          Props: <Props />,
          Filters: <Filters />,
        }[property]
      }
    </div>
  );
};

export default PropertiesBar;
