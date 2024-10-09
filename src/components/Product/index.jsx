import { useContext } from "react";
import "./styles.css";
import { AuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const Product = ({
  productId,
  title,
  description,
  price,
  stock,
  brand,
  images,
}) => {
  // component starts from here

  const { myCartData } = useContext(AuthContext);
  const { setMyCartData } = useContext(AuthContext);

  // update cart
  const handleUpdateCart = (newCartData) => {
    // set the state with new array of cart data
    setMyCartData(newCartData);

    // Convert the array to JSON and save it to localStorage
    localStorage.setItem("myCartData", JSON.stringify(newCartData));

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
        <div className="text-gray-400 font-light text-sm">{description}</div>
        <div className="product-brand font-bold">{brand}</div>
        <div className="details-action">
          <div className="flex justify-between">
            <div>
              <div>Price: ${price}</div>
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

Product.propTypes = {
  productId: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  discountPercentage: PropTypes.number,
  rating: PropTypes.number,
  stock: PropTypes.number,
  brand: PropTypes.string,
  category: PropTypes.string,
  images: PropTypes.string,
};

export default Product;
