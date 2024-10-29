import PropTypes from "prop-types";

export const productPropTypes = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
  discountPercentage: PropTypes.number,
  rating: PropTypes.number,
  stock: PropTypes.number,
  tags: PropTypes.arrayOf(PropTypes.string),
  brand: PropTypes.string,
  sku: PropTypes.string,
  weight: PropTypes.number,
  dimensions: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    depth: PropTypes.number,
  }),
  warrantyInformation: PropTypes.string,
  shippingInformation: PropTypes.string,
  availabilityStatus: PropTypes.string,
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      rating: PropTypes.number,
      comment: PropTypes.string,
      date: PropTypes.string,
      reviewerName: PropTypes.string,
      reviewerEmail: PropTypes.string,
    })
  ),
  returnPolicy: PropTypes.string,
  minimumOrderQuantity: PropTypes.number,
  meta: PropTypes.shape({
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    barcode: PropTypes.string,
    qrCode: PropTypes.string,
  }),
  images: PropTypes.arrayOf(PropTypes.string),
  thumbnail: PropTypes.string,
});
