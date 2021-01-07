const changeCanvasPropsReducer = (state = { photoProps: [] }, action) => {
  switch (action.type) {
    case "ADD_PHOTO_PROP":
      const prop = {
        img: action.payload,
        x: 0,
        y: 0,
        width: 50,
        height: 50,
        id: `prop${state.photoProps.length + 1}`,
      };
      return { photoProps: state.photoProps.concat(prop) };
    case "DELETE_PHOTO_PROPS":
      return { photoProps: [] };
    case "CHANGE_PHOTO_PROP_DATA":
      return { photoProps: action.payload };
    default:
      return state;
  }
};

export default changeCanvasPropsReducer;
