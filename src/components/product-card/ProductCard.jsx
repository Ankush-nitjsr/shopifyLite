import { useNavigate } from "react-router-dom";
import "./styles.css";
import { productPropTypes } from "../../lib/productPropTypes";
import { PCPrice } from "./PCPrice";
import { StarRating } from "../product-page/StarRating";

const ProductCard = ({ product }) => {
  // Hook for navigation
  const navigate = useNavigate();

  // Navigate to product details page
  const handleNavigateToProduct = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="flex flex-col p-1 w-72">
      <div className="product-card">
        <button className="product-img" onClick={handleNavigateToProduct}>
          <img src={product.images[0]} alt={product.title} />
        </button>
        <div className="details-info space-y-2 p-2 flex flex-col justify-center">
          <div className="product-brand font-bold flex justify-center">
            <span>{product.brand}</span>
          </div>
          <button
            className="product-title text-black"
            onClick={handleNavigateToProduct}
          >
            {product.title}
          </button>
          <div className="m-auto">
            <StarRating rating={product.rating} />
          </div>
          <div className="product-details flex flex-col justify-center items-center">
            <PCPrice
              price={product.price}
              discountPercentage={product.discountPercentage}
            />
            <div>
              Status:{" "}
              {product.stock > 0 ? (
                <span className="text-green-700">In Stock</span>
              ) : (
                <span className="text-orange-500">Unavailable</span>
              )}
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
