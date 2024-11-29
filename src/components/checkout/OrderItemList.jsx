import { CartItemList } from "../cart/CartItemList";

export const OrderItemList = () => {
  return (
    <div className="space-y-4 p-1">
      {/* Component title */}
      <h1 className="text-xl font-semibold text-gray-800">
        Review items and delivery
      </h1>
      <CartItemList />
    </div>
  );
};
