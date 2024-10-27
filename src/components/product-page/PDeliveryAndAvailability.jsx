import PropTypes from "prop-types";

export const PDeliveryAndAvailability = ({
  shippingInformation,
  availabilityStatus,
}) => {
  return (
    <div className="delivery-info">
      <div className="flex space-x-1">
        <p>Free delivery :</p>
        <p className="font-bold">{shippingInformation}</p>
      </div>
      <div
        className={`${
          availabilityStatus === "In Stock"
            ? "text-green-600"
            : "text-orange-300"
        } text-xl mt-4`}
      >
        {availabilityStatus}
      </div>
    </div>
  );
};

PDeliveryAndAvailability.propTypes = {
  shippingInformation: PropTypes.string,
  availabilityStatus: PropTypes.string,
};
