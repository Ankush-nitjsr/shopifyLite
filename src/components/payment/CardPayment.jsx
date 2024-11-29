import PropTypes from "prop-types";
import { CardInfoDialog } from "./CardInfoDialog";
import { CardImages } from "./CardImages";

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
        <CardImages forId="card" />
        <div>
          <CardInfoDialog />
        </div>
      </div>
    </div>
  );
};

CardPayment.propTypes = {
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func,
};
