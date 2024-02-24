import React from "react";
import DashboardSidebar from "../Components/DashboardSidebar/DashboardSidebar";
import "./Pages.css";
import NavDropDown from "../Components/NavDropDown/NavDropDown";
import ScoreContainer from "../Components/ScoreContainer/ScoreContainer";
import { useSelector } from "react-redux";
import { useCurrentUser } from "../Redux/features/auth/authSlice.js";

import {
  useRetriveUserLeaderboardQuery,
  useRetrivemangerLeaderBoardQuery,
} from "../Redux/api/userResponseApi.js";
function Leaderboard() {
  const user = useSelector(useCurrentUser);
  const { role } = user || {};
  const { data: managerLeaderboardData, isLoading: managerLoading } =
    useRetrivemangerLeaderBoardQuery(user?._id, {
      skip: role !== "manager",
    });
  const { data: userLeaderBoardData, isLoading: userLoading } =
    useRetriveUserLeaderboardQuery(undefined, {
      skip: role !== "user",
    });
  // Combine the data from both queries into a single array
  const combinedData = [
    ...(managerLeaderboardData?.data || []),
    ...(userLeaderBoardData?.data || []),
  ];
  return (
    <div className="container mt-4">
      <ScoreContainer
        data={combinedData}
        loading={managerLoading || userLoading}
      />
    </div>
  );
}

export default Leaderboard;
