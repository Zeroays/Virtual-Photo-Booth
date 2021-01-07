import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Stage, Layer, Image, Transformer } from "react-konva";
import useImage from "use-image";
import { useDispatch } from "react-redux";
import { changePhotoPropData } from "../../redux/actions/photoProps.action";
import "./canvas.css";

const toDownloadURI = (name, img) => {
  let a = document.createElement("a");
  a.download = name;
  a.href = img;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

const Canvas = ({ savingPhoto, savingPhotoHandler }) => {
  const canvasRef = useRef();
  const imageRef = useRef();
  const stageRef = useRef();
  const img = useSelector((state) => state.canvasPhoto.img);
  const photoProps = useSelector((state) => state.canvasProps.photoProps);

  const dispatch = useDispatch();

  const [selectedProp, setSelectedProp] = useState(null);

  const checkDeselect = (e) => {
    if (e.target.getLayer() === null) return;
    const clickedOnEmpty = e.target.getLayer().attrs.name === "canvas-photo";
    if (clickedOnEmpty) {
      setSelectedProp(null);
    }
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
    savePhoto();
  }, [savingPhoto]);

  const savePhoto = () => {
    if (savingPhoto) {
      toDownloadURI("photo.png", stageRef.current.toDataURL({ pixelRatio: 3 }));
      savingPhotoHandler(false);
    }
  };

  return (
    <div className="canvas" ref={canvasRef}>
      <HiddenPhoto img={img} domRef={imageRef} />
      <Stage
        ref={stageRef}
        width={stageDimensions.width}
        height={stageDimensions.height}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
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
  const widthPercentage = 0.7;
  const aspectRatio = imageRef.current.width / imageRef.current.height || 1.5;
  const width = canvasRef.current.offsetWidth * widthPercentage;
  const height = width / aspectRatio;
  return { width, height };
};

const useWindowSize = (func) => {
  useEffect(() => {
    const handleResize = () => {
      func();
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
};

const HiddenPhoto = ({ img, domRef }) => {
  return (
    <div className="canvas-image-content">
      <img src={img} alt="canvas photo" ref={domRef} />
    </div>
  );
};

const Overlay = () => {
  return <Layer></Layer>;
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
  return (
    <Layer name="canvas-photo-props">
      {photoProps.map((prop, i) => {
        return (
          <PhotoProp
            key={i}
            photoData={prop}
            isSelected={prop.id === selectedProp}
            onSelect={() => {
              selectedPropHandler(prop.id);
            }}
            onChange={(newAttrs) => {
              const changedPhotoProp = [...photoProps];
              changedPhotoProp[i] = newAttrs;
              photoPropsHandler(changedPhotoProp);
            }}
          />
        );
      })}
    </Layer>
  );
};

const PhotoProp = ({ photoData, isSelected, onSelect, onChange }) => {
  const [img] = useImage(photoData.img);
  const propRef = useRef();
  const trRef = useRef();

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
        onDragEnd={(e) => {
          onChange({
            ...photoData,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={(e) => {
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
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};

export default Canvas;
