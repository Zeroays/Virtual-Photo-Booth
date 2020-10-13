const filterDataCustom = [
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
    name: "Greyscale",
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
];

const filter1977 = {
  name: "1977",
  filters: {
    Contrast: "110",
    Brightness: "110",
    Saturate: "130",
    Sepia: "0",
    Greyscale: "0",
    Invert: "0",
    "Hue Rotate": "0",
    Blur: "0",
  },
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
  filters: {
    Contrast: "90",
    Brightness: "120",
    Saturate: "85",
    Sepia: "0",
    Greyscale: "0",
    Invert: "0",
    "Hue Rotate": "20",
    Blur: "0",
  },
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
  filters: {
    Contrast: "90",
    Brightness: "110",
    Saturate: "150",
    Sepia: "0",
    Greyscale: "0",
    Invert: "0",
    "Hue Rotate": "-10",
    Blur: "0",
  },
  overlay: {
    type: "None",
    value: null,
  },
};

const filterDataPresets = [filter1977, filterAden, filterAmaro];

export { filterDataCustom, filterDataPresets };
