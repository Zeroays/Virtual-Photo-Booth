import React, { useEffect, useState } from "react";
import ColorPicker from "/src/components/Utils/ColorPicker";
import { filterDataCustom } from "./FilterData";

const FilterCustom = () => {
  return (
    <div className="filter-custom">
      <FilterCustomSliders />
      <FilterCustomOverlayChoices />
    </div>
  );
};

const SolidBackgroundProperties = ({ data }) => {
  const [mixBlendModeOption, setMixBlendModeOption] = useState(
    data["mix-blend-mode"].selectedOption
  );
  const [opacity, setOpacity] = useState(data.opacity);
  const handleMixBlendModeSelectedOption = (e) => {
    setMixBlendModeOption(e.target.value);
  };
  const handleSliderChange = (e) => {
    const res = { ...opacity };
    res.value = e.target.value;
    setOpacity(res);
  };
  return (
    <>
      <span className="picker-title">Background Color</span>
      <ColorPicker />
      <DropDown
        selected={mixBlendModeOption}
        dropDownData={data["mix-blend-mode"].options}
        dropDownHandler={handleMixBlendModeSelectedOption}
      />
      <Slider sliderData={opacity} sliderHandler={handleSliderChange} />
    </>
  );
};

const LinearGradientBackgroundProperties = () => {
  return <h1>LinearGradientBackgroundProperties</h1>;
};

const RadialGradientBackgroundProperties = () => {
  return <h1>RadialGradientBackgroundProperties</h1>;
};

const FilterCustomSliders = () => {
  const [filterSlidersData, setFilterSlidersData] = useState(
    filterDataCustom.filters
  );

  const handleSliderChange = (e) => {
    const updatedSliderData = filterSlidersData.map((item) => {
      if (item.name === e.target.id) item.value = e.target.value;
      return item;
    });
    setFilterSlidersData(updatedSliderData);
  };
  return (
    <div className="filters">
      <span className="filter-title">Filters</span>
      {filterSlidersData.map((slider) => {
        return (
          <Slider
            sliderData={slider}
            key={slider.name}
            sliderHandler={handleSliderChange}
          />
        );
      })}
    </div>
  );
};

const FilterCustomOverlayChoices = () => {
  const [overlayData, setOverlayData] = useState(filterDataCustom.overlay);

  const [selectedOverlay, setSelectedOverlay] = useState(
    filterDataCustom.overlay.selectedOption
  );

  const handleOverlaySelection = (e) => {
    setSelectedOverlay(e.target.value);
  };
  return (
    <div className="overlay">
      <RadioButtons
        selected={selectedOverlay}
        radioButtonsData={overlayData.options}
        radioButtonsHandler={handleOverlaySelection}
      />
      {
        {
          None: null,
          "Solid Background": (
            <SolidBackgroundProperties
              data={overlayData.data["Solid Background"]}
            />
          ),
          "Linear Gradient": <LinearGradientBackgroundProperties />,
          "Radial Gradient": <RadialGradientBackgroundProperties />,
        }[selectedOverlay]
      }
    </div>
  );
};

//Reusable Components

const RadioButtons = ({ selected, radioButtonsData, radioButtonsHandler }) => {
  return (
    <div className="radio-btns">
      <span className="radio-btns-title">Overlay</span>
      <div className="radio-btns-choices">
        {radioButtonsData.map((option) => {
          return (
            <div className="choice" key={option}>
              <label htmlFor={option}>{option}</label>
              <input
                type="radio"
                id={option}
                name="overlay-type"
                value={option}
                onChange={radioButtonsHandler}
                checked={selected === option}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const DropDown = ({ selected, dropDownData, dropDownHandler }) => {
  return (
    <div className="dropdown">
      <span className="dropdown-title">{dropDownData.name}</span>
      <select value={selected} onChange={dropDownHandler}>
        {dropDownData.map((option) => {
          return <option key={option}>{option}</option>;
        })}
      </select>
    </div>
  );
};

const Slider = ({ sliderData, sliderHandler }) => {
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

export default FilterCustom;
