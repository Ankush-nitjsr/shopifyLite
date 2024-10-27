import PropTypes from "prop-types";
import { XMarkIcon } from "@heroicons/react/20/solid";

export const PDimensions = ({ dimensions }) => {
  return (
    <div className="flex items-center space-x-1">
      <p className="font-semibold">Product Dimensions :</p>
      <p>{dimensions.width}</p>
      <XMarkIcon className="w-5 h-5" />
      <p>{dimensions.height}</p>
      <XMarkIcon className="w-5 h-5" />
      <p>{dimensions.depth}</p>
      <p>cm</p>
    </div>
  );
};

PDimensions.propTypes = {
  dimensions: PropTypes.shape({
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    depth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};
