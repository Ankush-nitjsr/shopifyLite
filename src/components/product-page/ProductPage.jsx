import { useParams } from "react-router-dom";
import { useGetProduct } from "./useGetProduct";
import Header from "../Header";
import { PPLeftContainer } from "./PPLeftContainer";
import { PPRightContainer } from "./PPRightContainer";

export const ProductPage = () => {
  // Get product id from URL params
  const { pid } = useParams();

  // Get product data
  const { data } = useGetProduct(pid);

  // Show loading state if data is fetching/loading
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <div className="flex w-full px-7 py-7 justify-center space-x-8">
        {/* Left Section: Product Images */}
        <PPLeftContainer
          title={data.title}
          images={data.images}
          thumbnail={data.thumbnail}
        />

        {/* Right Section: Product Details */}
        <PPRightContainer data={data} />
      </div>
    </>
  );
};
