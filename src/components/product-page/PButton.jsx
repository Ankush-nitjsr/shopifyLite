import PropTypes from "prop-types";

export const PButton = ({ text, handleClick }) => {
  return (
    <button
      className={`${
        text === "Add to Cart" ? "bg-yellow-500" : "bg-orange-700"
      } rounded-3xl w-60 h-9 text-gray-900 flex items-center justify-center`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

PButton.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};
