import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function LoginPage() {
  // authentication handling of user with context hook
  const { setIsAuthenticated } = useContext(AuthContext);
  // Get user state with context hook
  const { user } = useContext(AuthContext);
  const { setUser } = useContext(AuthContext);
  // navigate to desired location
  const navigate = useNavigate();

  // API URL for user login
  const URL_FOR_LOGIN = "https://dummyjson.com/auth/login";

  // save input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  // function for handling user login
  const handleOnLogin = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch(URL_FOR_LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        console.log(user.username, user.password);
        throw new Error("Incorrect Username/Password");
      }
      const result = await response.json();
      localStorage.setItem("userDetails", JSON.stringify(result));
      const token = result.token;
      // save token to local storage
      localStorage.setItem("token", token);
      setIsAuthenticated(true);
      // display success message on Login
      toast.success("LogIn Successful!");
      console.log("Login Successful", user);

      // switch to HomePage on successful Login
      navigate("/home");
    } catch (error) {
      console.error("Error in login", error);
      toast.error(error.message);
    }
  };

  return (
    <>
      <Header />
      <main>
        <div className="border border-gray-400 rounded-2xl flex flex-col h-[60vh] bg-slate-300">
          <form onSubmit={handleOnLogin} className="login-form">
            <h1 className="text-2xl mx-auto mt-14 text-black">
              Login to your account
            </h1>
            <p className="flex flex-col space-y-1">
              <label htmlFor="username" className="text-black text-lg">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Enter username"
                value={user.username}
                onChange={handleChange}
                className="h-10"
              />
            </p>
            <p className="flex flex-col space-y-1">
              <label htmlFor="password" className="text-black text-lg">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter password"
                value={user.password}
                onChange={handleChange}
                className="h-10"
              />
            </p>
            <p className="flex flex-col">
              <button
                type="submit"
                className="h-10 text-center bg-blue-600 hover:bg-blue-400"
              >
                Login
              </button>
              <h3 className="text-xs text-black">
                Choose username and password from{" "}
                <Link
                  className="cursor-pointer text-blue-600 text-sm inline"
                  to="https://dummyjson.com/users"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </Link>{" "}
                to login
              </h3>
            </p>
          </form>
        </div>
      </main>
    </>
  );
}

export default LoginPage;
