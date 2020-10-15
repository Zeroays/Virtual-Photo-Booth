import React, { useState } from "react";
import { filterDataCustom } from "./FilterData";

const FilterCustom = () => {
  const [customData, setCustomData] = useState(filterDataCustom);

  const [selectedOverlay, setSelectedOverlay] = useState(
    customData.overlay.selectedOption
  );
  const handleSliderChange = (e) => {
    const updatedSliderData = customData.filters.map((item) => {
      if (item.name === e.target.id) item.value = e.target.value;
      return item;
    });
    setCustomData({ filters: updatedSliderData, overlay: customData.overlay });
  };
  const handleOverlaySelection = (e) => {
    setSelectedOverlay(e.target.value);
  };
  return (
    <div className="filter-custom">
      <FilterCustomSliders
        filters={customData.filters}
        sliderHandler={handleSliderChange}
      />
      <FilterCustomOverlayChoices
        overlay={customData.overlay}
        overlayHandler={handleOverlaySelection}
        selectedOverlay={selectedOverlay}
      />
      {
        {
          None: null,
          "Solid Background": <SolidBackgroundProperties />,
          "Linear Gradient": <LinearGradientBackgroundProperties />,
          "Radial Gradient": <RadialGradientBackgroundProperties />,
        }[selectedOverlay]
      }
    </div>
  );
};

const SolidBackgroundProperties = () => {
  return <h1>SolidBackgroundProperties</h1>;
};

const LinearGradientBackgroundProperties = () => {
  return <h1>LinearGradientBackgroundProperties</h1>;
};

const RadialGradientBackgroundProperties = () => {
  return <h1>RadialGradientBackgroundProperties</h1>;
};

const FilterCustomSliders = ({ filters, sliderHandler }) => {
  return (
    <>
      <span className="filter-title">Filters</span>
      {filters.map((slider) => {
        return (
          <FilterSlider
            sliderData={slider}
            key={slider.name}
            sliderHandler={sliderHandler}
          />
        );
      })}
    </>
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

const FilterCustomOverlayChoices = ({
  overlay,
  overlayHandler,
  selectedOverlay,
}) => {
  return (
    <>
      <span className="overlay-title">Overlay</span>
      <div className="overlay-choices">
        {overlay.options.map((option) => {
          return (
            <div className="choice" key={option}>
              <label htmlFor={option}>{option}</label>
              <input
                type="radio"
                id={option}
                name="overlay-type"
                value={option}
                onChange={overlayHandler}
                checked={selectedOverlay === option}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FilterCustom;
