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
  const { data: managerLeaderboardData } = useRetrivemangerLeaderBoardQuery(
    user?._id,
    {
      skip: role !== "manager",
    }
  );
  const { data: userLeaderBoardData } = useRetriveUserLeaderboardQuery(
    undefined,
    {
      skip: role !== "user",
    }
  );

  return (
    <div className="container mt-4">
      {/* <DashboardSidebar /> */}

      {/* <div className="d-flex mb-2 align-self-end justify-content-between align-items-center leader-nav  custom-box-style">
            <NavDropDown name={"Unit 1"} />
            <NavDropDown name={"Worldwide"} />
            <NavDropDown name={"Last Week"} />
          </div> */}

      {/* <div className="justify-content-center w-100 responsive-table  d-flex align-items-start flex-column"> */}

      {managerLeaderboardData?.data?.length > 0 && (
        <ScoreContainer data={managerLeaderboardData} />
      )}
      {userLeaderBoardData?.data?.length > 0 && (
        <ScoreContainer data={userLeaderBoardData} />
      )}
    </div>
  );
}

export default Leaderboard;
