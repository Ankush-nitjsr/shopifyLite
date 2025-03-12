import { useEffect, useState } from "react";

export const useGetProduct = (id) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError(error);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  return { data, error };
};
