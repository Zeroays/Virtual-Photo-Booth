import React, { useState } from "react";
import { ChromePicker } from "react-color";
import "./colorpicker.css";

const ColorPicker = ({ data, handler }) => {
  return (
    <div className="color-picker">
      <PickerName name={data.name} />
      <div className="color-choice">
        <PickerChoice colorData={data} colorHandler={handler} />
      </div>
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
    <>
      <PickerSwatch displayHandler={toggleDisplay} />
      {pickerVisibility ? (
        <PickerPopOver
          coverProps={turnOffPicker}
          chromePickerProps={{ colorData, handleColorChange }}
        />
      ) : null}
    </>
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

const PickerSwatch = ({ displayHandler }) => {
  return (
    <div className="picker-swatch">
      <div className="picker-color" onClick={displayHandler}></div>
    </div>
  );
};

const PickerCover = ({ displayHandler }) => {
  return <div className="picker-cover" onClick={displayHandler}></div>;
};

export default ColorPicker;
