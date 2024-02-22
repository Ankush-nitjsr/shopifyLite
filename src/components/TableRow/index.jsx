import "./styles.css";

const TableRow = ({ rowData }) => {
  const handleDecrease = (key) => {
    // onDelete(key);
    console.log(rowData);
  };
  const handleIncrease = () => {
    // onUpdate(rowData);
  };

  return (
    <tr key={rowData.id}>
      <td>
        <img src={rowData.productPicture} />
      </td>
      <td>{rowData.productName}</td>
      <td>{rowData.productPrice}</td>
      <td>{rowData.productQuantity}</td>
      <td>
        <button style={{ backgroundColor: "green" }} onClick={handleIncrease}>
          +
        </button>
      </td>
      <td>
        <button style={{ backgroundColor: "red" }} onClick={handleDecrease}>
          -
        </button>
      </td>
      <td>{rowData.productAmount}</td>
    </tr>
  );
};

export default TableRow;
