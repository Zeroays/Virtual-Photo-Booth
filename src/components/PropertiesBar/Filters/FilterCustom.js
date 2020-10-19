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

  const handleOverlayData = (value, name) => {
    const overlay = { ...customData.overlay };
    // console.log(overlay.data[customData.overlay.selectedOption][name]);
    // console.log(value);
    // console.log(name);
    overlay.data[customData.overlay.selectedOption][name].value = value;
    setCustomData({ filters: customData.filters, overlay });
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
      <OverlayProperties
        selected={customData.overlay.selectedOption}
        backgroundData={
          customData.overlay.data[customData.overlay.selectedOption]
        }
        overlayDataHandler={handleOverlayData}
      />
    </div>
  );
};

const SolidBackgroundProperties = ({ data, handler }) => {
  const { background_color, mix_blend_mode, opacity } = data;

  const propertiesHandler = (value, name) => {
    handler(value, name.toLowerCase().replace(/ /g, "_"));
  };

  return (
    <>
      <ColorPicker data={background_color} handler={propertiesHandler} />
      <DropDown data={mix_blend_mode} handler={propertiesHandler} />
      <Slider sliderData={opacity} sliderHandler={propertiesHandler} />
    </>
  );
};

const LinearGradientBackgroundProperties = ({ data, handler }) => {
  const {
    color_1,
    stop_1,
    color_2,
    stop_2,
    gradient_direction,
    mix_blend_mode,
    opacity,
  } = data;

  const propertiesHandler = (value, name) => {
    handler(value, name.toLowerCase().replace(/ /g, "_"));
  };
  return <NumberInput data={stop_1} handler={propertiesHandler} />;
};

const RadialGradientBackgroundProperties = () => {
  return <h1>RadialGradientBackgroundProperties</h1>;
};

const FilterCustomSliders = ({ data, handler }) => {
  const handleSliderChange = (value, name) => {
    const updatedSliderData = data.map((item) => {
      if (item.name === name) {
        item.value = value;
      }
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

const OverlayProperties = ({
  selected,
  backgroundData,
  overlayDataHandler,
}) => {
  return (
    <>{getBackgroundProperty(backgroundData, overlayDataHandler)[selected]}</>
  );
};

const getBackgroundProperty = (backgroundData, overlayDataHandler) => ({
  None: null,
  "Solid Background": (
    <SolidBackgroundProperties
      data={backgroundData}
      handler={overlayDataHandler}
    />
  ),
  "Linear Gradient": (
    <LinearGradientBackgroundProperties
      data={backgroundData}
      handler={overlayDataHandler}
    />
  ),
  "Radial Gradient": (
    <RadialGradientBackgroundProperties
      data={backgroundData}
      handler={overlayDataHandler}
    />
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

const NumberInput = ({ data, handler }) => {
  const { name, min, max, value } = data;
  const handleValueChange = (value) => {
    if (+value + 1 > +max) handler(max, name);
    else if (+value - 1 < +min) handler(min, name);
    else handler(value.replace(/\D+/g, ""), name);
  };
  const increaseValue = () => {
    if (+value + 1 > +max) return;
    handler((+value + 1).toString(), name);
  };
  const decreaseValue = () => {
    if (+value - 1 < +min) return;
    handler((+value - 1).toString(), name);
  };
  return (
    <div className="number-input">
      <NumberInputField value={value} handler={handleValueChange} />
      <NumberInputButton name={"+"} handler={increaseValue} />
      <NumberInputButton name={"-"} handler={decreaseValue} />
      <NumberInputLabel name={name} />
    </div>
  );
};

const NumberInputField = ({ value, handler }) => {
  return (
    <input
      className="input-field"
      onChange={(e) => {
        handler(e.target.value);
      }}
      value={value}
    ></input>
  );
};

const NumberInputButton = ({ name, handler }) => {
  return (
    <button className="input-btn" onClick={handler}>
      {name}
    </button>
  );
};

const NumberInputLabel = ({ name }) => {
  return <span className="input-name">{name}</span>;
};

const DropDown = ({ data, handler }) => {
  return (
    <div className="dropdown">
      <DropDownName name={data.name} />
      <DropDownSelections data={data} handler={handler} />
    </div>
  );
};

const DropDownName = ({ name }) => {
  return <span className="dropdown-title">{name}</span>;
};

const DropDownSelections = ({ data, handler }) => {
  const { name, options, value } = data;

  const handleSelectionChange = (e) => {
    handler(e.target.value, name);
  };
  return (
    <select value={value} onChange={handleSelectionChange}>
      {options.map((option) => (
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

  const handleSliderChange = (e) => {
    handler(e.target.value, name);
  };
  return (
    <input
      type="range"
      min={min}
      max={max}
      id={name}
      value={value}
      className="filter-slider"
      onChange={handleSliderChange}
    ></input>
  );
};

export default FilterCustom;