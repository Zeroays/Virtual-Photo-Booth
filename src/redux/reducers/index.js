import changeCanvasPhotoReducer from './canvasPhoto.reducer';
import changeCanvasPropsReducer from './canvasProps.reducer';
import changeFilterReducer from './canvasFilter.reducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
	canvasPhoto: changeCanvasPhotoReducer,
	canvasProps: changeCanvasPropsReducer,
	canvasFilter: changeFilterReducer,
});

export default allReducers;
