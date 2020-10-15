import React, { useState } from "react";
import FilterPresets from "./FilterPresets";
import FilterCustom from "./FilterCustom";
import "./filters.css";

const Filters = () => {
  const options = ["Preset", "Custom"];

  const [selectedFilterTab, setSelectedFilterTab] = useState("Preset");

  const handleFilterSelection = (e) => {
    setSelectedFilterTab(e.target.innerHTML);
  };

  return (
    <div className="filter-pane-properties">
      <div className="filter-pane-content">
        <FilterTabsButtons
          options={options}
          filterSelectionHandler={handleFilterSelection}
          selectedFilterTab={selectedFilterTab}
        />
        {
          {
            Preset: <FilterPresets />,
            Custom: <FilterCustom />,
          }[selectedFilterTab]
        }
      </div>
    </div>
  );
};

const FilterTabsButtons = ({
  options,
  filterSelectionHandler,
  selectedFilterTab,
}) => {
  return (
    <div className="filter-options">
      {options.map((option) => {
        return (
          <FilterTabButton
            name={option}
            key={option}
            filterSelectionHandler={filterSelectionHandler}
            style={
              option === selectedFilterTab
                ? { background: "#343b46", color: "white" }
                : null
            }
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
