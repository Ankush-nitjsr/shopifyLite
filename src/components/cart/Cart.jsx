import { useContext, useEffect } from "react";
import "./styles.css";
import { AuthContext } from "../../contexts/AuthContext";
import CartItem from "./cart-item/CartItem";
import { Separator } from "../../ui/separator";
import { CartSubTotal } from "./cart-item/CartSubTotal";

const Cart = () => {
  const { myCartData } = useContext(AuthContext);
  const { setMyCartData } = useContext(AuthContext);
  const { setCartTotalAmount } = useContext(AuthContext);
  const { setCartTotalQuantity } = useContext(AuthContext);

  console.log("cart data", myCartData);

  // useEffect to load data from localStorage on component mount
  useEffect(() => {
    const cartData = localStorage.getItem("myCartData");
    if (cartData) {
      // Parse the stored JSON string back to an array
      setMyCartData(JSON.parse(cartData));
      // calculate total products' amount saved in cart
      setCartTotalAmount(
        JSON.parse(cartData).reduce(
          (sum, eachProduct) => sum + eachProduct.productAmount,
          0
        )
      );
      // calculate total products' quantity saved in cart
      setCartTotalQuantity(
        JSON.parse(cartData).reduce(
          (sum, eachProduct) => sum + eachProduct.productQuantity,
          0
        )
      );
    }
  }, [setMyCartData, setCartTotalAmount, setCartTotalQuantity]);

  return (
    <div className="w-full flex gap-8">
      <div className="cart-items w-[70%] bg-gray-400 p-4">
        {myCartData.map((product, i) => (
          <div key={i}>
            <CartItem product={product} />
            <Separator className="bg-gray-500" />
          </div>
        ))}
      </div>
      <div className="cart-checkout w-[30%] bg-gray-400 max-h-fit">
        <CartSubTotal />
      </div>
    </div>
  );
};

export default Cart;
