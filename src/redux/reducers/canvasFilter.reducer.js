const changeFilterReducer = (state = { presetFilterClassName: "" }, action) => {
    switch (action.type) {
      case "CHANGE_PRESET_FILTER":
        return { presetFilterClassName: action.payload };
      case "DELETE_FILTERS":
        return { presetFilterClassName: "" };
      default:
        return state;
    }
  };
  
  export default changeFilterReducer;