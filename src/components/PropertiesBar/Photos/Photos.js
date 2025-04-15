import React, { useRef } from 'react';

import { useDispatch } from 'react-redux';
import { changePhoto } from '/src/redux/actions/photo.action';

import photoData from './PhotoData';
import './photo.css';

const Photos = () => {
	const uploadButtonRef = useRef();
	const dispatch = useDispatch();

	const handleFileUpload = () => {
		uploadButtonRef.current.click();
	};

	const handleFileChange = (image, source) => {
		let photo = null;
		if (source === 'fromUpload')
			photo = URL.createObjectURL(image.target.files[0]);
		else if (source === 'fromStock') photo = image;
		dispatch(changePhoto(photo));
	};

	return (
		<div className="photo-pane-properties">
			<PhotoUploadButton
				uploadButtonRef={uploadButtonRef}
				fileUploadHandler={handleFileUpload}
				fileChangeHandler={handleFileChange}
			/>
			<PhotoImages photoChoiceHandler={handleFileChange} />
		</div>
	);
};

const PhotoUploadButton = ({
	uploadButtonRef,
	fileUploadHandler,
	fileChangeHandler,
}) => {
	return (
		<div className="photo-upload-handler">
			<input
				type="file"
				id="file"
				onChange={(e) => fileChangeHandler(e, 'fromUpload')}
				ref={uploadButtonRef}
				style={{ display: 'none' }}
			/>
			<button
				className="upload-btn"
				name="button"
				onClick={fileUploadHandler}
				value="Upload"
			>
				Add Photo
			</button>
		</div>
	);
};

const PhotoImages = ({ photoChoiceHandler }) => {
	return (
		<div className="photo-pane-content">
			{photoData.map((image) => (
				<div
					key={image}
					className="stock-photo"
					style={{ backgroundImage: `url(${image})` }}
					onClick={() => photoChoiceHandler(image, 'fromStock')}
				></div>
			))}
		</div>
	);
};

export default Photos;
