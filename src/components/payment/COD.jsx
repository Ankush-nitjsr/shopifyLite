import PropTypes from "prop-types";

export const COD = ({ isSelected, onSelect }) => {
  return (
    <div className="flex">
      <div>
        <input
          id="cod"
          type="radio"
          className="mr-2"
          checked={isSelected}
          onChange={onSelect}
        />
      </div>
      <div>
        <label htmlFor="cod" className="font-semibold">
          Cash on Delivery/Pay on Delivery
        </label>
      </div>
    </div>
  );
};

COD.propTypes = {
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func,
};
