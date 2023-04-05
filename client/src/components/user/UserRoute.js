import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/Auth";

function User() {
  const { user, loading } = useContext(AuthContext);
  return (
    <>
      {!loading && (
        <>
          {user?.role === "admin" ||
          user?.role === "employee" ||
          user?.role === "member" ||
          user?.role === "user" ? (
            <Outlet />
          ) : (
            <Navigate to="/login" />
          )}
        </>
      )}
    </>
  );
}

export default User;
