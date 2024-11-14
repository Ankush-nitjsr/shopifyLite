import { useContext, useEffect, useState } from "react";
import ProductContainer from "../components/product-container/ProductContainer";
import Header from "../components/Header/Header";
import { ProductContext } from "../contexts/ProductContext";
import { useGetProducts } from "../hooks/useGetProducts";

const HomePage = () => {
  const { data, loading } = useGetProducts();
  const { products, setProducts } = useContext(ProductContext);
  const [searchFlag, setSearchFlag] = useState(false);
  const [searchedProducts, setSearchedProducts] = useState([]);

  useEffect(() => {
    if (data.length > 0) {
      setProducts(data);
    }
  }, [data, setProducts]);

  console.log("data @ HomePage:", data);
  console.log("products @ HomePage:", products);

  return (
    <>
      <Header
        setSearchFlag={setSearchFlag}
        setSearchedProducts={setSearchedProducts}
      />
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
          {(!searchFlag
            ? products.length > 0
              ? products
              : data
            : searchedProducts
          ).length > 0 ? (
            <ProductContainer
              productsData={!searchFlag ? products : searchedProducts}
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
