import React from "react";
import { useAppSelector } from "../../Redux/hooks.js";
import { useCurrentUser } from "../../Redux/features/auth/authSlice.js";

const Dashboard = () => {
  const user = useAppSelector(useCurrentUser);
  return (
    <div className="d-flex justify-content-center align-items-center">
      <h1 className="">Welcome back, {user?.name}</h1>
    </div>
  );
};

export default Dashboard;
