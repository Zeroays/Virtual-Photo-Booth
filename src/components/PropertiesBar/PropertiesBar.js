import React from "react";
import Photos from "./Photos/Photos";
import Props from "./Props/Props";
import Filters from "./Filters/Filters";

const PropertiesBar = ({ property }) => {
  return (
    <div class="sidebar-properties">
      <PropertiesBarTitle name={property.name} />
      <PropertiesBarContent property={property.name} />
    </div>
  );
};

const PropertiesBarTitle = ({ name }) => {
  return (
    <div class="property-info">
      <span class="property-title">{name}</span>
      <button class="question-btn">
        <i class="fa fa-question-circle" aria-hidden="true"></i>
      </button>
      <div class="property-explanation">
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
    <div class="property-content">{dispatchPropertiesBarContent(content)}</div>
  );
};

const dispatchPropertiesBarContent = (property) => {
  switch (property) {
    case "Props":
      return <Props />;
    case "Filter":
      return <Filters />;
    default:
      return <Photos />;
  }
};

export default PropertiesBar;
