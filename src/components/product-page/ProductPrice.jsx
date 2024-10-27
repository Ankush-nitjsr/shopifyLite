import PropTypes from "prop-types";

export const ProductPrice = ({ price, discountPercentage }) => {
  return (
    <div className="price-section space-y-3">
      <div className="flex space-x-2 items-center">
        <div className="discount bg-red-100 text-red-600 p-1 rounded">
          -{discountPercentage}%
        </div>
        <div className="price text-2xl font-bold">${price}</div>
      </div>
      <div className="flex">
        <p>M.R.P.:</p>
        <p className="ml-1 line-through">
          ${Math.round(price / (1 - discountPercentage / 100))}
        </p>
      </div>
    </div>
  );
};

ProductPrice.propTypes = {
  price: PropTypes.number.isRequired,
  discountPercentage: PropTypes.number.isRequired,
};
