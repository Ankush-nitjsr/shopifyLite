import { useParams } from "react-router-dom";
import { useGetProduct } from "../../hooks/useGetProduct";
import Header from "../Header/Header";
import { PPLeftContainer } from "./PPLeftContainer";
import { PPRightContainer } from "./PPRightContainer";
import { ProductReviews } from "./ProductReviews";

export const ProductPage = () => {
  // Get product id from URL params
  const { pid } = useParams();

  // Get product data
  const { data } = useGetProduct(pid);

  // Show loading state if data is fetching/loading
  if (!data) return <div>Loading...</div>;

  return (
    <div className="px-7">
      <Header />
      <div className="flex w-full py-7 justify-center space-x-8">
        {/* Left Section: Product Images */}
        <PPLeftContainer
          title={data.title}
          images={data.images}
          thumbnail={data.thumbnail}
        />

        {/* Right Section: Product Details */}
        <PPRightContainer data={data} />
      </div>
      <ProductReviews reviews={data.reviews} rating={data.rating} />
    </div>
  );
};
