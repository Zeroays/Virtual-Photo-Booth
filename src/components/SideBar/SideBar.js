import React, { useState, useEffect } from 'react';
import { usePropertyContext } from '/src/context/PropertyContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faImage,
	faThumbtack,
	faSlidersH,
} from '@fortawesome/fontawesome-free-solid';
import './sidebar.css';

const sideBarContent = [
	{ name: 'Photos', icon: faImage },
	{ name: 'Props', icon: faThumbtack },
	{ name: 'Filters', icon: faSlidersH },
];

const SideBar = () => {
	return (
		<div className="main-sidebar">
			{sideBarContent.map((item) => {
				return (
					<SideBarChoice name={item.name} icon={item.icon} key={item.name} />
				);
			})}
		</div>
	);
};

const SideBarChoice = ({ name, icon }) => {
	const { _, setCurrentProperty } = usePropertyContext();

	const [photoStripVisible, setPhotoStripVisiblilty] = useState(false);

	const smallScreenSize = 480;
	const [width, setWidth] = useState(window.innerWidth);

	const handlePhotoStripVisibility = () => {
		if (width <= smallScreenSize) return;
		setPhotoStripVisiblilty(!photoStripVisible);
	};

	const handleWindowSizeChange = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener('resize', handleWindowSizeChange);
		return () => {
			window.removeEventListener('resize', handleWindowSizeChange);
		};
	}, []);

	const SideBarButton = ({ data }) => {
		const { name, icon } = data;
		return (
			<button
				className="sidebar-btn"
				onMouseEnter={handlePhotoStripVisibility}
				onMouseLeave={handlePhotoStripVisibility}
				onClick={() => setCurrentProperty(name)}
			>
				<FontAwesomeIcon icon={icon} />
			</button>
		);
	};

	return (
		<div className="sidebar-choice">
			<SideBarButton data={{ name, icon }} />
			<PhotoStrip name={name} visible={photoStripVisible} />
		</div>
	);
};

// Left outside of SideBarChoice because
// it would completely re-render if `visible` state
// is changed.  As a consequence, the polaroid photo animation
// would not work.
const PhotoStrip = ({ name, visible }) => {
	return (
		<div className={`photo-strip ${visible ? 'strip-active' : ''}`}>
			<span className="photo-text">{name}</span>
		</div>
	);
};

export default SideBar;
