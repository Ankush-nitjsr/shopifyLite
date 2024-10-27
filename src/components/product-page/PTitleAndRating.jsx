import PropTypes from "prop-types";
import { StarIcon as SolidStarIcon } from "@heroicons/react/20/solid";
import { StarIcon as OutlineStarIcon } from "@heroicons/react/24/outline";

export const PTitleAndRating = ({ title, rating }) => {
  // Get the floored value of the rating
  const ratingStars = Math.floor(rating);

  // Check if the rating has a decimal part for rendering an empty star
  const hasHalfStar = rating > ratingStars;
  return (
    <div className="title-section">
      <div className="title text-4xl font-semibold">{title}</div>
      <div className="flex items-center justify-start">
        <div className="rating text-lg mr-2">{rating}</div>
        <div className="flex">
          {Array(ratingStars)
            .fill()
            .map((_, index) => (
              <SolidStarIcon key={index} className="w-5 h-5 text-yellow-500" />
            ))}
          {hasHalfStar && (
            <OutlineStarIcon className="w-5 h-5 text-yellow-500" />
          )}
        </div>
      </div>
    </div>
  );
};

PTitleAndRating.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};
