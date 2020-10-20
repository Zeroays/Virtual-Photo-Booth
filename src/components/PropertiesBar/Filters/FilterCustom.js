import React, { useState } from "react";
import ColorPicker from "/src/components/Utils/ColorPicker";
import { filterDataCustom } from "./FilterData";

const FilterCustom = () => {
  const [filterData, setFilterData] = useState(filterDataCustom.filters);
  const [overlayData, setOverlayData] = useState(filterDataCustom.overlay);

  const handleOverlaySelection = (e) => {
    const { value, ...rest } = overlayData;
    setOverlayData({ value: e.target.value, ...rest });
  };
  const handleFilterData = (updatedData) => {
    setFilterData(updatedData);
  };

  const handleOverlayData = (newValue, name) => {
    const { value, data, ...rest } = overlayData;
    data[value][name].value = newValue;
    setOverlayData({ value, data, ...rest });
  };

  return (
    <div className="filter-custom">
      <FilterCustomSliders data={filterData} handler={handleFilterData} />
      <FilterCustomOverlayChoices
        selected={overlayData.value}
        data={overlayData}
        handler={handleOverlaySelection}
      />
      <OverlayProperties
        selected={overlayData.value}
        data={overlayData.data[overlayData.value]}
        handler={handleOverlayData}
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
      <Slider data={opacity} handler={propertiesHandler} />
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
  return (
    <>
      <ColorPickerWithStop
        data={{ color: color_1, stop: stop_1 }}
        handler={propertiesHandler}
      />
      <ColorPickerWithStop
        data={{ color: color_2, stop: stop_2 }}
        handler={propertiesHandler}
      />
      <DropDown data={gradient_direction} handler={propertiesHandler} />
      <DropDown data={mix_blend_mode} handler={propertiesHandler} />
      <Slider data={opacity} handler={propertiesHandler} />
    </>
  );
};

const RadialGradientBackgroundProperties = ({ data, handler }) => {
  const {
    color_1,
    stop_1,
    color_2,
    stop_2,
    gradient_position,
    gradient_size,
    mix_blend_mode,
    opacity,
  } = data;

  const propertiesHandler = (value, name) => {
    handler(value, name.toLowerCase().replace(/ /g, "_"));
  };

  return (
    <>
      <ColorPickerWithStop
        data={{ color: color_1, stop: stop_1 }}
        handler={propertiesHandler}
      />
      <ColorPickerWithStop
        data={{ color: color_2, stop: stop_2 }}
        handler={propertiesHandler}
      />
      <DropDown data={gradient_position} handler={propertiesHandler} />
      <DropDown data={gradient_size} handler={propertiesHandler} />
      <DropDown data={mix_blend_mode} handler={propertiesHandler} />
      <Slider data={opacity} handler={propertiesHandler} />
    </>
  );
};

const ColorPickerWithStop = ({ data, handler }) => {
  const { color, stop } = data;
  return (
    <div className="color-picker-stop">
      <ColorPicker data={color} handler={handler} />
      <NumberInput data={stop} handler={handler} />
    </div>
  );
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
        <Slider data={slider} key={slider.name} handler={handleSliderChange} />
      ))}
    </div>
  );
};

const FilterCustomOverlayChoices = ({ selected, data, handler }) => {
  return (
    <div className="overlay-choices">
      <RadioButtons
        selected={selected}
        radioButtonsData={data.options}
        radioButtonsHandler={handler}
      />
    </div>
  );
};

const OverlayProperties = ({ selected, data, handler }) => {
  return (
    <div className="overlay-properties">
      {getBackgroundProperty(data, handler)[selected]}
    </div>
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

const Slider = ({ data, handler }) => {
  const { name, value, unit, min, max } = data;
  return (
    <div className="slider">
      <SliderName name={name} />
      <SliderValue value={value} unit={unit} />
      <SliderInput data={{ name, value, min, max }} handler={handler} />
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
