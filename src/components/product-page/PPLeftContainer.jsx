import { useState } from "react";
import PropTypes from "prop-types";

export const PPLeftContainer = ({ title, images, thumbnail }) => {
  // store selected image
  // Initialize with the first image by default
  const [selectedImage, setSelectedImage] = useState(images[0]);

  // Update the selected image
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="image-container flex w-[50%] bg-gray-50 max-h-fit rounded-md p-1">
      {/* All images of the product */}
      <div className="image-select w-[10%] mt-5 max-h-fit">
        <div className="max-h-fit">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              className="w-full mb-4 p-5 border border-gray-400 rounded-3xl h-auto object-cover cursor-pointer"
              alt={title}
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
        <div className="max-h-fit">
          <img
            key={"thumbnail"}
            src={thumbnail}
            className="w-full mb-4 p-5 border border-gray-400 rounded-3xl h-auto object-cover cursor-pointer"
            alt={title}
            onClick={() => handleImageClick(thumbnail)}
          />
        </div>
      </div>

      {/* Selected image display section */}
      <div className="main-image flex-1 bg-gray-100 px-2 max-h-screen">
        <img
          src={selectedImage}
          className="w-full mb-4 bg-gray-200 h-full object-cover"
          alt={title}
        />
      </div>
    </div>
  );
};

PPLeftContainer.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  thumbnail: PropTypes.string.isRequired,
};
