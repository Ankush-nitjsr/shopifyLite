import { useContext } from "react";
import { ProductContext } from "../../../contexts/ProductContext";
import { CheckboxField } from "../../../ui/CheckboxField";
import { PButton } from "../../product-page/PButton";
import { Separator } from "../../../ui/separator";
import { useNavigate } from "react-router-dom";

export const CartSubTotal = () => {
  const { myCartData } = useContext(ProductContext);

  // use navigate hook
  const navigate = useNavigate();

  const { totalPrice, totalQuantity, totalDiscount } = myCartData.reduce(
    (accumulator, product) => {
      const productPrice =
        (product.price / (1 - product.discountPercentage / 100)) *
        product.quantity;
      accumulator.totalPrice += productPrice;
      accumulator.totalQuantity += product.quantity;
      const productDiscount = (productPrice * product.discountPercentage) / 100;
      accumulator.totalDiscount += productDiscount;
      return accumulator;
    },
    { totalPrice: 0, totalQuantity: 0, totalDiscount: 0 }
  );

  const handleCheckout = () => {
    console.log("Checkout initiated");
    navigate("/checkout");
  };

  return (
    <div className="bg-white cart-checkout w-[20%] px-6 py-4 space-y-3 shadow-lg rounded-lg max-h-fit sticky top-[5.75rem]">
      <h1 className="text-xl font-semibold text-gray-600">PRICE DETAILS</h1>
      <Separator className="bg-gray-500" />
      <div className="text-gray-900 flex justify-between">
        <span>{`Price (${totalQuantity} items)`}</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
      <div className="text-gray-900 flex justify-between">
        <span>Discount</span>
        <span>${totalDiscount.toFixed(2)}</span>
      </div>
      <div className="text-gray-900 flex justify-between">
        <span>Total Amount</span>
        <span>${(totalPrice - totalDiscount).toFixed(2)}</span>
      </div>
      <div className="text-gray-900">
        <span>
          <CheckboxField text={"This order contains a gift"} />
        </span>
      </div>
      <div className="flex justify-center">
        <PButton text={"Proceed to Buy"} handleClick={handleCheckout} />
      </div>
    </div>
  );
};
