import { useState } from "react";
import { CardPayment } from "./CardPayment";
import { COD } from "./COD";
import { EMI } from "./EMI";
import { NetBanking } from "./NetBanking";
import { UPI } from "./UPI";

export const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState("");

  const handleSelection = (paymentType) => {
    setSelectedPayment(paymentType);
  };

  return (
    <div className="space-y-4 p-1 w-full">
      {/* Component title */}
      <h1 className="text-xl font-semibold text-gray-800">
        Select a payment method
      </h1>

      {/* Payment options */}
      <div className="space-y-3">
        <CardPayment
          isSelected={selectedPayment === "card"}
          onSelect={() => handleSelection("card")}
        />
        <NetBanking
          isSelected={selectedPayment === "netbanking"}
          onSelect={() => handleSelection("netbanking")}
        />
        <UPI
          isSelected={selectedPayment === "upi"}
          onSelect={() => handleSelection("upi")}
        />
        <EMI
          isSelected={selectedPayment === "emi"}
          onSelect={() => handleSelection("emi")}
        />
        <COD
          isSelected={selectedPayment === "cod"}
          onSelect={() => handleSelection("cod")}
        />
      </div>
    </div>
  );
};
