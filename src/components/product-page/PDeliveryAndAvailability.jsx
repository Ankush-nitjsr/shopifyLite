import PropTypes from "prop-types";

export const PDeliveryAndAvailability = ({
  shippingInformation,
  availabilityStatus,
}) => {
  return (
    <div className="delivery-info space-y-2">
      <div className="flex space-x-1">
        <p>Free delivery:</p>
        <p className="font-bold">{shippingInformation}</p>
      </div>
      <div>
        <span
          className={`${
            availabilityStatus === "In Stock"
              ? "text-green-600"
              : "text-orange-300"
          } text-xl mt-4`}
        >
          {availabilityStatus}
        </span>
      </div>
    </div>
  );
};

PDeliveryAndAvailability.propTypes = {
  shippingInformation: PropTypes.string,
  availabilityStatus: PropTypes.string,
};
