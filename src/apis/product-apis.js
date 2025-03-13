import axios from "axios";

const baseAPIURL = "https://dummyjson.com/products";

const getProducts = async () => {
  const response = await axios.get(baseAPIURL);
  return response;
};

const getProduct = async (id) => {
  const response = await axios.get(`${baseAPIURL}/${id}`);
  return response;
};

export { getProducts, getProduct };
