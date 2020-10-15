import React from "react";
import { filterDataPresets } from "./FilterData";

const FilterPresets = () => {
  return (
    <div className="filter-presets">
      {filterDataPresets.map((preset) => {
        return <FilterPreset preset={preset} key={preset.filter} />;
      })}
    </div>
  );
};

const FilterPreset = ({ preset }) => {
  return (
    <div className="preset">
      <div className={`preset-filter ${preset.className}`}>
        <img
          className="preset-preview"
          src="/src/assets/stockPhotos/woman_sitting.jpg"
          alt="catdog"
        />
      </div>
      <div className="preset-name">{preset.filter}</div>
    </div>
  );
};

export default FilterPresets;
