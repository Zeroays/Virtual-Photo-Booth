import React, { useState } from "react";
import FilterPresets from "./FilterPresets";
import FilterCustom from "./FilterCustom";
import "./filters.css";

//Omitting filters, for now... -> KonvaJS has built in support,
//but does not match CSS Filters

const Filters = () => {
  /* //UNCOMMENT WHEN FILTER FIXED// */

  // const options = ["Preset", "Custom"];

  // const [selectedFilterTab, setSelectedFilterTab] = useState("Preset");

  // const handleFilterSelection = (e) => {
  //   setSelectedFilterTab(e.target.innerHTML);
  // };

  /* //END UNCOMMENT */

  return (
    <>
      <div className="filter-pane-properties">
        <div className="filter-pane-content">
          {/* REMOVE PLACEHOLDER TEXT, WHEN FILTER FIXED*/}

          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontWeight: 500,
            }}
          >
            Coming Soon!
          </p>

          {/* END REMOVE */}

          {/* //UNCOMMENT WHEN FILTER FIXED// */}

          {/* <FilterTabsButtons
            options={options}
            filterSelectionHandler={handleFilterSelection}
            selectedFilterTab={selectedFilterTab}
          />
          {
            {
              Preset: <FilterPresets />,
              Custom: <FilterCustom />,
            }[selectedFilterTab]
          } */}

          {/* //END UNCOMMENT */}
        </div>
      </div>
    </>
  );
};

const FilterTabsButtons = ({
  options,
  filterSelectionHandler,
  selectedFilterTab,
}) => {
  const selectedTabStyle = {
    color: "#343b46",
    backgroundColor: "#d9dbdf",
    boxShadow: "none",
    fontSize: "1rem",
  };
  return (
    <div className="filter-options">
      {options.map((option) => {
        return (
          <FilterTabButton
            name={option}
            key={option}
            filterSelectionHandler={filterSelectionHandler}
            style={option === selectedFilterTab ? selectedTabStyle : null}
          />
        );
      })}
    </div>
  );
};

const FilterTabButton = ({ name, filterSelectionHandler, style }) => {
  return (
    <button
      className="filter-options-btn"
      onClick={filterSelectionHandler}
      style={style}
    >
      {name}
    </button>
  );
};

export default Filters;
