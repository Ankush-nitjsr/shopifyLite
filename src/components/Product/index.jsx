import { useContext, useEffect, useState } from "react";
import "./styles.css";
import { AuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";

const Product = ({
  productId,
  title,
  description,
  price,
  discountPercentage,
  rating,
  stock,
  brand,
  category,
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
    console.log(localStorage.getItem("myCartData"));
    toast.success("item added to cart");
  };
  const handleAddToCart = (id) => {
    if (id === productId) {
      const productToBeAddedToCart = {
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
      <div className="details-info">
        <div className="product-title">{title}</div>
        <div>Description: {description}</div>
        <div className="product-brand">{brand}</div>
        <div className="details-action">
          <ul>
            <li>Price: ${price}</li>
            <li>
              Status:
              {stock > 0 ? (
                <span className="success"> In Stock</span>
              ) : (
                <span className="error"> Unavailable</span>
              )}
            </li>
            <li>
              <button
                className="addToCart-btn"
                onClick={() => handleAddToCart(productId)}
              >
                Add to Cart
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Product;
