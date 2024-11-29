import PropTypes from "prop-types";

export const CardPayment = ({ isSelected, onSelect }) => {
  return (
    <div className="flex">
      <div>
        <input
          id="card"
          type="radio"
          className="mr-2"
          checked={isSelected}
          onChange={onSelect}
        />
      </div>
      <div>
        <label htmlFor="card" className="font-semibold">
          Credit or debit card
        </label>
        <label htmlFor="card" className="flex space-x-2">
          <img
            className="w-12 h-12"
            src="../../src/assets/visa.png"
            alt="visa card image"
          />
          <img
            className="w-12 h-12"
            src="../../src/assets/master-card.png"
            alt="master-card image"
          />
          <img
            className="w-12 h-12"
            src="../../src/assets/american-express.png"
            alt="american-express card image"
          />
          <img
            className="w-12 h-12"
            src="../../src/assets/paypal.png"
            alt="paypal card image"
          />
          <img
            className="w-12 h-12"
            src="../../src/assets/maestro.png"
            alt="maestro card image"
          />
          <img
            className="w-12 h-12"
            src="../../src/assets/rupay.png"
            alt="rupay card image"
          />
        </label>
      </div>
    </div>
  );
};

CardPayment.propTypes = {
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func,
};
