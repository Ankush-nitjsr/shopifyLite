import { productPropTypes } from "../../lib/productPropTypes";
import { PDimensions } from "./PDimensions";
import { PWeight } from "./PWeight";

export const PDetails = ({ data }) => {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-bold">Product details</h1>
      <PDimensions dimensions={data.dimensions} />
      <PWeight weight={data.weight} />
      <div className="flex space-x-1">
        <p className="font-semibold">Brand :</p>
        <p>{data.brand}</p>
      </div>
      <div className="flex space-x-1">
        <p className="font-semibold">Product model number : </p>
        <p>{data.sku}</p>
      </div>
      <div className="flex space-x-1">
        <p className="font-semibold">Date First Available : </p>
        <p>{data.meta.createdAt}</p>
      </div>
    </div>
  );
};

PDetails.propTypes = {
  data: productPropTypes,
};
