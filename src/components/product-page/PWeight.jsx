import PropTypes from "prop-types";

export const PWeight = ({ weight }) => {
  return (
    <div className="flex space-x-1">
      <p className="font-semibold">Product Weight :</p>
      <p>{weight} g</p>
    </div>
  );
};

PWeight.propTypes = {
  weight: PropTypes.number.isRequired,
};
