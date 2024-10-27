import PropTypes from "prop-types";

export const PWarrantyAndReturn = ({ warrantyInformation, returnPolicy }) => {
  return (
    <div className="policy-section space-y-2">
      <p>
        <strong>Warranty :</strong> {warrantyInformation}
      </p>
      <p>
        <strong>Return Policy :</strong> {returnPolicy}
      </p>
    </div>
  );
};

PWarrantyAndReturn.propTypes = {
  warrantyInformation: PropTypes.string.isRequired,
  returnPolicy: PropTypes.string.isRequired,
};
