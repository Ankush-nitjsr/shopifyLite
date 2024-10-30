import React from "react";
import PropTypes from "prop-types";
import { cn } from "../../lib/utils";
import { buttonVariants } from "../buttons/button-variants";

// Updated to use default parameters
const Button = React.forwardRef(
  ({ className = "", variant = "default", size = "default", ...rest }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...rest}
      />
    );
  }
);

// Assign a display name
Button.displayName = "Button";

// Prop validation
Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf([
    "default",
    "caution",
    "destructive",
    "outline",
    "secondary",
    "ghost",
    "dropdownItem",
    "dropdownCautionItem",
    "link",
  ]),
  size: PropTypes.oneOf([
    "default",
    "xs",
    "sm",
    "lg",
    "icon11",
    "icon10",
    "icon9",
    "icon8",
    "icon7",
    "icon6",
    "icon5",
  ]),
};

export default Button;
