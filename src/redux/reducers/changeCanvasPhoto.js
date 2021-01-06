import Skateboarder from "../../assets/stockPhotos/skateboarder.jpg";

const changeCanvasPhotoReducer = (state = { img: Skateboarder }, action) => {
  switch (action.type) {
    case "CHANGE_PHOTO":
      return { img: action.payload };
    default:
      return state;
  }
};

export default changeCanvasPhotoReducer;
