import axios from "axios";
import { useState, useEffect } from "react";

export const useGetUser = (userId) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/users/${userId}`
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    if (userId) {
      fetchUser();
    }
  }, [userId]);

  return { userData };
};
