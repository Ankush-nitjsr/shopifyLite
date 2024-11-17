import { useContext, useEffect } from "react";
import "./styles.css";
import { ProductContext } from "../../contexts/ProductContext";
import CartItem from "./cart-item/CartItem";
import { Separator } from "../../ui/separator";
import { CartSubTotal } from "./cart-item/CartSubTotal";
import Button from "../../ui/buttons/Button";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { myCartData } = useContext(ProductContext);
  const { setMyCartData } = useContext(ProductContext);
  const { setCartTotalQuantity } = useContext(ProductContext);

  const navigate = useNavigate();

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
        {myCartData.length ? (
          myCartData.map((product) => (
            <div key={product}>
              <CartItem product={product} />
              <Separator className="bg-gray-200" />
            </div>
          ))
        ) : (
          <div className="flex flex-col justify-center items-center h-full space-y-4">
            <p className="text-xl">Your cart is empty!</p>
            <p className="text-sm">Add items to it now.</p>
            <Button className="px-16" onClick={() => navigate("/home")}>
              Shop now
            </Button>
          </div>
        )}
      </div>
      {/* Component for Cart total amount at checkout */}
      <CartSubTotal />
    </div>
  );
};

export default Cart;
