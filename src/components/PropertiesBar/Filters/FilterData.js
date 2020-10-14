const filterDataCustom = {
  filters: [
    {
      type: "slider",
      name: "Contrast",
      min: "0",
      value: "100",
      max: "200",
      unit: "%",
    },
    {
      type: "slider",
      name: "Brightness",
      min: "0",
      value: "100",
      max: "200",
      unit: "%",
    },
    {
      type: "slider",
      name: "Saturate",
      min: "0",
      value: "100",
      max: "200",
      unit: "%",
    },
    {
      type: "slider",
      name: "Sepia",
      min: "0",
      value: "100",
      max: "200",
      unit: "%",
    },
    {
      type: "slider",
      name: "Grayscale",
      min: "0",
      value: "100",
      max: "200",
      unit: "%",
    },
    {
      type: "slider",
      name: "Invert",
      min: "0",
      value: "100",
      max: "200",
      unit: "%",
    },
    {
      type: "slider",
      name: "Hue Rotate",
      min: "0",
      value: "0",
      max: "360",
      unit: "deg",
    },
    {
      type: "slider",
      name: "Blur",
      min: "0",
      value: "0",
      max: "10",
      unit: "px",
    },
  ],
  overlay: {
    type: "None",
    value: null,
  },
};

const filter1977 = {
  name: "1977",
  filters: [
    { name: "Contrast", value: "110%" },
    { name: "Brightness", value: "110%" },
    { name: "Saturate", value: "130%" },
    { name: "Sepia", value: "0%" },
    { name: "Grayscale", value: "0%" },
    { name: "Invert", value: "0%" },
    { name: "Hue Rotate", value: "0deg" },
    { name: "Blur", value: "0px" },
  ],
  overlay: {
    type: "Solid Background",
    value: {
      "Background Color": "rgba(243, 106, 188, 0.3)",
      "Mix Blend Mode": "screen",
      Opacity: "100",
    },
  },
};

const filterAden = {
  name: "Aden",
  filters: [
    { name: "Contrast", value: "90%" },
    { name: "Brightness", value: "120%" },
    { name: "Saturate", value: "85%" },
    { name: "Sepia", value: "0%" },
    { name: "Grayscale", value: "0%" },
    { name: "Invert", value: "0%" },
    { name: "Hue Rotate", value: "20deg" },
    { name: "Blur", value: "0px" },
  ],
  overlay: {
    type: "Linear Gradient",
    value: {
      "Color 1": {
        value: "rgba(66, 10, 14, 0.2)",
        stop: "1",
      },
      "Color 2": {
        value: "rgba(66, 10, 14, 0)",
        stop: "100",
      },
      "Gradient Direction": "to right",
      "Mix Blend Mode": "darken",
      Opacity: "100",
    },
  },
};

const filterAmaro = {
  name: "Amaro",
  filters: [
    { name: "Contrast", value: "90%" },
    { name: "Brightness", value: "110%" },
    { name: "Saturate", value: "150%" },
    { name: "Sepia", value: "0%" },
    { name: "Grayscale", value: "0%" },
    { name: "Invert", value: "0%" },
    { name: "Hue Rotate", value: "-10deg" },
    { name: "Blur", value: "0px" },
  ],
  overlay: {
    type: "None",
    value: null,
  },
};

const filterDataPresets = [filter1977, filterAden, filterAmaro];

export { filterDataCustom, filterDataPresets };
