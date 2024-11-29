import { useContext, useEffect, useState } from "react";
import { VerifyUserAddress } from "./VerifyUserAddress";
import { AuthContext } from "../../contexts/AuthContext";
import { useGetUser } from "../../hooks/useGetUser";
import { CartSubTotal } from "../cart/cart-item/CartSubTotal";
import { NavLink } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import "./styles.css";
import { Payment } from "../payment/Payment";
import { OrderItemList } from "./OrderItemList";

export const Checkout = () => {
  // Get user details with context hook
  const { user, userSession, setUser } = useContext(AuthContext);

  const [isScrolling, setIsScrolling] = useState(false);

  // Fetch user data after login based on userId
  const { userData } = useGetUser(userSession.id);

  useEffect(() => {
    if (userData) {
      // Once userData is fetched, set it in the AuthContext
      setUser(userData);
    }
  }, [userData, setUser]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="checkout flex flex-col">
      <header className={isScrolling ? "scrolled" : ""}>
        <NavLink to="/home" className="flex items-center">
          <ShoppingBagIcon className="w-10 h-10 text-[#ffa500]" />
          <p className="font-medium text-xl pt-1">
            <span className="text-4xl text-[#ffa500]">S</span>
            <span>hop</span>
          </p>
        </NavLink>
        <p className="text-3xl">Checkout</p>
        <NavLink to="/profile" className="whitespace-nowrap">
          <div className="flex flex-col">
            {localStorage.getItem("userSession") && userSession.firstName ? (
              <>
                <span className="text-2xs">{`Hello, ${userSession.firstName}`}</span>
                <span className="text-sm font-medium">Account & Lists</span>
              </>
            ) : (
              <>
                <span className="text-2xs">Hello, log in</span>
                <span className="text-sm font-medium">Account & Lists</span>
              </>
            )}
          </div>
        </NavLink>
      </header>

      <div className="w-full flex justify-center gap-6 bg-gray-200 p-4">
        <div className="space-y-4">
          {/* Step 1: Verify delivery address */}
          <div className="flex bg-white rounded-lg p-2">
            <div className="w-[10%] flex justify-center p-1">
              <p className="text-xl font-semibold text-gray-800">1</p>
            </div>
            <VerifyUserAddress
              name={`${user.firstName} ${user.lastName}`}
              address={user.address}
              phone={user.phone}
            />
          </div>

          {/* Step 2: Select payment method */}
          <div className="flex bg-white rounded-lg p-2">
            <div className="w-[10%] flex justify-center p-1">
              <p className="text-xl font-semibold text-gray-800">2</p>
            </div>
            <Payment />
          </div>

          {/* Step 3: Items and delivery */}
          <div className="flex bg-white rounded-lg p-2">
            <div className="w-[10%] flex justify-center p-1">
              <p className="text-xl font-semibold text-gray-800">3</p>
            </div>
            <OrderItemList />
          </div>
        </div>
        <CartSubTotal />
      </div>
    </div>
  );
};
