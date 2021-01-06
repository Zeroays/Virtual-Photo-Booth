import React, { useRef } from "react";
import "./photo.css";
import photoData from "./PhotoData";
import { useDispatch } from "react-redux";
import { changePhoto } from "../../../redux/actions/photo.action";

const Photos = () => {
  const uploadButtonRef = useRef();
  const dispatch = useDispatch();

  const handleFileUpload = () => {
    console.log("click");
    uploadButtonRef.current.click();
  };

  const handleFileChange = (image, source) => {
    let photo = null;
    if (source === "fromUpload")
      photo = URL.createObjectURL(image.target.files[0]);
    else if (source === "fromStock") photo = image;
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
        onChange={(e) => fileChangeHandler(e, "fromUpload")}
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
      onClick={() => photoChoiceHandler(image, "fromStock")}
    ></div>
  );
};

export default Photos;
