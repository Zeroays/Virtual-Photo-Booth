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

  const toggleDisplay = () => {
    setPickerVisibility(!pickerVisibility);
  };

  const handleColorChange = (color) => {
    console.log(color);
    setColor(color.rgb);
  };

  return (
    <div className="color-picker">
      <div className="picker-swatch">
        <div className="picker-color" onClick={toggleDisplay}></div>
      </div>
      {pickerVisibility ? (
        <div className="picker-popover">
          <div
            className="picker-cover"
            onClick={() => {
              setPickerVisibility(false);
            }}
          ></div>
          <ChromePicker color={color} onChange={handleColorChange} />
        </div>
      ) : null}
    </div>
  );
};

export default ColorPicker;
