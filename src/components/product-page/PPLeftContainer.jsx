import PropTypes from "prop-types";

export const PPLeftContainer = ({ title, images, thumbnail }) => {
  return (
    <div className="image-container flex w-[40%] bg-gray-50 max-h-fit rounded-md p-1">
      <div className="w-[20%] mt-5 max-h-fit">
        <div className="max-h-fit">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              className="w-full mb-4 p-5 border border-gray-400 rounded-3xl h-auto object-cover"
              alt={title}
            />
          ))}
        </div>
        <div className="max-h-fit">
          <img
            key={"thumbnail"}
            src={thumbnail}
            className="w-full mb-4 p-5 border border-gray-400 rounded-3xl h-auto object-cover"
            alt={title}
          />
        </div>
      </div>
      <div className="main-image flex-1 bg-gray-100 px-10 max-h-fit">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className="w-full mb-4 p-5 bg-gray-200 h-auto object-cover"
            alt={title}
          />
        ))}
      </div>
    </div>
  );
};

PPLeftContainer.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  thumbnail: PropTypes.string.isRequired,
};
