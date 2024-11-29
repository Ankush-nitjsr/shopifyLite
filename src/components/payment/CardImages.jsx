import PropTypes from "prop-types";

export const CardImages = ({ forId }) => {
  return (
    <label htmlFor={forId} className="flex flex-wrap space-x-2">
      <img className="w-12 h-12" src="/assets/visa.png" alt="visa card image" />
      <img
        className="w-12 h-12"
        src="/assets/master-card.png"
        alt="master-card image"
      />
      <img
        className="w-12 h-12"
        src="/assets/american-express.png"
        alt="american-express card image"
      />
      <img
        className="w-12 h-12"
        src="/assets/paypal.png"
        alt="paypal card image"
      />
      <img
        className="w-12 h-12"
        src="/assets/maestro.png"
        alt="maestro card image"
      />
      <img
        className="w-12 h-12"
        src="/assets/rupay.png"
        alt="rupay card image"
      />
    </label>
  );
};

CardImages.propTypes = {
  forId: PropTypes.string,
};
