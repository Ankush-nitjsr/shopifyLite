import PropTypes from "prop-types";
import { StarRating } from "./StarRating";

export const PTitleAndRating = ({ title, rating }) => {
  return (
    <div className="title-section">
      <div className="title text-4xl font-semibold">{title}</div>
      <div className="flex items-center justify-start space-x-2">
        <div className="rating text-lg">{rating}</div>
        <StarRating rating={rating} />
      </div>
    </div>
  );
};

PTitleAndRating.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};
