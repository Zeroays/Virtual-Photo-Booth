const mixBlendModeObj = {
  name: "Mix Blend Mode",
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
  value: "normal",
};

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
        background_color: {
          name: "Background Color",
          value: { r: "255", g: "87", b: "87", a: "1" },
        },
        mix_blend_mode: { ...mixBlendModeObj },
        opacity: {
          type: "slider",
          name: "Opacity",
          min: "0",
          value: "100",
          max: "200",
          unit: "%",
        },
      },
      "Linear Gradient": {
        color_1: {
          name: "Color 1",
          value: { r: "255", g: "87", b: "87", a: "1" },
        },
        stop_1: { name: "Stop 1", min: "1", max: "100", value: "10" },
        color_2: {
          name: "Color 2",
          value: { r: "255", g: "87", b: "87", a: "1" },
        },
        stop_2: { name: "Stop 2", min: "1", max: "100", value: "100" },
        gradient_direction: {
          name: "Gradient Direction",
          options: [
            "to bottom left",
            "to bottom",
            "to bottom right",
            "to right",
            "to left",
            "to top left",
            "to top right",
          ],
          value: "to bottom",
        },
        mix_blend_mode: { ...mixBlendModeObj },
        opacity: {
          type: "slider",
          name: "Opacity",
          min: "0",
          value: "100",
          max: "200",
          unit: "%",
        },
      },
      "Radial Gradient": {
        color_1: { name: "Color 1", value: { r: 255, g: 87, b: 87, a: 1 } },
        stop_1: { name: "Stop 1", min: "1", max: "100", value: "10" },
        color_2: { name: "Color 2", value: { r: 255, g: 87, b: 87, a: 1 } },
        stop_2: { name: "Stop 2", min: "1", max: "100", value: "100" },
        gradient_position: {
          name: "Gradient Position",
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
          value: "center center",
        },
        gradient_size: {
          name: "Gradient Size",
          options: [
            "closest-corner",
            "closest-side",
            "farthest-side",
            "farthest-corner",
          ],
          value: "closest-corner",
        },
        mix_blend_mode: { ...mixBlendModeObj },
        opacity: {
          type: "slider",
          name: "Opacity",
          min: "0",
          value: "100",
          max: "200",
          unit: "%",
        },
      },
    },
  },
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
