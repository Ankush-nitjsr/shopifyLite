import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import "./styles.css";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { setIsAuthenticated, setUserDetails } = useContext(AuthContext);
  const navigate = useNavigate();
  const URL_FOR_LOGIN = "https://dummyjson.com/auth/login";

  const onSubmit = async (data) => {
    try {
      const response = await fetch(URL_FOR_LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Ensure this is stringified
      });

      if (!response.ok) {
        const errorResult = await response.json();
        throw new Error(errorResult.message || "Incorrect Username/Password");
      }

      const result = await response.json();
      localStorage.setItem("userDetails", JSON.stringify(result));
      localStorage.setItem("token", result.token);
      setIsAuthenticated(true);
      setUserDetails(result);
      toast.success("LogIn Successful!");
      navigate("/home");
    } catch (error) {
      console.error("Error in login", error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-2xl px-9 py-10 w-full max-w-md mx-auto shadow-lg shadow-right-custom"
    >
      <h1 className="text-2xl font-bold text-center mb-10 text-blue-600">
        Login to your account
      </h1>

      {/* Username field */}
      <div className="mb-6">
        <label
          htmlFor="username"
          className="block text-base font-medium text-gray-700 mb-2"
        >
          Username <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter your username"
          id="username"
          name="username"
          className={`${
            errors.username ? "border-red-600" : "border-gray-300"
          } p-3 w-full text-gray-900 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none transition duration-200 bg-gray-50`}
          {...register("username", { required: true })}
        />
        {errors.username && (
          <span className="text-red-600 text-sm mt-1">
            Username is required
          </span>
        )}
      </div>

      {/* Password field */}
      <div className="mb-10">
        <label
          htmlFor="password"
          className="block text-base font-medium text-gray-700 mb-2"
        >
          Password <span className="text-red-600">*</span>
        </label>
        <input
          type="password"
          placeholder="Enter your password"
          id="password"
          name="password"
          className={`${
            errors.password ? "border-red-600" : "border-gray-300"
          } p-3 w-full text-gray-900 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none transition duration-200 bg-gray-50`}
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="text-red-600 text-sm mt-1">
            Password is required
          </span>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full text-white bg-blue-600 hover:bg-blue-500 font-medium py-3 rounded-lg transition-all duration-300 shadow-lg"
      >
        Login
      </button>

      {/* Info and Link */}
      <p className="text-center text-gray-600 text-sm mt-6">
        Don&#39;t have a username and password?
      </p>
      <p className="text-center text-gray-600 text-sm">
        Choose one from{" "}
        <Link
          className="text-blue-600 hover:underline"
          to="https://dummyjson.com/users"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </Link>
      </p>
    </form>
  );
};
