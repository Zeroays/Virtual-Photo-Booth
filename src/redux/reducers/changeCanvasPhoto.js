const changeCanvasPhotoReducer = (state = { img: null }, action) => {
  switch (action.type) {
    case "CHANGE_PHOTO":
      return { img: action.payload };
    default:
      return state;
  }
};

export default changeCanvasPhotoReducer;
