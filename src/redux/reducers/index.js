import changeCanvasPhotoReducer from "./changeCanvasPhoto";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  canvasPhoto: changeCanvasPhotoReducer,
});

export default allReducers;
