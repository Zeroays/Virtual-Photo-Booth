import React, { useState } from "react";
import { ChromePicker } from "react-color";
import "./colorpicker.css";

const ColorPicker = () => {
  const [color, setColor] = useState({
    r: "255",
    g: "0",
    b: "0",
    a: "1",
  });
  const [pickerVisibility, setPickerVisibility] = useState(false);

  const toggleDisplay = () => setPickerVisibility(!pickerVisibility);

  const turnOffPicker = () => setPickerVisibility(false);

  const handleColorChange = (color) => setColor(color.rgb);

  return (
    <div className="color-picker">
      <PickerSwatch displayHandler={toggleDisplay} />
      {pickerVisibility ? (
        <PickerPopOver
          coverProps={turnOffPicker}
          chromePickerProps={{ color, handleColorChange }}
        />
      ) : null}
    </div>
  );
};

const PickerPopOver = ({ coverProps, chromePickerProps }) => {
  const { color, handleColorChange } = chromePickerProps;
  return (
    <div className="picker-popover">
      <PickerCover displayHandler={coverProps} />
      <ChromePicker color={color} onChange={handleColorChange} />
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
