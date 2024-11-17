import PropTypes from "prop-types";

export const PCPrice = ({ price, discountPercentage }) => {
  return (
    <div className="price-section space-y-3 flex flex-col justify-center w-full">
      <p className="product-price text-3xl text-center">${price}</p>
      <div className="flex justify-center items-center">
        <div className="text-gray-500 text-sm flex">
          <p>M.R.P.:</p>
          <p className="ml-1 line-through">
            ${Math.round(price / (1 - discountPercentage / 100))}
          </p>
        </div>
        <p className="discount ml-2 font-semibold">
          ({Math.round(discountPercentage)}% off)
        </p>
      </div>
    </div>
  );
};

PCPrice.propTypes = {
  price: PropTypes.number.isRequired,
  discountPercentage: PropTypes.number.isRequired,
};
