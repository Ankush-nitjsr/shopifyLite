import PropTypes from "prop-types";
import { Checkbox } from "../ui/checkbox";

export function CheckboxField({ text, checked, onCheckedChange }) {
  return (
    <div className="ml-0.5 flex items-center space-x-2">
      <Checkbox
        id="terms"
        checked={checked}
        onCheckedChange={onCheckedChange}
      />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {text}
      </label>
    </div>
  );
}

CheckboxField.propTypes = {
  text: PropTypes.string,
  checked: PropTypes.bool,
  onCheckedChange: PropTypes.func,
};
