import { useContext, useEffect } from "react";
import "./styles.css";
import { AuthContext } from "../../contexts/AuthContext";
import TableRow from "./cart-item";

const Table = () => {
  const { myCartData } = useContext(AuthContext);
  const { setMyCartData } = useContext(AuthContext);
  const { setCartTotalAmount } = useContext(AuthContext);
  const { setCartTotalQuantity } = useContext(AuthContext);

  // useEffect to load data from localStorage on component mount
  useEffect(() => {
    const cartData = localStorage.getItem("myCartData");
    if (cartData) {
      // Parse the stored JSON string back to an array
      setMyCartData(JSON.parse(cartData));
      // calculate total products' amount saved in cart
      setCartTotalAmount(
        JSON.parse(cartData).reduce(
          (sum, eachProduct) => sum + eachProduct.productAmount,
          0
        )
      );
      // calculate total products' quantity saved in cart
      setCartTotalQuantity(
        JSON.parse(cartData).reduce(
          (sum, eachProduct) => sum + eachProduct.productQuantity,
          0
        )
      );
    }
  }, [setMyCartData, setCartTotalAmount, setCartTotalQuantity]);

  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Picture</th>
          <th scope="col">Products</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Amount</th>
        </tr>
      </thead>
      <tbody>
        {myCartData.map((product, i) => (
          <TableRow key={i} rowData={product} />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th scope="row" colSpan="4">
            Total Amount to Pay (in USA dollar($))
          </th>
          <td>
            {Math.round(
              myCartData.reduce(
                (sum, eachProduct) => sum + eachProduct.productAmount,
                0
              ) * 100
            ) / 100}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
