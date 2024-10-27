import PropTypes from "prop-types";
import { Separator } from "../../ui/separator";
import { ProductPrice } from "./ProductPrice";
import { PTitleAndRating } from "./PTitleAndRating";
import { PDeliveryAndAvailability } from "./PDeliveryAndAvailability";
import { ProductTags } from "./ProductTags";
import { PWarrantyAndReturn } from "./PWarrantyAndReturn";
import { PButton } from "./PButton";
import { PSelectQuantity } from "./PSelectQuantity";
import { ArrowUturnLeftIcon } from "@heroicons/react/20/solid";
import { CheckboxField } from "../../ui/CheckboxField";
import { PDetails } from "./PDetails";

export const PPRightContainer = ({ data }) => {
  return (
    <div className="product-details-container w-[50%] space-y-4">
      <div className="flex space-x-6">
        <div className="space-y-4 w-[55%]">
          {/* Product Title and Rating */}
          <PTitleAndRating title={data.title} rating={data.rating} />

          <Separator className="bg-gray-500" />

          {/* Product Price Section */}
          <ProductPrice
            price={data.price}
            discountPercentage={data.discountPercentage}
          />

          {/* Description Section */}
          <div className="description-section">
            <p className="font-semibold">Description:</p>
            <p>{data.description}</p>
          </div>

          {/* Tags */}
          <ProductTags tags={data.tags} />

          {/* Warranty and Return Policy */}
          <PWarrantyAndReturn
            warrantyInformation={data.warrantyInformation}
            returnPolicy={data.returnPolicy}
          />
        </div>
        <div className="w-[45%] border border-gray-500 space-y-8 p-8">
          <div className="price text-2xl font-bold">${data.price}</div>

          {/* Delivery and Availability Section */}
          <PDeliveryAndAvailability
            shippingInformation={data.shippingInformation}
            availabilityStatus={data.availabilityStatus}
          />

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ArrowUturnLeftIcon className="w-5 h-5" />
              <p>{data.returnPolicy}</p>
            </div>
            <PSelectQuantity minimumOrderQuantity={data.minimumOrderQuantity} />
            <PButton text={"Add to Cart"} />
            <PButton text={"Buy Now"} />
          </div>
          <CheckboxField text={"Add to Wish List"} />
        </div>
      </div>

      {/* Product details */}
      <PDetails data={data} />
    </div>
  );
};

PPRightContainer.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    discountPercentage: PropTypes.number,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    warrantyInformation: PropTypes.string.isRequired,
    returnPolicy: PropTypes.string.isRequired,
    shippingInformation: PropTypes.string.isRequired,
    availabilityStatus: PropTypes.string.isRequired,
    minimumOrderQuantity: PropTypes.number.isRequired,
    meta: PropTypes.shape({
      createdAt: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
