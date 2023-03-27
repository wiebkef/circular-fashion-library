import { useState } from "react";
import axios from "../axiosInstance";
import { useNavigate } from "react-router-dom";

function LoginForm({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/auth/login", user)
      .then((res) => {
        console.log(res.data);
        setIsLoggedIn(true);
        navigate("/");
      })
      .catch((err) => {
        setError("err.response.data.errors");
      });
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
        <form className="mb-0 space-y-6" onSubmit={handleSubmit}>
          <div>
            <div className="mt-1">
              {error.email && (
                <p className="text-red-700">{error.email.message}</p>
              )}
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                placeholder="Email address"
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm text-gray-800 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <div className="mt-1">
              {error.password && (
                <p className="text-red-700">{error.password.message}</p>
              )}
              <input
                type="password"
                id="password"
                name="password"
                value={user.password}
                placeholder="Password"
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm text-gray-800 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-gray-800 bg-brand hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-hover"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
