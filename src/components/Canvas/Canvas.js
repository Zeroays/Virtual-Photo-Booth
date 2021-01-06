import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Stage, Layer, Image, Transformer } from "react-konva";
import useImage from "use-image";
import "./canvas.css";

const Canvas = () => {
  const canvasRef = useRef();
  // const imageRef = useRef();
  const img = useSelector((state) => state.canvasPhoto.img);
  const [stageDimensions, setStageDimensions] = useState({
    width: 320,
    height: 42,
  });
  // useWindowSize(() => {
  //   setStageDimensions(calculateNewStageDimensions(canvasRef, imageRef));
  // });

  return (
    //In div tag, className -> canvas ----- ref={canvasRef}
    <div className="canvas" ref={canvasRef}>
      {/* <Stage width={stageDimensions.width} height={stageDimensions.height}>
        <Photo width={stageDimensions.width} height={stageDimensions.height} />
        <PhotoProps />
        <Overlay />
      </Stage>
      <HiddenPhoto domRef={imageRef} /> */}
      <img src={img} style={{ width: stageDimensions.width }} />
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

const Photo = ({ img, width, height }) => {
  //"/src/assets/stockPhotos/catdog.jpg"
  const [image] = useImage(img);
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
