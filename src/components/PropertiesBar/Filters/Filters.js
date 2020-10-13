import React, { useState } from "react";
import filterData from "./FilterData";
import "./filters.css";

const Filters = () => {
  const [customSlidersData, setCustomSlidersData] = useState(filterData);

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
            name={slider.name}
            value={slider.value}
            key={slider.name}
            sliderHandler={sliderHandler}
          />
        );
      })}
    </div>
  );
};

const FilterSlider = ({ name, value, sliderHandler }) => {
  return (
    <div className="slider">
      <span className="filter-name">{name}</span>
      <span className="filter-value">{value}</span>
      <input
        type="range"
        min="1"
        max="200"
        id={name}
        value={`${value}`}
        className="filter-slider"
        onChange={sliderHandler}
      ></input>
    </div>
  );
};

const FilterPresets = () => {
  return <div className="filter-presets"></div>;
};

export default Filters;
