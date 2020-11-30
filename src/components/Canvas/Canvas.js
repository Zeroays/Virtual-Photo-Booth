import React, { useRef, useEffect, useState } from "react";
import Konva from "konva";
import { Stage, Layer, Image, Rect, Container } from "react-konva";
import useImage from "use-image";
import canvasToImage from "canvas-to-image";
import "./canvas.css";

const Canvas = () => {
  const canvasRef = useRef();
  const imageRef = useRef();
  const stageRef = useRef();

  const [stageDimensions, setStageDimensions] = useState({
    width: 42,
    height: 42,
    filter: "brightness(1.6) grayscale(1.2)",
  });
  useWindowSize(() => {
    setStageDimensions(calculateNewStageDimensions(canvasRef, imageRef));
  });

  const [image] = useImage("/src/assets/stockPhotos/catdog.jpg");
  const [canvas, setCanvas] = React.useState(null);

  useEffect(() => {
    if (!image) return;
    const canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");

    canvas.width = 2400;
    canvas.height = 1412;

    ctx.filter = "brightness(1.6) grayscale(1.2)";
    ctx.globalCompositeOperation = "source-over";
    // ctx.drawImage(image, 0, 0, image.width, image.height);
    ctx.fillRect(0, 0, 300, 300);
    stageRef.current.getStage().content.style.filter = stageDimensions.filter;
    setCanvas(canvas);
  }, [stageDimensions]);
  const handleExport = () => {
    // window.open(
    //   stageRef.current.getStage().toDataURL({ pixelRatio: 1, quality: 1.0 })
    // );
    console.log(stageRef.current.getStage());

    canvasToImage(stageRef.current.getStage().content.firstChild, {
      name: "photo",
      type: "png",
      quality: 1,
    });
  };
  return (
    <div className="canvas" ref={canvasRef}>
      <Stage
        width={stageDimensions.width}
        height={stageDimensions.height}
        ref={stageRef}
      >
        <Layer>
          <Image
            image={canvas}
            width={stageDimensions.width}
            height={stageDimensions.height}
          />
          <PhotoProps />
        </Layer>
      </Stage>
      <button onClick={handleExport}>Click me</button>
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
  return <Image image={image} width={width} height={height} />;
};

const PhotoProps = () => {
  return <Rect width={100} height={100} fill={"#ff33aa"} />;
};
export default Canvas;
