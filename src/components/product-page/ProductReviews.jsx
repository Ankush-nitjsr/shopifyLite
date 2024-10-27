import PropTypes from "prop-types";
import { StarIcon as SolidStarIcon } from "@heroicons/react/20/solid";
import { StarIcon as OutlineStarIcon } from "@heroicons/react/24/outline";

export const ProductReviews = ({ reviews }) => {
  return (
    <div className="reviews-section">
      <p className="font-bold">Customer Reviews:</p>
      {reviews.map((review, index) => (
        <div key={index} className="border p-3 rounded mb-3">
          <p className="font-bold">{review.reviewerName}</p>
          <div className="flex">
            <div className="rating text-lg mr-2">{review.rating}</div>
            <div className="flex">
              {Array(Math.floor(review.rating))
                .fill()
                .map((_, idx) => (
                  <SolidStarIcon
                    key={idx}
                    className="w-4 h-4 text-yellow-500"
                  />
                ))}
              {review.rating % 1 !== 0 && (
                <OutlineStarIcon className="w-4 h-4 text-yellow-500" />
              )}
            </div>
          </div>
          <p>{review.comment}</p>
          <p className="text-sm text-gray-400">
            Reviewed on: {new Date(review.date).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
};

ProductReviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      reviewerName: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
};
