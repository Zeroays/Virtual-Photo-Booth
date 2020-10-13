import React, { useState } from "react";
import propData from "./PropData";
import "./props.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/fontawesome-free-solid";

const Props = () => {
  const [propQuery, setPropQuery] = useState("");

  const handlePropQuery = (e) => {
    setPropQuery(e.target.value);
  };

  return (
    <div className="props-pane-properties">
      <PropsSearch query={propQuery} queryHandler={handlePropQuery} />
      <PropImages query={propQuery} />
    </div>
  );
};

const PropsSearch = ({ query, queryHandler }) => {
  return (
    <div className="props-search-handler">
      <div className="props-search-bar">
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="input"
          placeholder="Search props"
          value={`${query}`}
          onChange={queryHandler}
        ></input>
      </div>
    </div>
  );
};

const PropImages = ({ query }) => {
  return (
    <div className="props-pane-content">
      {propData.map((prop) => {
        if (prop.label.toLowerCase().includes(query.toLowerCase()))
          return (
            <PropImage name={prop.label} image={prop.img} key={prop.img} />
          );
      })}
    </div>
  );
};

const PropImage = ({ name, image }) => {
  const [propLabelVisible, setPropLabelVisibility] = useState(false);

  const handlePropLabelVisibility = () => {
    setPropLabelVisibility(!propLabelVisible);
  };
  return (
    <div
      className="prop"
      onMouseEnter={handlePropLabelVisibility}
      onMouseLeave={handlePropLabelVisibility}
      style={propImageStyle(image)}
    >
      <span
        className={`prop-label ${
          propLabelVisible ? "prop-label-active" : null
        }`}
      >
        {name}
      </span>
    </div>
  );
};

const propImageStyle = (image) => {
  return {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#343b46",
    backgroundSize: "60%",
  };
};

export default Props;
