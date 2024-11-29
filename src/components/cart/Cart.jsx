import { CartSubTotal } from "./cart-item/CartSubTotal";
import { CartItemList } from "./CartItemList";

const Cart = () => {
  return (
    <div className="w-full flex justify-center gap-6">
      <CartItemList />
      {/* Component for Cart total amount at checkout */}
      <CartSubTotal />
    </div>
  );
};

export default Cart;
