import { useNavigate } from "react-router-dom";
import "./styles.css";
import { productPropTypes } from "../../lib/productPropTypes";
import { PCPrice } from "./PCPrice";
import { StarRating } from "../product-page/StarRating";
import { useState, useEffect } from "react";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);

  // Handle cached images
  useEffect(() => {
    const img = new Image();
    img.src = product.images[0];
    img.onload = () => setImageLoaded(true);
  }, [product.images]);

  // Navigate to product details page
  const handleNavigateToProduct = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="flex flex-col p-1 w-48 md:w-72">
      <div className="product-card">
        <button className="product-img" onClick={handleNavigateToProduct}>
          {/* Placeholder while image is loading */}
          {!imageLoaded && (
            <div className="image-placeholder bg-gray-200 animate-pulse w-full h-full" />
          )}
          {/* Image */}
          <img
            src={product.images[0]}
            alt={product.title}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className={`${imageLoaded ? "block" : "hidden"}`}
          />
        </button>
        <div className="details-info space-y-1 p-2 flex flex-col justify-center">
          <div className="product-brand flex justify-center">
            <span className="font-bold text-xs sm:text-sm md:text-base">
              {product.brand}
            </span>
          </div>
          <button
            className="product-title text-black text-xs sm:text-sm md:text-base"
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
            <div className="text-xs sm:text-sm md:text-base">
              Status:{" "}
              {product.stock > 0 ? (
                <span className="text-green-700 text-xs sm:text-sm md:text-base">
                  In Stock
                </span>
              ) : (
                <span className="text-orange-500 text-xs sm:text-sm md:text-base">
                  Unavailable
                </span>
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
