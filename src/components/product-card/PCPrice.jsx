import PropTypes from "prop-types";

export const PCPrice = ({ price, discountPercentage }) => {
  return (
    <div className="price-section space-y-1 flex flex-col justify-center w-full">
      <p className="product-price text-lg sm:text-xl md:text-2xl text-center">
        ${price}
      </p>
      <div className="flex justify-center items-center">
        <div className="text-gray-500 flex">
          <p className="text-xs sm:text-sm">M.R.P.:</p>
          <p className="ml-1 line-through text-xs sm:text-sm">
            ${Math.round(price / (1 - discountPercentage / 100))}
          </p>
        </div>
        <p className="discount ml-2 font-semibold text-xs sm:text-sm">
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
