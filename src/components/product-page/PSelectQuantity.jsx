import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "../../ui/select";
import PropTypes from "prop-types";

export function PSelectQuantity({ minimumOrderQuantity }) {
  const [selectedValue, setSelectedValue] = useState(minimumOrderQuantity);

  return (
    <Select
      value={selectedValue}
      onValueChange={(value) => setSelectedValue(value)}
    >
      <SelectTrigger className="w-60 h-9 rounded-xl bg-gray-300 text-gray-900">
        {/* Manually display "Quantity: {selectedValue}" */}
        <span>{`Quantity: ${selectedValue}`}</span>
      </SelectTrigger>
      <SelectContent className="bg-gray-300 text-gray-900">
        <SelectGroup>
          <SelectItem value={minimumOrderQuantity}>
            {minimumOrderQuantity}
          </SelectItem>
          <SelectItem value={minimumOrderQuantity + 1}>
            {minimumOrderQuantity + 1}
          </SelectItem>
          <SelectItem value={minimumOrderQuantity + 2}>
            {minimumOrderQuantity + 2}
          </SelectItem>
          <SelectItem value={minimumOrderQuantity + 3}>
            {minimumOrderQuantity + 3}
          </SelectItem>
          <SelectItem value={minimumOrderQuantity + 4}>
            {minimumOrderQuantity + 4}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

PSelectQuantity.propTypes = {
  minimumOrderQuantity: PropTypes.number,
};
