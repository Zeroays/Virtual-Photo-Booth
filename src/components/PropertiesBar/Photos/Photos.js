import React, { useState, useRef } from "react";
import "./photo.css";
import photoData from "./PhotoData";

const Photos = () => {
  const uploadButtonRef = useRef();
  const [chosenPhoto, setChosenPhoto] = useState(null);

  const handleFileUpload = () => {
    uploadButtonRef.current.click();
  };

  const handleFileChange = (e) => {
    setChosenPhoto(e.target.value);
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
        onChange={fileChangeHandler}
        ref={uploadButtonRef}
        style={{ display: "none" }}
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
      {photoData.map((data, idx) => {
        return (
          <PhotoImage
            image={data}
            key={idx}
            photoChoiceHandler={photoChoiceHandler}
          />
        );
      })}
    </div>
  );
};

const PhotoImage = ({ image, photoChoiceHandler }) => {
  return (
    <div
      className="stock-photo"
      style={{ backgroundImage: `url(${image})` }}
      onClick={photoChoiceHandler}
    ></div>
  );
};

export default Photos;
