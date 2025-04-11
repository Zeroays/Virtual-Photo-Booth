const addPhotoProp = (photoProp) => {
	return {
		type: 'ADD_PHOTO_PROP',
		payload: photoProp,
	};
};

const deletePhotoProps = () => {
	return {
		type: 'DELETE_PHOTO_PROPS',
	};
};

const deleteSinglePhotoProp = (propId) => {
	return {
		type: 'DELETE_SINGLE_PHOTO_PROP',
		payload: propId,
	};
};

const changePhotoPropData = (propData) => {
	return {
		type: 'CHANGE_PHOTO_PROP_DATA',
		payload: propData,
	};
};

export {
	addPhotoProp,
	deletePhotoProps,
	deleteSinglePhotoProp,
	changePhotoPropData,
};
