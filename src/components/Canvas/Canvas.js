import React, { useRef, useEffect, useState } from "react";
import { Stage, Layer, Image, Transformer } from "react-konva";
import useImage from "use-image";
import "./canvas.css";

const Canvas = () => {
  const canvasRef = useRef();
  const imageRef = useRef();
  const [stageDimensions, setStageDimensions] = useState({
    width: 42,
    height: 42,
  });
  useWindowSize(() => {
    setStageDimensions(calculateNewStageDimensions(canvasRef, imageRef));
  });

  return (
    <div className="canvas" ref={canvasRef}>
      <Stage width={stageDimensions.width} height={stageDimensions.height}>
        <Photo width={stageDimensions.width} height={stageDimensions.height} />
        <PhotoProps />
        <Overlay />
      </Stage>
      <HiddenPhoto domRef={imageRef} />
    </div>
  );
};

const calculateNewStageDimensions = (canvasRef, imageRef) => {
  const widthPercentage = 0.7;
  const aspectRatio = imageRef.current.width / imageRef.current.height;
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

const HiddenPhoto = ({ domRef }) => {
  return (
    <div className="canvas-image-content">
      <img src="/src/assets/stockPhotos/catdog.jpg" alt="catdog" ref={domRef} />
    </div>
  );
};

const Overlay = () => {
  return <Layer></Layer>;
};

const Photo = ({ width, height }) => {
  const [image] = useImage("/src/assets/stockPhotos/catdog.jpg");
  return (
    <Layer>
      <Image image={image} width={width} height={height} />
    </Layer>
  );
};

const PhotoProps = () => {
  return <Layer></Layer>;
};
export default Canvas;
