import { StarIcon as SolidStarIcon } from "@heroicons/react/20/solid";
import { StarIcon as OutlineStarIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

export const StarRating = ({ rating }) => {
  // Get floored value of the rating
  const ratingStars = Math.floor(rating);

  // Check if the rating has a decimal part for rendering an empty star
  const hasPartialStar = 5 > ratingStars;

  return (
    <div className="star-rating flex items-center">
      {Array(ratingStars)
        .fill()
        .map((_, idx) => (
          <SolidStarIcon
            key={idx}
            className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-yellow-500"
          />
        ))}
      {hasPartialStar &&
        Array(5 - ratingStars)
          .fill()
          .map((_, idx) => (
            <OutlineStarIcon
              key={idx}
              className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-yellow-500"
            />
          ))}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};
