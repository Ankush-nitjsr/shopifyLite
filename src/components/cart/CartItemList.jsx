import { useNavigate } from "react-router-dom";
import Button from "../../ui/buttons/Button";
import { Separator } from "../../ui/separator";
import CartItem from "./cart-item/CartItem";
import { useContext, useEffect } from "react";
import { ProductContext } from "../../contexts/ProductContext";

export const CartItemList = () => {
  const { myCartData } = useContext(ProductContext);
  const { setMyCartData } = useContext(ProductContext);
  const { setCartTotalQuantity } = useContext(ProductContext);

  const navigate = useNavigate();

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
    <div className="cart-items min-w-[60%] bg-white rounded-lg p-2">
      {myCartData.length ? (
        myCartData.map((product) => (
          <div key={`${product.sku}-${product.id}`}>
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
  );
};
