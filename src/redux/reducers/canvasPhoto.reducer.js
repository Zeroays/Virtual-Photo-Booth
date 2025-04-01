import photoData from "../../components/PropertiesBar/Photos/PhotoData";

const changeCanvasPhotoReducer = (state = { img: photoData[0], presetFilterClassName: "" }, action) => {
  switch (action.type) {
    case "CHANGE_PHOTO":
      return { ...state, img: action.payload };
    case "CHANGE_PRESET_FILTER":
      return { ...state, presetFilterClassName: action.payload };
    default:
      return state;
  }
};

export default changeCanvasPhotoReducer;
