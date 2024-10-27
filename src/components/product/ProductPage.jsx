/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useGetProduct } from "./useGetProduct";
import Header from "../Header";
import { Separator } from "../../ui/separator";
import { StarIcon as SolidStarIcon } from "@heroicons/react/20/solid";
import { StarIcon as OutlineStarIcon } from "@heroicons/react/24/outline";

export const ProductPage = () => {
  // Get product id from URL params
  const { pid } = useParams();

  // Get product data
  const { data } = useGetProduct(pid);

  // Show loading state if data is fetching/loading
  if (!data) return <div>Loading...</div>;

  // Get the floored value of the rating
  const ratingStars = Math.floor(data.rating);

  // Check if the rating has a decimal part for rendering an empty star
  const hasHalfStar = data.rating > ratingStars;

  return (
    <>
      <Header />
      <div className="flex w-full px-7 py-7 justify-center space-x-8">
        {/* Left Section: Product Images */}
        <div className="image-container flex w-[40%] bg-gray-50 max-h-fit rounded-md p-1">
          <div className="w-[20%] mt-5 max-h-fit">
            <div className="max-h-fit">
              {data.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className="w-full mb-4 p-5 border border-gray-400 rounded-3xl h-auto object-cover"
                  alt={data.title}
                />
              ))}
            </div>
            <div className="max-h-fit">
              <img
                key={"thumbnail"}
                src={data.thumbnail}
                className="w-full mb-4 p-5 border border-gray-400 rounded-3xl h-auto object-cover"
                alt={data.title}
              />
            </div>
          </div>
          <div className="main-image flex-1 bg-gray-100 px-10 max-h-fit">
            {data.images.map((image, index) => (
              <img
                key={index}
                src={image}
                className="w-full mb-4 p-5 bg-gray-200 h-auto object-cover"
                alt={data.title}
              />
            ))}
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div className="product-details-container w-[50%] space-y-4">
          {/* Product Title and Rating */}
          <div className="title-section">
            <div className="title text-4xl font-semibold">{data.title}</div>
            <div className="flex items-center justify-start">
              <div className="rating text-lg mr-2">{data.rating}</div>
              <div className="flex">
                {Array(ratingStars)
                  .fill()
                  .map((_, index) => (
                    <SolidStarIcon
                      key={index}
                      className="w-5 h-5 text-yellow-500"
                    />
                  ))}
                {hasHalfStar && (
                  <OutlineStarIcon className="w-5 h-5 text-yellow-500" />
                )}
              </div>
            </div>
          </div>

          <Separator className="bg-gray-500" />

          {/* Product Price Section */}
          <div className="price-section">
            <div className="flex space-x-2 items-center">
              <div className="discount bg-red-100 text-red-600 p-1 rounded">
                -{data.discountPercentage}%
              </div>
              <div className="price text-2xl font-bold">${data.price}</div>
            </div>
            <div className="flex">
              <p>M.R.P.:</p>
              <p className="ml-1 line-through">
                ${Math.round(data.price / (1 - data.discountPercentage / 100))}
              </p>
            </div>
          </div>

          <Separator className="bg-gray-500" />

          {/* Description Section */}
          <div className="description-section">
            <p className="font-semibold">Description:</p>
            <p>{data.description}</p>
          </div>

          <Separator className="bg-gray-500" />

          {/* Delivery and Availability Section */}
          <div className="delivery-info">
            <div className="flex space-x-1">
              <p>Free delivery :</p>
              <p className="font-bold">{data.shippingInformation}</p>
            </div>
            <div
              className={`${
                data.availabilityStatus === "In Stock"
                  ? "text-green-600"
                  : "text-orange-300"
              }`}
            >
              {data.availabilityStatus}
            </div>
          </div>

          <Separator className="bg-gray-500" />

          {/* Stock Information */}
          <div className="stock-info">
            <p className="font-bold">Stock: {data.stock}</p>
          </div>

          <Separator className="bg-gray-500" />

          {/* Tags */}
          <div className="tags">
            <p className="font-bold">Tags:</p>
            <div className="flex space-x-2">
              {data.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 px-2 py-1 rounded text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <Separator className="bg-gray-500" />

          {/* Warranty and Return Policy */}
          <div className="policy-section">
            <p>
              <strong>Warranty:</strong> {data.warrantyInformation}
            </p>
            <p>
              <strong>Return Policy:</strong> {data.returnPolicy}
            </p>
          </div>

          <Separator className="bg-gray-500" />

          {/* Reviews */}
          <div className="reviews-section">
            <p className="font-bold">Customer Reviews:</p>
            {data.reviews.map((review, index) => (
              <div key={index} className="border p-3 rounded mb-3">
                <p className="font-bold">{review.reviewerName}</p>
                <div className="flex">
                  <div className="rating text-lg mr-2">{review.rating}</div>
                  <div className="flex">
                    {Array(Math.floor(review.rating))
                      .fill()
                      .map((_, idx) => (
                        <SolidStarIcon
                          key={idx}
                          className="w-4 h-4 text-yellow-500"
                        />
                      ))}
                    {review.rating % 1 !== 0 && (
                      <OutlineStarIcon className="w-4 h-4 text-yellow-500" />
                    )}
                  </div>
                </div>
                <p>{review.comment}</p>
                <p className="text-sm text-gray-400">
                  Reviewed on: {new Date(review.date).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
