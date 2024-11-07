import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

interface ProtectedRouteProps {
  allowedRoles: {
    isAdmin?: boolean;
    isManager?: boolean;
    isEmployee?: boolean;
  };
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  allowedRoles,
  children,
}) => {
  const { user } = useAuth();

  if (!user) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }

  // Check if user matches the allowed roles
  const hasAccess =
    (allowedRoles.isAdmin && user.isAdmin) ||
    (allowedRoles.isManager && user.isManager) ||
    (allowedRoles.isEmployee && user.isEmployee);

  return hasAccess ? <>{children}</> : <Navigate to="/home" replace />;
};

export default ProtectedRoute;
