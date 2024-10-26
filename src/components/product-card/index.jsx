import { useContext } from "react";
import "./styles.css";
import { AuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const ProductCard = ({ productId, title, price, stock, brand, images }) => {
  const { myCartData, setMyCartData } = useContext(AuthContext);

  // update cart
  const handleUpdateCart = (newCartData) => {
    // set the state with new array of cart data
    setMyCartData(newCartData);

    // Convert the array to JSON and save it to localStorage
    localStorage.setItem("myCartData", JSON.stringify(newCartData));

    // display popup with success message
    toast.success("item added to cart");
  };

  const handleAddToCart = (id) => {
    if (id === productId) {
      const productToBeAddedToCart = {
        productId: id,
        productPicture: images,
        productName: title,
        productPrice: price,
        productQuantity: 1,
        productAmount: price,
      };
      handleUpdateCart([...myCartData, productToBeAddedToCart]);
    }
  };

  return (
    <div className="product">
      <div className="product-img">
        <img src={images} alt={title} />
      </div>
      <div className="details-info space-y-2">
        <div className="product-title">{title}</div>
        <div className="product-brand font-bold">{brand}</div>
        <div className="details-action">
          <div className="flex justify-between text-gray-500">
            <div>
              <div className="text-xl text-[var(--theme)]">Price: ${price}</div>
              <div>
                Status:{" "}
                {stock > 0 ? (
                  <span className="success">In Stock</span>
                ) : (
                  <span className="error">Unavailable</span>
                )}
              </div>
            </div>
            <div>
              <button
                className="addToCart-btn"
                onClick={() => handleAddToCart(productId)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  productId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  brand: PropTypes.string,
  images: PropTypes.string.isRequired,
};

export default ProductCard;
