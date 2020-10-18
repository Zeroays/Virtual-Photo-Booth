import React, { useEffect, useState } from "react";
import ColorPicker from "/src/components/Utils/ColorPicker";
import { filterDataCustom } from "./FilterData";

const FilterCustom = () => {
  const [customData, setCustomData] = useState({
    filters: filterDataCustom.filters,
    overlay: filterDataCustom.overlay,
  });

  const handleOverlaySelection = (e) => {
    const overlay = { ...customData.overlay };
    overlay.selectedOption = e.target.value;
    setCustomData({ filters: customData.filters, overlay });
  };

  const handleFilterData = (updatedData) => {
    const { overlay } = customData;
    setCustomData({ filters: updatedData, overlay });
  };

  return (
    <div className="filter-custom">
      <FilterCustomSliders
        data={customData.filters}
        handler={handleFilterData}
      />
      <FilterCustomOverlayChoices
        selected={customData.overlay.selectedOption}
        data={customData.overlay}
        handler={handleOverlaySelection}
      />
      <BackgroundProperty
        selected={customData.overlay.selectedOption}
        backgroundData={
          customData.overlay.data[customData.overlay.selectedOption]
        }
      />
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

const FilterCustomSliders = ({ data, handler }) => {
  const handleSliderChange = (e) => {
    const updatedSliderData = data.map((item) => {
      if (item.name === e.target.id) item.value = e.target.value;
      return item;
    });
    handler(updatedSliderData);
  };
  return (
    <div className="filters">
      {data.map((slider) => (
        <Slider
          sliderData={slider}
          key={slider.name}
          sliderHandler={handleSliderChange}
        />
      ))}
    </div>
  );
};

const FilterCustomOverlayChoices = ({ selected, data, handler }) => {
  return (
    <div className="overlay">
      <RadioButtons
        selected={selected}
        radioButtonsData={data.options}
        radioButtonsHandler={handler}
      />
    </div>
  );
};

const BackgroundProperty = ({ selected, backgroundData }) => {
  return <>{getBackgroundProperty(backgroundData)[selected]}</>;
};

const getBackgroundProperty = (backgroundData) => ({
  None: null,
  "Solid Background": <SolidBackgroundProperties data={backgroundData} />,
  "Linear Gradient": (
    <LinearGradientBackgroundProperties data={backgroundData} />
  ),
  "Radial Gradient": (
    <RadialGradientBackgroundProperties data={backgroundData} />
  ),
});

//Reusable Components

const RadioButtons = ({ selected, radioButtonsData, radioButtonsHandler }) => {
  return (
    <div className="radio-btns">
      <RadioButtonsName name={"Overlay"} />
      <RadioButtonsChoices
        data={{ selected, radioButtonsData }}
        handler={radioButtonsHandler}
      />
    </div>
  );
};

const RadioButtonsName = ({ name }) => {
  return <span className="radio-btns-title">{name}</span>;
};

const RadioButtonsChoices = ({ data, handler }) => {
  const { selected, radioButtonsData } = data;
  return (
    <div className="radio-btns-choices">
      {radioButtonsData.map((option) => {
        return (
          <RadioButtonsChoice
            name={option}
            checked={selected === option}
            key={option}
            handler={handler}
          />
        );
      })}
    </div>
  );
};

const RadioButtonsChoice = ({ name, checked, handler }) => {
  return (
    <div className="choice" key={name}>
      <RadioButtonsChoiceInput
        name={name}
        checked={checked}
        handler={handler}
      />
      <RadioButtonsChoiceLabel name={name} />
    </div>
  );
};

const RadioButtonsChoiceInput = ({ name, checked, handler }) => {
  return (
    <input
      type="radio"
      id={name}
      name="overlay-type"
      value={name}
      onChange={handler}
      checked={checked}
    />
  );
};

const RadioButtonsChoiceLabel = ({ name }) => {
  return <label htmlFor={name}>{name}</label>;
};

const DropDown = ({ selected, dropDownData, dropDownHandler }) => {
  return (
    <div className="dropdown">
      <DropDownName name={dropDownData.name} />
      <DropDownSelections
        data={{ selected, dropDownData }}
        handler={dropDownHandler}
      />
    </div>
  );
};

const DropDownName = ({ name }) => {
  return <span className="dropdown-title">{name}</span>;
};

const DropDownSelections = ({ data, handler }) => {
  const { selected, dropDownData } = data;
  return (
    <select value={selected} onChange={handler}>
      {dropDownData.map((option) => (
        <DropDownSelection option={option} key={option} />
      ))}
    </select>
  );
};

const DropDownSelection = ({ option }) => {
  return <option>{option}</option>;
};

const Slider = ({ sliderData, sliderHandler }) => {
  const { name, value, unit, min, max } = sliderData;
  return (
    <div className="slider">
      <SliderName name={name} />
      <SliderValue value={value} unit={unit} />
      <SliderInput data={{ name, value, min, max }} handler={sliderHandler} />
    </div>
  );
};

const SliderName = ({ name }) => {
  return <span className="filter-name">{name}</span>;
};

const SliderValue = ({ value, unit }) => {
  return <span className="filter-value">{`${value}${unit}`}</span>;
};

const SliderInput = ({ data, handler }) => {
  const { name, value, min, max } = data;
  return (
    <input
      type="range"
      min={min}
      max={max}
      id={name}
      value={value}
      className="filter-slider"
      onChange={handler}
    ></input>
  );
};

export default FilterCustom;
