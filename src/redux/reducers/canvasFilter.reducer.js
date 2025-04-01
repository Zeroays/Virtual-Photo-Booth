const changeFilterReducer = (state = { presetFilterClassName: "" }, action) => {
    switch (action.type) {
      case "CHANGE_PRESET_FILTER":
        return { presetFilterClassName: action.payload };
      default:
        return state;
    }
  };
  
  export default changeFilterReducer;