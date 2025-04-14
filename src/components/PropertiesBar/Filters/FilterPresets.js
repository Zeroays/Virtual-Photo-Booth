import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { changePresetFilter } from '/src/redux/actions/filter.action';

import { filterDataPresets } from './FilterData';
import 'css/cssgram.min.css';

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
	const img = useSelector((state) => state.canvasPhoto.img);
	const dispatch = useDispatch();

	return (
		<div className="preset">
			<div className={`preset-filter ${preset.className}`}>
				<img
					className="preset-preview"
					src={img}
					alt="catdog"
					onClick={() => dispatch(changePresetFilter(preset.className))}
				/>
			</div>
			<div className="preset-name">{preset.filter}</div>
		</div>
	);
};

export default FilterPresets;
