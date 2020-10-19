import React, { useState } from "react";
import { ChromePicker } from "react-color";
import "./colorpicker.css";

const ColorPicker = ({ data, handler }) => {
  return (
    <div className="color-picker">
      <PickerChoice colorData={data} colorHandler={handler} />
      <PickerName name={data.name} />
    </div>
  );
};

const PickerName = ({ name }) => {
  return <span className="picker-title">{name}</span>;
};

const PickerChoice = ({ colorData, colorHandler }) => {
  const [pickerVisibility, setPickerVisibility] = useState(false);

  const toggleDisplay = () => setPickerVisibility(!pickerVisibility);

  const turnOffPicker = () => setPickerVisibility(false);

  const handleColorChange = (color) => {
    colorHandler(color.rgb, colorData.name);
  };

  return (
    <div className="color-choice">
      <PickerSwatch colorData={colorData} displayHandler={toggleDisplay} />
      {pickerVisibility ? (
        <PickerPopOver
          coverProps={turnOffPicker}
          chromePickerProps={{ colorData, handleColorChange }}
        />
      ) : null}
    </div>
  );
};

const PickerPopOver = ({ coverProps, chromePickerProps }) => {
  const { colorData, handleColorChange } = chromePickerProps;
  return (
    <div className="picker-popover">
      <PickerCover displayHandler={coverProps} />
      <ChromePicker color={colorData.value} onChange={handleColorChange} />
    </div>
  );
};

const PickerSwatch = ({ colorData, displayHandler }) => {
  const { value } = colorData;
  const swatchStyle = {
    backgroundColor: `rgba(${value.r}, ${value.g}, ${value.b}, ${value.a})`,
  };
  return (
    <div className="picker-swatch">
      <div
        className="picker-color"
        onClick={displayHandler}
        style={swatchStyle}
      ></div>
    </div>
  );
};

const PickerCover = ({ displayHandler }) => {
  return <div className="picker-cover" onClick={displayHandler}></div>;
};

export default ColorPicker;
