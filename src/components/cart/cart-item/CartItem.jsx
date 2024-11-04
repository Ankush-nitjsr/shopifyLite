import "./styles.css";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import {
  MinusCircleIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";
import { Checkbox } from "../../../ui/checkbox";
import { Separator } from "../../../ui/separator";
import { PDeliveryAndAvailability } from "../../product-page/PDeliveryAndAvailability";
import { CheckboxField } from "../../../ui/CheckboxField";
import { productPropTypes } from "../../../lib/productPropTypes";

const CartItem = ({ product }) => {
  const { myCartData, setMyCartData } = useContext(AuthContext);

  const handleIncrease = (id) => {
    let qty = product.quantity;
    qty++;

    const updatedproduct = {
      ...product,
      quantity: qty,
    };

    let myUpdatedCartData = myCartData.map((product) =>
      product.id === id ? updatedproduct : product
    );

    setMyCartData(myUpdatedCartData);
    localStorage.setItem("myCartData", JSON.stringify(myUpdatedCartData));
  };

  const handleDecrease = (id) => {
    let qty = product.quantity;
    if (qty > 1) qty--;

    const updatedproduct = {
      ...product,
      quantity: qty,
    };

    let myUpdatedCartData = myCartData.map((product) =>
      product.id === id ? updatedproduct : product
    );

    setMyCartData(myUpdatedCartData);

    localStorage.setItem("myCartData", JSON.stringify(myUpdatedCartData));
  };

  const handleRemove = (id) => {
    let myUpdatedCartData = myCartData.filter((product) => product.id !== id);

    setMyCartData(myUpdatedCartData);

    localStorage.setItem("myCartData", JSON.stringify(myUpdatedCartData));
  };

  return (
    <div className="flex justify-between bg-white p-4 h-56 w-full">
      <div className="ci-checkbox flex items-center justify-center w-[2%]">
        <Checkbox />
      </div>

      <div className="ci-image-wrapper h-full w-[28%]">
        <Link to={`/product/${product.id}`}>
          <img
            className="ci-image h-full w-full"
            src={product.images[0]}
            alt={product.title}
          />
        </Link>
      </div>

      <div className="ci-content-group h-full flex flex-col justify-between flex-1">
        <ul className="flex gap-2 justify-between">
          <div>
            <li className="ci-title text-gray-900">{product.title}</li>
            <div className="ci-details text-gray-700 space-y-2">
              <li>{product.category}</li>
              <li>
                <PDeliveryAndAvailability
                  shippingInformation={product.shippingInformation}
                  availabilityStatus={product.availabilityStatus}
                />
              </li>
              <li>
                <CheckboxField text={"This will be a gift"} />
              </li>
            </div>
          </div>

          <div className="ci-price-wrapper flex flex-col space-y-2">
            <div className="flex flex-col space-x-2">
              <div className="discount flex justify-end">
                <span className="text-gray-100 p-1 rounded bg-red-700">
                  {-product.discountPercentage}%
                </span>
              </div>
              <div className="flex justify-end">
                <span className="price text-2xl font-bold text-gray-900">
                  ${product.price}
                </span>
              </div>
            </div>
            <div className="flex text-gray-600">
              <p>M.R.P.:</p>
              <p className="ml-2 line-through">
                $
                {(
                  product.price /
                  (1 - product.discountPercentage / 100)
                ).toFixed(2)}
              </p>
            </div>
          </div>
        </ul>

        <div className="ci-action-links flex items-center gap-4">
          <div className="flex items-center justify-center space-x-5 border border-gray-600 rounded-3xl px-1 py-1">
            {product.quantity > 1 ? (
              <button onClick={() => handleDecrease(product.id)}>
                <MinusCircleIcon className="h-6 w-6 text-red-600 transition-transform duration-300 ease-in-out transform hover:scale-125" />
              </button>
            ) : (
              <button onClick={() => handleRemove(product.id)}>
                <TrashIcon className="h-6 w-6 text-red-600 transition-transform duration-300 ease-in-out transform hover:scale-125" />
              </button>
            )}
            <span className="text-lg text-gray-900">{product.quantity}</span>
            <button onClick={() => handleIncrease(product.id)}>
              <PlusCircleIcon className="h-6 w-6 text-green-400 transition-transform duration-300 ease-in-out transform hover:scale-125" />
            </button>
          </div>
          <Separator orientation="vertical" className="bg-gray-500 h-5" />
          <button
            className="text-blue-800"
            onClick={() => handleRemove(product.id)}
          >
            Delete
          </button>
          <Separator orientation="vertical" className="bg-gray-500 h-5" />
          <button className="text-blue-800">Save for later</button>
          <Separator orientation="vertical" className="bg-gray-500 h-5" />
          <button className="text-blue-800">Share</button>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  product: productPropTypes.isRequired,
};

export default CartItem;
