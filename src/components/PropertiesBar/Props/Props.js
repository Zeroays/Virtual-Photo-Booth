import React, { useState } from "react";
import propData from "./PropData";
import "./props.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/fontawesome-free-solid";
import { useDispatch } from "react-redux";
import { addPhotoProp } from "../../../redux/actions/photoProps.action";

const Props = () => {
  const dispatch = useDispatch();
  const [propQuery, setPropQuery] = useState("");

  const handlePropSelection = (img) => {
    dispatch(addPhotoProp(img));
  };

  const handlePropQuery = (e) => {
    setPropQuery(e.target.value);
  };

  return (
    <div className="props-pane-properties">
      <PropsSearchBar query={propQuery} queryHandler={handlePropQuery} />
      <PropImages
        query={propQuery}
        propSelectionHandler={handlePropSelection}
      />
    </div>
  );
};

const PropsSearchBar = ({ query, queryHandler }) => {
  return (
    <div className="props-search-bar">
      <PropsSearchHandler handler={queryHandler} data={query} />
    </div>
  );
};

const PropsSearchHandler = ({ handler, data }) => {
  return (
    <div className="props-search-handler">
      <FontAwesomeIcon icon={faSearch} />
      <input
        type="input"
        placeholder="Search props"
        value={`${data}`}
        onChange={handler}
      ></input>
    </div>
  );
};

const PropImages = ({ query, propSelectionHandler }) => {
  const searchQueryInPropName = (prop, query) => {
    return prop.label.toLowerCase().includes(query.toLowerCase());
  };
  return (
    <div className="props-pane-content">
      {propData.map((prop) => {
        if (searchQueryInPropName(prop, query))
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
