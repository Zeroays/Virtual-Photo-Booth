import React from 'react';

import { useDispatch } from 'react-redux';
import { deletePhotoProps } from '/src/redux/actions/photoProps.action';
import { deleteFilters } from '/src/redux/actions/filter.action';

import { useSavingPhotoContext } from '/src/context/SavingPhotoContext';

import logo from '/src/assets/icons/camera_logo.png';
import './navbar.css';

const NavBar = () => {
	return (
		<div className="navbar">
			<NavBarLeftContent />
			<NavBarRightContent />
		</div>
	);
};

const NavBarLeftContent = () => {
	const Logo = () => {
		return <img className="logo" src={logo} alt="camera-logo" />;
	};

	return (
		<div className="navbar-left-content">
			<Logo />
		</div>
	);
};

const NavBarRightContent = () => {
	return (
		<div className="navbar-right-content">
			<ClearDropDown />
			<SaveButton />
		</div>
	);
};

const ClearDropDown = () => {
	const dispatch = useDispatch();

	const deleteCanvasPhotoProps = () => {
		dispatch(deletePhotoProps());
	};

	const deleteCanvasFilters = () => {
		dispatch(deleteFilters());
	};

	const ClearPropsButton = () => {
		return (
			<button className="clear-layer-btn" onClick={deleteCanvasPhotoProps}>
				Props
			</button>
		);
	};

	const ClearFiltersButton = () => {
		return (
			<button className="clear-layer-btn" onClick={deleteCanvasFilters}>
				Filters
			</button>
		);
	};

	const ClearAllButton = () => {
		const clearAll = () => {
			deleteCanvasPhotoProps()
			deleteCanvasFilters();
		};

		return (
			<button className="clear-layer-btn" onClick={clearAll}>
				All
			</button>
		);
	}

	return (
		<div className="clear-dropdown">
			<button className="clear-dropdown-btn">Clear</button>
			<div className="clear-dropdown-content">
				<ClearPropsButton />
				<ClearFiltersButton />
				<ClearAllButton />
			</div>
		</div>
	);
};

const SaveButton = () => {
	const { _, setSavingPhoto } = useSavingPhotoContext();

	return (
		<button onClick={() => setSavingPhoto(true)} className="save-btn">
			Save
		</button>
	);
};

export default NavBar;
