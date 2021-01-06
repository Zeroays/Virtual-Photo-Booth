const addPhotoProp = (photoProp) => {
  return {
    type: "ADD_PHOTO_PROP",
    payload: photoProp,
  };
};

const changePhotoPropData = (propData) => {
  return {
    type: "CHANGE_PHOTO_PROP_DATA",
    payload: propData,
  };
};

export { addPhotoProp, changePhotoPropData };
