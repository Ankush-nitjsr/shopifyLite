import Header from "../components/Header/Header";
import Cart from "../components/cart/Cart";

const CartPage = () => {
  return (
    <div className="">
      <Header />
      <main className="p-6 bg-gray-200 min-h-[calc(100vh-80px)]">
        <Cart />
      </main>
    </div>
  );
};

export default CartPage;
