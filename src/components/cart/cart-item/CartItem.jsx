import "./styles.css";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import {
  MinusCircleIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";

const CartItem = ({ rowData }) => {
  const { myCartData, setMyCartData } = useContext(AuthContext);

  const handleIncrease = (id) => {
    let qty = rowData.productQuantity;
    qty++;

    let newProductAmount = rowData.productPrice * qty;

    const updatedRowData = {
      ...rowData,
      productQuantity: qty,
      productAmount: newProductAmount,
    };

    let myUpdatedCartData = myCartData.map((product) =>
      product.productId === id ? updatedRowData : product
    );

    setMyCartData(myUpdatedCartData);
    localStorage.setItem("myCartData", JSON.stringify(myUpdatedCartData));
  };

  const handleDecrease = (id) => {
    let qty = rowData.productQuantity;
    if (qty > 1) qty--;

    let newProductAmount = rowData.productPrice * qty;

    const updatedRowData = {
      ...rowData,
      productQuantity: qty,
      productAmount: newProductAmount,
    };

    let myUpdatedCartData = myCartData.map((product) =>
      product.productId === id ? updatedRowData : product
    );

    setMyCartData(myUpdatedCartData);

    localStorage.setItem("myCartData", JSON.stringify(myUpdatedCartData));
  };

  const handleRemove = (id) => {
    let myUpdatedCartData = myCartData.filter(
      (product) => product.productId !== id
    );

    setMyCartData(myUpdatedCartData);

    localStorage.setItem("myCartData", JSON.stringify(myUpdatedCartData));
  };

  return (
    <tr key={rowData.productId} id={rowData.productId}>
      <td>
        <img
          className="h-24"
          src={rowData.productPicture}
          alt={rowData.productName}
        />
      </td>
      <td>{rowData.productName}</td>
      <td>{rowData.productPrice}</td>
      <td>
        <div className="flex items-center space-x-2">
          <button onClick={() => handleIncrease(rowData.productId)}>
            <PlusCircleIcon className="h-6 w-6 text-green-400 transition-transform duration-300 ease-in-out transform hover:scale-125" />
          </button>
          <span className="text-lg">{rowData.productQuantity}</span>
          {rowData.productQuantity > 1 ? (
            <button onClick={() => handleDecrease(rowData.productId)}>
              <MinusCircleIcon className="h-6 w-6 text-red-600 transition-transform duration-300 ease-in-out transform hover:scale-125" />
            </button>
          ) : (
            <button onClick={() => handleRemove(rowData.productId)}>
              <TrashIcon className="h-6 w-6 text-red-600 transition-transform duration-300 ease-in-out transform hover:scale-125" />
            </button>
          )}
        </div>
      </td>
      <td>{Math.round(rowData.productAmount * 100) / 100}</td>
    </tr>
  );
};

export default CartItem;
