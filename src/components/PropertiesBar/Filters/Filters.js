import React, { useState } from 'react';

import FilterPresets from './FilterPresets';
import FilterCustom from './FilterCustom';
import './filters.css';

const Filters = () => {
	const options = ['Preset', 'Custom'];

	const [selectedFilterTab, setSelectedFilterTab] = useState('Preset');

	const handleFilterSelection = (e) => {
		setSelectedFilterTab(e.target.innerHTML);
	};

	return (
		<div className="filter-pane-properties">
			<div className="filter-pane-content">
				<FilterTabsButtons
					options={options}
					filterSelectionHandler={handleFilterSelection}
					selectedFilterTab={selectedFilterTab}
				/>
				{
					{
						Preset: <FilterPresets />,
						Custom: <FilterCustom />,
					}[selectedFilterTab]
				}
			</div>
		</div>
	);
};

const FilterTabsButtons = ({
	options,
	filterSelectionHandler,
	selectedFilterTab,
}) => {
	const selectedTabStyle = {
		color: '#343b46',
		backgroundColor: '#d9dbdf',
		boxShadow: 'none',
		fontSize: '1rem',
	};
	return (
		<div className="filter-options">
			{options.map((option) => (
				<button
					key={option}
					className="filter-options-btn"
					onClick={filterSelectionHandler}
					style={option === selectedFilterTab ? selectedTabStyle : null}
				>
					{option}
				</button>
			))}
		</div>
	);
};

export default Filters;
