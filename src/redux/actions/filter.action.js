const changePresetFilter = (presetFilterClassName) => {
	return {
		type: 'CHANGE_PRESET_FILTER',
		payload: presetFilterClassName,
	};
};

const deleteFilters = () => {
	return {
		type: 'DELETE_FILTERS',
	};
};

export { changePresetFilter, deleteFilters };
