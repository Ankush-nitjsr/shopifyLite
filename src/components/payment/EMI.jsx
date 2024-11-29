import PropTypes from "prop-types";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

export const EMI = ({ isSelected, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <div className="flex">
      <div>
        <input
          id="emi"
          type="radio"
          className="mr-2"
          checked={isSelected}
          onChange={onSelect}
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="emi" className="font-semibold">
          EMI
        </label>
        <Select
          value={selectedValue}
          onValueChange={(value) => setSelectedValue(value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Add a new card" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="axisBank">Axis Bank</SelectItem>
              <SelectItem value="hdfcBank">HDFC Bank</SelectItem>
              <SelectItem value="iciciBank">ICICI Bank</SelectItem>
              <SelectItem value="kotakBank">Kotak Bank</SelectItem>
              <SelectItem value="sbi">State Bank of India</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <label htmlFor="card" className="flex space-x-2">
          <img
            className="w-12 h-12"
            src="src/assets/visa.png"
            alt="visa card image"
          />
          <img
            className="w-12 h-12"
            src="src/assets/master-card.png"
            alt="master-card image"
          />
          <img
            className="w-12 h-12"
            src="src/assets/american-express.png"
            alt="american-express card image"
          />
          <img
            className="w-12 h-12"
            src="src/assets/paypal.png"
            alt="paypal card image"
          />
          <img
            className="w-12 h-12"
            src="src/assets/maestro.png"
            alt="maestro card image"
          />
          <img
            className="w-12 h-12"
            src="src/assets/rupay.png"
            alt="rupay card image"
          />
        </label>
      </div>
    </div>
  );
};

EMI.propTypes = {
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func,
};
