const changeCanvasPropsReducer = (state = { photoProps: [] }, action) => {
  switch (action.type) {
    case "ADD_PHOTO_PROP":
      return { photoProps: state.photoProps.concat(action.payload) };
    default:
      return state;
  }
};

export default changeCanvasPropsReducer;
