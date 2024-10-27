import PropTypes from "prop-types";

export const ProductTags = ({ tags }) => {
  return (
    <div className="tags space-y-2">
      <p className="font-bold">Tags:</p>
      <div className="flex space-x-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-400 px-2 py-1 rounded text-gray-800 text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

ProductTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
