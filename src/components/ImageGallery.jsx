import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

export default function ImageGallery() {
  const [imageUrls, setImageUrls] = useState([]);
  const [randomImage, setRandomImage] = useState(null);

  const handleDrop = (acceptedFiles) => {
    const urls = acceptedFiles.map((file) => URL.createObjectURL(file));
    setImageUrls(urls);
    setRandomImage(urls[0]);
  };

  const handleRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    setRandomImage(imageUrls[randomIndex]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
  });

  return (
    <div>
      <div
        {...getRootProps()}
        className={`dropzone ${isDragActive ? "active" : ""}`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here...</p>
        ) : (
          <p>Drag and drop files here or click to select files</p>
        )}
      </div>
      {randomImage && (
        <div className="image-container">
          <img src={randomImage} alt="Random" />
        </div>
      )}
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fdice%2Fdice_PNG36.png&f=1&nofb=1&ipt=2b41734c5ea8c4e739b163d09ba69624862883858e3e7a185b9d94c7abbf6476&ipo=images"
        alt="Dice"
        className="dice sixth-face"
        onClick={handleRandomImage}
      />
    </div>
  );
}
