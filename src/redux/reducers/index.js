import changeCanvasPhotoReducer from "./changeCanvasPhoto";
import changeCanvasPropsReducer from "./changeCanvasProps";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  canvasPhoto: changeCanvasPhotoReducer,
  canvasProps: changeCanvasPropsReducer,
});

export default allReducers;
