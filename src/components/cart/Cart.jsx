import { useContext, useEffect } from "react";
import "./styles.css";
import { AuthContext } from "../../contexts/AuthContext";
import CartItem from "./cart-item/CartItem";
import { Separator } from "../../ui/separator";
import { CartSubTotal } from "./cart-item/CartSubTotal";

const Cart = () => {
  const { myCartData } = useContext(AuthContext);
  const { setMyCartData } = useContext(AuthContext);
  const { setCartTotalQuantity } = useContext(AuthContext);

  console.log("cart data", myCartData);

  // useEffect to load data from localStorage on component mount
  useEffect(() => {
    const cartData = localStorage.getItem("myCartData");
    if (cartData) {
      // Parse the stored JSON string back to an array
      setMyCartData(JSON.parse(cartData));
      // calculate total products' quantity saved in cart
      setCartTotalQuantity(
        JSON.parse(cartData).reduce(
          (sum, eachProduct) => sum + eachProduct.quantity,
          0
        )
      );
    }
  }, [setMyCartData, setCartTotalQuantity]);

  return (
    <div className="w-full flex justify-center gap-6">
      <div className="cart-items w-[60%] bg-white shadow-lg rounded-lg p-2">
        {myCartData.map((product, i) => (
          <div key={i}>
            <CartItem product={product} />
            <Separator className="bg-gray-200" />
          </div>
        ))}
      </div>
      {/* Component for Cart total amount at checkout */}
      <CartSubTotal />
    </div>
  );
};

export default Cart;
