import { useEffect, useState } from "react";

export const useGetProducts = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProducts();
  }, []);

  return { data };
};
