import React from "react";
import "./propertiesbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/fontawesome-free-solid";
import Photos from "./Photos/Photos";
import Props from "./Props/Props";
import Filters from "./Filters/Filters";

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
        {/* <i className="fa fa-question-circle" aria-hidden="true"></i> */}
      </button>
      <div className="property-explanation">
        <p>
          Bacon ipsum dolor amet jowl andouille filet mignon tenderloin cow
          ribeye beef turkey meatball prosciutto chuck strip steak tri-tip cupim
          meatloaf. Landjaeger meatloaf tenderloin burgdoggen turkey, ground
          round beef chislic spare ribs chicken corned beef shankle. Pastrami
          cow ham prosciutto venison flank.
        </p>
      </div>
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
