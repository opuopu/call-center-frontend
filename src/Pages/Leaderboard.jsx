import React from "react";
import DashboardSidebar from "../Components/DashboardSidebar/DashboardSidebar";
import "./Pages.css";
import NavDropDown from "../Components/NavDropDown/NavDropDown";
import ScoreContainer from "../Components/ScoreContainer/ScoreContainer";
import { useSelector } from "react-redux";
import { useCurrentUser } from "../Redux/features/auth/authSlice.js";
import {
  useGetAllLeaderBoardDataQuery,
  useManagerLeaderboardQuery,
} from "../Redux/api/quizApi.js";
function Leaderboard() {
  const user = useSelector(useCurrentUser);
  const { role } = user || {};
  console.log(role);
  const { data: managerLeaderboard } = useManagerLeaderboardQuery(user?._id, {
    skip: role !== "manager",
  });
  const { data: userLeaderBoardData } = useGetAllLeaderBoardDataQuery(
    undefined,
    {
      skip: role !== "user",
    }
  );
  console.log(userLeaderBoardData);
  return (
    <>
      <div className="d-flex">
        <DashboardSidebar />
        <div className="leaderboard-container justify-content-start  d-flex align-items-start flex-column">
          {/* <div className="d-flex mb-2 align-self-end justify-content-between align-items-center leader-nav  custom-box-style">
            <NavDropDown name={"Unit 1"} />
            <NavDropDown name={"Worldwide"} />
            <NavDropDown name={"Last Week"} />
          </div> */}

          {/* <div className="justify-content-center w-100 responsive-table  d-flex align-items-start flex-column"> */}

          {managerLeaderboard?.data?.length > 0 &&
            managerLeaderboard?.data?.map((data, index) => (
              <ScoreContainer data={data} key={index} />
            ))}
          {/* get all user leaderboard data */}
          {userLeaderBoardData?.data?.length > 0 &&
            userLeaderBoardData?.data?.map((data, index) => (
              <ScoreContainer data={data} key={index} />
            ))}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default Leaderboard;
