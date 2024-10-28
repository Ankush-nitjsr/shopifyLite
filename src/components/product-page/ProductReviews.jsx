import PropTypes from "prop-types";
import { StarRating } from "./StarRating";

export const ProductReviews = ({ reviews, rating }) => {
  return (
    <div className="reviews-section space-y-3 my-4">
      <div>
        <p className="text-2xl font-bold">Customer reviews:</p>
      </div>

      {/* Star rating of product */}
      <div className="flex space-x-2">
        <StarRating rating={rating} />
        <p className="text-xl">{`${rating} out of 5`}</p>
      </div>

      {/* Product Reviews */}
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="border p-6 rounded-2xl flex space-x-4 items-center w-[60%]"
          >
            <div className="w-[20%] space-y-2">
              <p className="font-bold">{review.reviewerName}</p>
              <StarRating rating={review.rating} />
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-400">
                Reviewed on: {new Date(review.date).toLocaleDateString()}
              </p>
              <p className="text-xl">{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
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
  rating: PropTypes.number.isRequired,
};
