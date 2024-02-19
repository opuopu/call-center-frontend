import React from "react";
import { useAppSelector } from "../Redux/hooks.js";
import {
  useCurrentToken,
  useCurrentUser,
} from "../Redux/features/auth/authSlice.js";
import { Navigate, useLocation } from "react-router-dom";
const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const token = useAppSelector(useCurrentToken);
  const user = useAppSelector(useCurrentUser);

  if (token && user) {
    return children;
  }
  return (
    <Navigate to="/user-login" state={{ from: location }} replace></Navigate>
  );
};

export default PrivateRoutes;
