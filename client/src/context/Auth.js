import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axiosInstance";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    axios
      .get("/auth/loggedin-user")
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setUser(null);
        setLoading(false);
        console.log(err.response.data);
      });
  }, []);

  const login = (user) => {
    axios
      .post("/auth/login", user)
      .then((res) => {
        setUser(res.data.user);
        navigate("/");
        window.location.reload();
      })
      .catch((err) => {
        setUser(null);
        setError(err.response.data.errors);
      });
  };

  const signup = (user) => {
    axios
      .post("/auth/signup", user)
      .then((res) => {
        setUser(res.data.user);
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setUser(null);
        setError(err.response.data.errors);
      });
  };

  const logout = () => {
    axios.post("/auth/logout", {}).then((res) => {
      setUser(null);
      window.location.reload();
    });
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, signup, login, logout, error, setError }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
