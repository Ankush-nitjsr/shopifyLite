import PropTypes from "prop-types";
import Button from "../../ui/buttons/Button";

export const UPI = ({ isSelected, onSelect }) => {
  return (
    <div className="flex">
      <div>
        <input
          id="upi"
          type="radio"
          className="mr-2"
          checked={isSelected}
          onChange={onSelect}
        />
      </div>
      <div>
        <label htmlFor="upi" className="font-semibold">
          Other UPI Apps
        </label>
        <div className="space-y-1">
          <p>Please enter your UPI ID</p>
          <div className="space-x-4">
            <input
              type="text"
              placeholder="Enter UPI ID"
              className="border border-gray-200 p-2 rounded-md"
            />
            <Button>Verify</Button>
          </div>
          <p>The UPI ID is in the format of name/phone number@banknamewsz</p>
        </div>
      </div>
    </div>
  );
};

UPI.propTypes = {
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func,
};
