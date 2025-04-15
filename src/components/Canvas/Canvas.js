import React, { useRef, useEffect, useState } from 'react';
import { useWindowSize } from '/src/utils/useWindowSize';
import { toDownloadURI } from '/src/utils/toDownloadURI';

import { useSelector, useDispatch } from 'react-redux';
import {
	changePhotoPropData,
	deleteSinglePhotoProp,
} from '/src/redux/actions/photoProps.action';

import { useSavingPhotoContext } from '/src/context/SavingPhotoContext';

import { Stage, Layer, Image, Transformer } from 'react-konva';
import useImage from 'use-image';

import domtoimage from 'dom-to-image';

import './canvas.css';

const Canvas = () => {
	const [selectedProp, setSelectedProp] = useState(null);

	const canvasRef = useRef();
	const imageRef = useRef();
	const stageRef = useRef();

	const img = useSelector((state) => state.canvasPhoto.img);
	const photoProps = useSelector((state) => state.canvasProps.photoProps);
	const presetFilter = useSelector(
		(state) => state.canvasFilter.presetFilterClassName,
	);

	const dispatch = useDispatch();

	const { savingPhoto, setSavingPhoto } = useSavingPhotoContext();

	const checkDeselect = (e) => {
		if (e.target.getLayer() === null) return;
		const clickedOnEmpty = e.target.getLayer().attrs.name === 'canvas-photo';
		if (clickedOnEmpty) {
			setSelectedProp(null);
		}
	};

	const handleDeleteSinglePhotoProp = () => {
		dispatch(deleteSinglePhotoProp(selectedProp));
	};

	const onPhotoPropChange = (photoPropData) => {
		dispatch(changePhotoPropData(photoPropData));
	};

	const [stageDimensions, setStageDimensions] = useState({
		width: 42,
		height: 42,
	});
	useWindowSize(() => {
		setStageDimensions(calculateNewStageDimensions(canvasRef, imageRef));
	});
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === 'Backspace') {
				handleDeleteSinglePhotoProp();
			}
		};

		savePhoto();

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [selectedProp, savingPhoto]);

	const savePhoto = async () => {
		if (!savingPhoto) return;
		try {
			const element = stageRef.current.container();
			const dataURL = await domtoimage.toPng(element);
			toDownloadURI('photo.png', dataURL);
			setSavingPhoto(false);
		} catch (error) {
			console.error('Error capturing the element:', error);
		}
	};

	return (
		<div className="canvas" ref={canvasRef}>
			<HiddenPhoto
				img={img}
				imageRef={imageRef}
				canvasRef={canvasRef}
				stageDimensionsHandler={setStageDimensions}
			/>
			<Stage
				ref={stageRef}
				width={stageDimensions.width}
				height={stageDimensions.height}
				onMouseDown={checkDeselect}
				onTouchStart={checkDeselect}
				className={presetFilter}
			>
				<Photo
					img={img}
					width={stageDimensions.width}
					height={stageDimensions.height}
				/>
				<PhotoProps
					photoProps={photoProps}
					photoPropsHandler={onPhotoPropChange}
					selectedProp={selectedProp}
					selectedPropHandler={setSelectedProp}
				/>
			</Stage>
		</div>
	);
};

const calculateNewStageDimensions = (canvasRef, imageRef) => {
	if (
		!imageRef.current ||
		!imageRef.current.width ||
		!imageRef.current.height
	) {
		return { width: 0, height: 0 };
	}

	const widthPercentage = 0.7;
	const heightPercentage = 0.9;

	const imageWidth = imageRef.current.width;
	const imageHeight = imageRef.current.height;

	const canvasWidth = canvasRef.current.offsetWidth;
	const canvasHeight = canvasRef.current.offsetHeight;

	let height;
	let width;
	if (imageWidth > imageHeight) {
		width = widthPercentage * canvasWidth;
		height = (imageHeight * width) / imageWidth;
	} else {
		height = heightPercentage * canvasHeight;
		width = (imageWidth * height) / imageHeight;
	}

	return { width, height };
};

// Used as a reference to calculate
// canvas size on window resize

// onLoad prop of HiddenPhoto calculates
// new image size and sets it to fit
// within the Stage
const HiddenPhoto = ({ img, imageRef, canvasRef, stageDimensionsHandler }) => {
	const handleImageLoad = () => {
		stageDimensionsHandler(calculateNewStageDimensions(canvasRef, imageRef));
	};

	return (
		<div className="canvas-image-content">
			<img
				key={img}
				src={img}
				alt="canvas photo"
				onLoad={handleImageLoad}
				ref={imageRef}
			/>
		</div>
	);
};

const Photo = ({ img, width, height }) => {
	const [image] = useImage(img);
	return (
		<Layer name="canvas-photo">
			<Image image={image} width={width} height={height} />
		</Layer>
	);
};

const PhotoProps = ({
	photoProps,
	photoPropsHandler,
	selectedProp,
	selectedPropHandler,
}) => {
	const setSelectedProp = (prop) => selectedPropHandler(prop.id);

	const changePhotoProp = (newAttrs, i) => {
		const changedPhotoProp = [...photoProps];
		changedPhotoProp[i] = newAttrs;
		photoPropsHandler(changedPhotoProp);
	};

	return (
		<Layer name="canvas-photo-props">
			{photoProps.map((prop, i) => (
				<PhotoProp
					key={prop.id}
					photoData={prop}
					isSelected={prop.id === selectedProp}
					onSelect={() => setSelectedProp(prop)}
					onChange={(newAttrs) => changePhotoProp(newAttrs, i)}
				/>
			))}
		</Layer>
	);
};

const PhotoProp = ({ photoData, isSelected, onSelect, onChange }) => {
	const [img] = useImage(photoData.img);
	const propRef = useRef();
	const trRef = useRef();

	const changePosition = (e) => {
		onChange({ ...photoData, x: e.target.x(), y: e.target.y() });
	};

	const changeScale = (e) => {
		const node = propRef.current;
		const scaleX = node.scaleX();
		const scaleY = node.scaleY();

		node.scaleX(1);
		node.scaleY(1);
		onChange({
			...photoData,
			x: node.x(),
			y: node.y(),
			width: Math.max(5, node.width() * scaleX),
			height: Math.max(node.height() * scaleY),
		});
	};

	const changeTransformBox = (oldBox, newBox) => {
		if (newBox.width < 5 || newBox.height < 5) {
			return oldBox;
		}
		return newBox;
	};

	useEffect(() => {
		if (isSelected) {
			trRef.current.nodes([propRef.current]);
			trRef.current.getLayer().batchDraw();
		}
	}, [isSelected]);

	return (
		<>
			<Image
				image={img}
				onClick={onSelect}
				onTap={onSelect}
				ref={propRef}
				{...photoData}
				draggable
				onDragEnd={(e) => changePosition(e)}
				onTransformEnd={(e) => changeScale(e)}
			/>
			{isSelected && (
				<Transformer
					ref={trRef}
					boundBoxFunc={(oldBox, newBox) => changeTransformBox(oldBox, newBox)}
				/>
			)}
		</>
	);
};

export default Canvas;
