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
    options: ["None", "Solid Background", "Linear Gradient", "Radial Gradient"],
    selectedOption: "None",
    data: {
      None: null,
      "Solid Background": {
        "background-color": "rgba(255, 87, 87, 1)",
        "mix-blend-mode": { ...mixBlendModeObj },
        opacity: "50%",
      },
      "Linear Gradient": {
        "color-1": "rgba(255, 87, 87, 1)",
        "stop-1": "10",
        "color-2": "rgba(255, 22, 22, 1)",
        "stop-2": "100",
        "gradient-direction": {
          options: [
            "to bottom left",
            "to bottom",
            "to bottom right",
            "to right",
            "to left",
            "to top left",
            "to top right",
          ],
          selectedOption: "to bottom",
        },
        "mix-blend-mode": { ...mixBlendModeObj },
        opacity: "50%",
      },
      "Radial Gradient": {
        "color-1": "rgba(255, 87, 87, 1)",
        "stop-1": "10",
        "color-2": "rgba(255, 22, 22, 1)",
        "stop-2": "100",
        "gradient-position": {
          options: [
            "left top",
            "center top",
            "right top",
            "left center",
            "center center",
            "right center",
            "left bottom",
            "center bottom",
            "right bottom",
          ],
          selectedOption: "center center",
        },
        "gradient-size": {
          options: [
            "closest-corner",
            "closest-side",
            "farthest-side",
            "farthest-corner",
          ],
          selectedOption: "closest-corner",
        },
        "mix-blend-mode": { ...mixBlendModeObj },
        opacity: "50%",
      },
    },
  },
};

const mixBlendModeObj = {
  options: [
    "normal",
    "multiply",
    "screen",
    "overlay",
    "darken",
    "lighten",
    "color-dodge",
    "color-burn",
    "hard-light",
    "soft-light",
    "difference",
    "exclusion",
    "hue",
    "saturation",
    "color",
    "luminosity",
    "initial",
    "inherit",
    "unset",
  ],
  selectedOption: "normal",
};

const filterDataPresets = [
  { filter: "1977", className: "_1977" },
  { filter: "Aden", className: "aden" },
  { filter: "Amaro", className: "amaro" },
  { filter: "Brannan", className: "brannan" },
  { filter: "Brooklyn", className: "brooklyn" },
  { filter: "Clarendon", className: "clarendon" },
  { filter: "Gingham", className: "gingham" },
  { filter: "Hudson", className: "hudson" },
  { filter: "Inkwell", className: "inkwell" },
  { filter: "Kelvin", className: "kelvin" },
  { filter: "Lark", className: "lark" },
  { filter: "Lo-fi", className: "lofi" },
  { filter: "Mayfair", className: "mayfair" },
  { filter: "Moon", className: "moon" },
  { filter: "Nashville", className: "nashville" },
  { filter: "Perpetua", className: "perpetua" },
  { filter: "Reyes", className: "reyes" },
  { filter: "Rise", className: "rise" },
  { filter: "Slumber", className: "slumber" },
  { filter: "Stinson", className: "stinson" },
  { filter: "Toaster", className: "toaster" },
  { filter: "Valencia", className: "valencia" },
  { filter: "Walden", className: "walden" },
  { filter: "Willow", className: "willow" },
  { filter: "X-Pro-2", className: "xpro2" },
];

export { filterDataCustom, filterDataPresets };
