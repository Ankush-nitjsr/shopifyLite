import { useContext, useEffect, useState } from "react";
import ProductContainer from "../components/product-container/ProductContainer";
import Header from "../components/Header/Header";
import { SearchProduct } from "../components/search-product/SearchProduct";
import { ProductContext } from "../contexts/ProductContext";
import { useGetProducts } from "../hooks/useGetProducts";

const HomePage = () => {
  // Get all products
  const { data } = useGetProducts();

  // Get products from product context
  const { products, setProducts } = useContext(ProductContext);

  const [loading, setLoading] = useState(true);
  const [searchFlag, setSearchFlag] = useState(false);
  const [searchedProducts, setSearchedProducts] = useState([]);

  // useEffect to load products when component mounts
  useEffect(() => {
    if (data) {
      console.log("Setting products:", data); // Add this log to check the data being set
      setProducts(data);
      setLoading(false); // Set loading to false after setting products
    }
  }, []);

  console.log("products @ HomePage:", products);

  return (
    <>
      <Header />
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "16rem",
          }}
        >
          <h1 className="text-3xl">Loading...</h1>
        </div>
      ) : (
        <div className="w-full bg-gray-200 px-2 py-4 min-h-screen">
          <SearchProduct
            allProducts={products || []} // Ensure products is an array
            setSearchFlag={setSearchFlag}
            setSearchedProducts={setSearchedProducts}
          />
          {(!searchFlag ? products : searchedProducts).length > 0 ? (
            <ProductContainer
              products={!searchFlag ? products : searchedProducts}
            />
          ) : (
            <div className="h-40 mx-auto mt-4 w-[83%] flex justify-center items-center bg-white p-4 shadow-lg rounded-lg text-gray-500 text-xl">
              No products found.
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default HomePage;
