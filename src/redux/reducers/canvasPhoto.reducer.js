import photoData from "../../components/PropertiesBar/Photos/PhotoData";

const changeCanvasPhotoReducer = (state = { img: photoData[0] }, action) => {
  switch (action.type) {
    case "CHANGE_PHOTO":
      return { img: action.payload };
    default:
      return state;
  }
};

export default changeCanvasPhotoReducer;
