import React, { useState } from "react";
import "./filters.css";

const filterData = [
  {
    type: "slider",
    name: "Contrast",
    value: "100",
  },
  {
    type: "slider",
    name: "Brightness",
    value: "100",
  },
  {
    type: "slider",
    name: "Saturate",
    value: "100",
  },
  {
    type: "slider",
    name: "Sepia",
    value: "100",
  },
  {
    type: "slider",
    name: "Greyscale",
    value: "100",
  },
  {
    type: "slider",
    name: "Invert",
    value: "100",
  },
  {
    type: "slider",
    name: "Hue Rotate",
    value: "100",
  },
  {
    type: "slider",
    name: "Blur",
    value: "100",
  },
];

const Filters = () => {
  return (
    <div className="filter-pane-properties">
      <div className="filter-pane-content">
        <FilterCustom />
        <FilterPresets />
      </div>
    </div>
  );
};

const FilterCustom = () => {
  const [customSlidersData, setCustomSlidersData] = useState(filterData);

  const handleSliderChange = (e) => {
    const updatedSliderData = customSlidersData.map((item) => {
      if (item.name === e.target.id) item.value = e.target.value;
      return item;
    });
    setCustomSlidersData(updatedSliderData);
  };

  return (
    <div className="filter-custom">
      {customSlidersData.map((slider) => {
        return (
          <FilterSlider
            name={slider.name}
            value={slider.value}
            key={slider.name}
            sliderHandler={handleSliderChange}
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
