import changeCanvasPhotoReducer from "./canvasPhoto.reducer";
import changeCanvasPropsReducer from "./canvasProps.reducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  canvasPhoto: changeCanvasPhotoReducer,
  canvasProps: changeCanvasPropsReducer,
});

export default allReducers;
