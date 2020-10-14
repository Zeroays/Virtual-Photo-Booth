import React, { useState } from "react";
import { filterDataCustom, filterDataPresets } from "./FilterData";
import "./filters.css";

const Filters = () => {
  const [customSlidersData, setCustomSlidersData] = useState(
    filterDataCustom.filters
  );

  const handleSliderChange = (e) => {
    const updatedSliderData = customSlidersData.map((item) => {
      if (item.name === e.target.id) item.value = e.target.value;
      return item;
    });
    setCustomSlidersData(updatedSliderData);
  };

  return (
    <div className="filter-pane-properties">
      <div className="filter-pane-content">
        <FilterCustom
          filterData={customSlidersData}
          sliderHandler={handleSliderChange}
        />
        <FilterPresets />
      </div>
    </div>
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
        return <FilterPreset preset={preset} key={preset.name} />;
      })}
    </div>
  );
};

const FilterPreset = ({ preset }) => {
  const presetFilterStyle = convertFilterDataToStyle(preset.filters);
  return (
    <div className="preset">
      <div className="preset-filter" style={presetFilterStyle}>
        <div className="preset-filter-overlay"></div>
        <img
          className="preset-preview"
          src="/src/assets/stockPhotos/woman_sitting.jpg"
          alt="catdog"
        />
      </div>
      <div className="preset-name">{preset.name}</div>
    </div>
  );
};

const convertFilterDataToStyle = (preset) => {
  const style = preset.reduce(
    (res, filter) =>
      res + `${filter.name.replace(" ", "-").toLowerCase()}(${filter.value}) `,
    ""
  );
  return {
    filter: style,
    WebkitFilter: style,
  };
};

export default Filters;
