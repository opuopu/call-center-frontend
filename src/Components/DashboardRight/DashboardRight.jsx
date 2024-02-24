import React from "react";
import "./DashboardRight.css";
import Star from "../../assets/Vector.png";
import Profile from "../../assets/Group 1.png";

import { useSelector } from "react-redux";
import { useCurrentUser } from "../../Redux/features/auth/authSlice";
import { useManagerLeaderboardQuery } from "../../Redux/api/quizApi.js";

function DashboardRight() {
  const user = useSelector(useCurrentUser);
  console.log(user);
  const { data: managerLeaderboard, isLoading } = useManagerLeaderboardQuery(
    user?._id
  );

  console.log(managerLeaderboard);

  return (
    <>
      <div className="dashboard-right">
        <p>Team Leader Board</p>
        <div>
          {managerLeaderboard?.data?.map((mld, index) => (
            <div key={index} className="team-leader-child d-right-child">
              <span className="numbering">#{mld.rank}</span>
              <div className="username">
                {" "}
                <img width="50" src={Profile} alt="profile" />{" "}
                <span>{`${mld?.userDetails?.name}`}</span>
              </div>
              <div className="level" style={{ textAlign: "right" }}>
                {/* <span className="px-1">{`LEVEL ${mld?.totalScore}`}</span> */}
                <span className="px-1">{`Score :~ ${mld?.totalScore}`}</span>
                <span className="ms-auto mt-2">
                  <img width={13} src={Star} alt="Star" />
                  <span>{mld.score}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DashboardRight;
