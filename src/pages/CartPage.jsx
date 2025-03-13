import { lazy, Suspense } from "react";

const Header = lazy(() => import("../components/Header/Header"));
const Cart = lazy(() => import("../components/cart/Cart"));

/**
 * CartPage component that lazily loads the Header and Cart components.
 *
 * This component uses React's Suspense to display a fallback loading message
 * while the Header and Cart components are being loaded.
 *
 * @component
 * @example
 * return (
 *   <CartPage />
 * )
 */

const CartPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <main className="p-6 bg-gray-200 min-h-[calc(100vh-80px)]">
        <Cart />
      </main>
    </Suspense>
  );
};

export default CartPage;
