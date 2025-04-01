export const changePresetFilter = (presetFilterClassName) => {
    return {
        type: "CHANGE_PRESET_FILTER",
        payload: presetFilterClassName,
    };
};