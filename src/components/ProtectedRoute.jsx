import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children }) => {
  const { user, logout } = UserAuth();

  useEffect(() => {
    // Log out the user if they're not authenticated
    if (!user) {
      logout(); // Call the logout function
    }
  }, [user, logout]);

  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};
