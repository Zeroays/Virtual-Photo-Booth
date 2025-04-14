import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { addPhotoProp } from '/src/redux/actions/photoProps.action';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';
import propData from './PropData';
import './props.css';

const Props = () => {
	const dispatch = useDispatch();
	const [propQuery, setPropQuery] = useState('');

	const handlePropSelection = (img) => {
		dispatch(addPhotoProp(img));
	};

	const handlePropQuery = (e) => {
		setPropQuery(e.target.value);
	};

	return (
		<div className="props-pane-properties">
			<PropsSearchBar 
				query={propQuery} 
				queryHandler={handlePropQuery} 
			/>
			<PropImages
				query={propQuery}
				propSelectionHandler={handlePropSelection}
			/>
		</div>
	);
};

const PropsSearchBar = ({ query, queryHandler }) => {
	return (
		<div className="props-search-bar">
			<div className="props-search-handler">
				<FontAwesomeIcon icon={faSearch} />
				<input
					type="input"
					placeholder="Search props"
					value={`${query}`}
					onChange={queryHandler}
				></input>
			</div>
		</div>
	);
};

const PropImages = ({ query, propSelectionHandler }) => {
	const searchQueryInPropName = (prop, query) => {
		return prop.label.toLowerCase().includes(query.toLowerCase());
	};
	const setProp = (prop) => {
		propSelectionHandler(prop.img);
	}

	return (
		<div className="props-pane-content">
			{propData.map((prop) =>
				searchQueryInPropName(prop, query) &&
				<div
					key={prop.label}
					className="prop"
					onClick={() => setProp(prop)}
					style={{ backgroundImage: `url(${prop.img})` }}
				>
					<span className="prop-label">{prop.label}</span>
				</div>
			)}
		</div>
	);
};

export default Props;
