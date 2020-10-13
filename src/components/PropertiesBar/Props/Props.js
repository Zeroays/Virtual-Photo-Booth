import React, { useState } from "react";
import propData from "./PropData";
import "./props.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/fontawesome-free-solid";

const Props = () => {
  const [chosenProps, setChosenProps] = useState([]);
  const [propQuery, setPropQuery] = useState("");

  const handlePropSelection = (img) => {
    console.log(chosenProps);
    setChosenProps(chosenProps.concat(img));
  };

  const handlePropQuery = (e) => {
    setPropQuery(e.target.value);
  };

  return (
    <div className="props-pane-properties">
      <PropsSearch query={propQuery} queryHandler={handlePropQuery} />
      <PropImages
        query={propQuery}
        propSelectionHandler={handlePropSelection}
      />
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

const PropImages = ({ query, propSelectionHandler }) => {
  return (
    <div className="props-pane-content">
      {propData.map((prop) => {
        if (prop.label.toLowerCase().includes(query.toLowerCase()))
          return (
            <PropImage
              name={prop.label}
              image={prop.img}
              key={prop.img}
              propSelectionHandler={() => {
                propSelectionHandler(prop.img);
              }}
            />
          );
      })}
    </div>
  );
};

const PropImage = ({ name, image, propSelectionHandler }) => {
  return (
    <div
      className="prop"
      onClick={propSelectionHandler}
      style={{ backgroundImage: `url(${image})` }}
    >
      <span className="prop-label">{name}</span>
    </div>
  );
};

export default Props;
