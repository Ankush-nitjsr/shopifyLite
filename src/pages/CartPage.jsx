import Header from "../components/Header/Header";
import Cart from "../components/cart/Cart";

const CartPage = () => {
  return (
    <div className="px-14">
      <Header />
      <main className="p-7 bg-gray-500">
        <Cart />
      </main>
    </div>
  );
};

export default CartPage;
