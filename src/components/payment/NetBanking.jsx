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

export const NetBanking = ({ isSelected, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <div className="flex">
      <div>
        <input
          id="netbanking"
          type="radio"
          className="mr-2"
          checked={isSelected}
          onChange={onSelect}
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="netbanking" className="font-semibold">
          Net Banking
        </label>
        <Select
          value={selectedValue}
          onValueChange={(value) => setSelectedValue(value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Choose an Option" />
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
      </div>
    </div>
  );
};

NetBanking.propTypes = {
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func,
};
