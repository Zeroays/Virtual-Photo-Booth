import React from 'react';
import './navbar.css';
import logo from '../../assets/icons/camera_logo.png';
import { useDispatch } from 'react-redux';
import { deletePhotoProps } from '../../redux/actions/photoProps.action';
import { deleteFilters } from '../../redux/actions/filter.action';
import { useSavingPhotoContext } from '/src/context/SavingPhotoContext';

const NavBar = () => {
	return (
		<div className="navbar">
			<NavBarLeftContent />
			<NavBarRightContent />
		</div>
	);
};

const NavBarLeftContent = () => {
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

const Logo = () => {
	return <img className="logo" src={logo} alt="camera-logo" />;
};

const ClearDropDown = () => {
	return (
		<div className="clear-dropdown">
			<button className="clear-dropdown-btn">Clear</button>
			<div className="clear-dropdown-content">
				<ClearPropsButton />
				<ClearFiltersButton />
			</div>
		</div>
	);
};

const ClearPropsButton = () => {
	const dispatch = useDispatch();

	const deleteCanvasPhotoProps = () => {
		dispatch(deletePhotoProps());
	};

	return (
		<button className="clear-layer-btn" onClick={deleteCanvasPhotoProps}>
			Props
		</button>
	);
};

const ClearFiltersButton = () => {
	const dispatch = useDispatch();

	const deleteCanvasFilters = () => {
		dispatch(deleteFilters());
	};

	return (
		<button className="clear-layer-btn" onClick={deleteCanvasFilters}>
			Filters
		</button>
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
