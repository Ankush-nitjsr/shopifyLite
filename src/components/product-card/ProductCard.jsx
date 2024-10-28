import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { AuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const ProductCard = ({ productId, title, price, stock, brand, images }) => {
  const { myCartData, setMyCartData } = useContext(AuthContext);
  const navigate = useNavigate(); // Hook for navigation

  // Navigate to product details page
  const handleNavigateToProduct = () => {
    navigate(`/product/${productId}`);
  };

  // Update cart
  const handleUpdateCart = (newCartData) => {
    setMyCartData(newCartData);
    localStorage.setItem("myCartData", JSON.stringify(newCartData));
    toast.success("Item added to cart");
  };

  // Add product to cart
  const handleAddToCart = (id) => {
    if (id === productId) {
      const productToBeAddedToCart = {
        productId: id,
        productPicture: images[0],
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
      <button
        className="product-img"
        onClick={handleNavigateToProduct}
        style={{
          padding: 0,
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <img src={images[0]} alt={title} />
      </button>
      <div className="details-info space-y-2">
        <button
          className="product-title"
          onClick={handleNavigateToProduct}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          {title}
        </button>
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
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductCard;
