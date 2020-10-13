import React, { useState, useRef } from "react";
import "./photo.css";
import photoData from "./PhotoData";

const Photos = () => {
  return (
    <div className="photo-pane-properties">
      <PhotoUploadButton />
      <PhotoImages />
    </div>
  );
};

const PhotoUploadButton = () => {
  const uploadButtonRef = useRef();
  const [uploadedPhoto, setUploadedPhoto] = useState(null);

  const handleFileUpload = () => {
    uploadButtonRef.current.click();
  };

  const handleFileChange = (e) => {
    setUploadedPhoto(e.target.value);
  };

  return (
    <div className="photo-upload-handler">
      <input
        type="file"
        id="file"
        onChange={handleFileChange}
        ref={uploadButtonRef}
        style={{ display: "none" }}
      />
      <button
        className="upload-btn"
        name="button"
        onClick={handleFileUpload}
        value="Upload"
      >
        Add Photo
      </button>
    </div>
  );
};

const PhotoImages = () => {
  return (
    <div className="photo-pane-content">
      {photoData.map((data, idx) => {
        return <PhotoImage image={data} key={idx} />;
      })}
    </div>
  );
};

const PhotoImage = ({ image }) => {
  return (
    <div
      className="stock-photo"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
};

export default Photos;
