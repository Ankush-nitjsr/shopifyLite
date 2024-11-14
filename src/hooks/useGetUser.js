import { useState, useEffect } from "react";

export const useGetUser = (userId) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users/${userId}`);
        const result = await response.json();
        console.log("User result: ", result);

        setUserData(result);
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
