import React, { useEffect } from "react";
import { useAppSelector } from "../Redux/hooks.js";
import {
  useCurrentToken,
  useCurrentUser,
} from "../Redux/features/auth/authSlice.js";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
const PrivateRoutes = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = useAppSelector(useCurrentToken);
  const user = useAppSelector(useCurrentUser);

  useEffect(() => {
    if (user?.needPasswordChange) {
      navigate("/change-password");
    }
  }, [user?.needPasswordChange, navigate]);
  if (token && user) {
    return children;
  }

  return (
    <Navigate to="/user-login" state={{ from: location }} replace></Navigate>
  );
};

export default PrivateRoutes;
