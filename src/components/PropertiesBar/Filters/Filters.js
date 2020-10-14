import React, { useState, useRef, useEffect } from "react";
import { filterDataCustom, filterDataPresets } from "./FilterData";
import "./filters.css";

const Filters = () => {
  const options = ["Preset", "Custom"];

  const [customSlidersData, setCustomSlidersData] = useState(
    filterDataCustom.filters
  );

  const [selectedFilterTab, setSelectedFilterTab] = useState("Preset");

  const handleSliderChange = (e) => {
    const updatedSliderData = customSlidersData.map((item) => {
      if (item.name === e.target.id) item.value = e.target.value;
      return item;
    });
    setCustomSlidersData(updatedSliderData);
  };

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
            Custom: (
              <FilterCustom
                filterData={customSlidersData}
                sliderHandler={handleSliderChange}
              />
            ),
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
        console.log(option, selectedFilterTab);
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

const FilterCustom = ({ filterData, sliderHandler }) => {
  return (
    <div className="filter-custom">
      {filterData.map((slider) => {
        return (
          <FilterSlider
            sliderData={slider}
            key={slider.name}
            sliderHandler={sliderHandler}
          />
        );
      })}
    </div>
  );
};

const FilterSlider = ({ sliderData, sliderHandler }) => {
  return (
    <div className="slider">
      <span className="filter-name">{sliderData.name}</span>
      <span className="filter-value">{`${sliderData.value}${sliderData.unit}`}</span>
      <input
        type="range"
        min={sliderData.min}
        max={sliderData.max}
        id={sliderData.name}
        value={sliderData.value}
        className="filter-slider"
        onChange={sliderHandler}
      ></input>
    </div>
  );
};

const FilterPresets = () => {
  return (
    <div className="filter-presets">
      {filterDataPresets.map((preset) => {
        return <FilterPreset preset={preset} key={preset.filter} />;
      })}
    </div>
  );
};

const FilterPreset = ({ preset }) => {
  // const presetFilterStyle = convertFilterDataToStyle(preset.filters);
  // style={presetFilterStyle}
  return (
    <div className="preset">
      <div className={`preset-filter ${preset.className}`}>
        {/* <div className="preset-filter-overlay"></div> */}
        <img
          className="preset-preview"
          src="/src/assets/stockPhotos/woman_sitting.jpg"
          alt="catdog"
        />
      </div>
      <div className="preset-name">{preset.filter}</div>
    </div>
  );
};

export default Filters;
