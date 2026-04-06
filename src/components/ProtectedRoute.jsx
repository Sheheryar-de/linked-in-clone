import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children }) => {
  const { user, logout } = UserAuth();

  useEffect(() => {
    if (!user) {
      logout();
    }
  }, [user, logout]);

  if (!user) {
    return <Navigate to="/signin" />;
  }
  return children;
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};
