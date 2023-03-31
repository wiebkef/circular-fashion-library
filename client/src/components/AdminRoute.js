import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/Auth";

function Admin() {
  const { user, loading } = useContext(AuthContext);
  return <>{!loading && <>{user?.role === "admin" || user?.role === "employee" ? <Outlet /> : <Navigate to="/login" />}</>}</>;
}

export default Admin;
