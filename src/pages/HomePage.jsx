import { useEffect, useState } from "react";
import ProductContainer from "../components/product-container/ProductContainer";
import Header from "../components/Header/Header";
import { SearchProduct } from "../components/search-product/SearchProduct";

const HomePage = () => {
  const PRODUCTS_URL = "https://dummyjson.com/products";

  const [loading, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);
  const [searchFlag, setSearchFlag] = useState(false);
  const [searchedProducts, setSearchedProducts] = useState([]);

  // useEffect to load products when component mounts
  useEffect(() => {
    const loadAllProducts = async () => {
      try {
        const response = await fetch(PRODUCTS_URL);
        const data = await response.json();
        setAllProducts(data.products);
        setLoading(false);
      } catch (error) {
        console.error("Error loading products", error);
      }
    };

    loadAllProducts();
  }, []);

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
        <div className="w-full bg-gray-200 px-2 py-4">
          <SearchProduct
            allProducts={allProducts}
            setSearchFlag={setSearchFlag}
            setSearchedProducts={setSearchedProducts}
          />
          {(!searchFlag ? allProducts : searchedProducts).length > 0 ? (
            <ProductContainer
              products={!searchFlag ? allProducts : searchedProducts}
            />
          ) : (
            <div>No products found.</div>
          )}
        </div>
      )}
    </>
  );
};

export default HomePage;
