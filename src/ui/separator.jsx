import { forwardRef } from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import PropTypes from "prop-types";
import { cn } from "../lib/utils";

const Separator = forwardRef((props, ref) => {
  const {
    className,
    orientation = "horizontal",
    decorative = true,
    ...restProps
  } = props;

  return (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...restProps}
    />
  );
});

// Add propTypes for prop validation
Separator.propTypes = {
  className: PropTypes.string,
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  decorative: PropTypes.bool,
};

// Display name for debugging purposes
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
