import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { ProductContext } from "../../contexts/ProductContext";
import { toast } from "react-toastify";
import { productPropTypes } from "../../lib/productPropTypes";

const ProductCard = ({ product }) => {
  const { myCartData, setMyCartData } = useContext(ProductContext);

  // Hook for navigation
  const navigate = useNavigate();

  // Navigate to product details page
  const handleNavigateToProduct = () => {
    navigate(`/product/${product.id}`);
  };

  // Update cart
  const handleUpdateCart = (newCartData) => {
    setMyCartData(newCartData);
    localStorage.setItem("myCartData", JSON.stringify(newCartData));
    toast.success("Item added to cart");
  };

  // Add product to cart
  const handleAddToCart = (id) => {
    if (id === product.id) {
      const productToAdd = { ...product, quantity: 1 };
      handleUpdateCart([...myCartData, productToAdd]);
    }
  };

  return (
    <div className="product">
      <button
        className="product-img"
        onClick={handleNavigateToProduct}
        style={{
          padding: 0,
          background: "#f3f4f6",
          border: "none",
          cursor: "pointer",
        }}
      >
        <img src={product.images[0]} alt={product.title} />
      </button>
      <div className="details-info space-y-2 p-2">
        <button
          className="product-title"
          onClick={handleNavigateToProduct}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          {product.title}
        </button>
        <div className="product-brand font-bold">{product.brand}</div>
        <div className="details-action">
          <div className="flex justify-between">
            <div>
              <div className="text-xl text-[var(--theme)]">
                Price: ${product.price}
              </div>
              <div>
                Status:{" "}
                {product.stock > 0 ? (
                  <span className="text-green-700">In Stock</span>
                ) : (
                  <span className="text-orange-500">Unavailable</span>
                )}
              </div>
            </div>
            <div>
              <button
                className="addToCart-btn"
                onClick={() => handleAddToCart(product.id)}
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
  product: productPropTypes,
};

export default ProductCard;
