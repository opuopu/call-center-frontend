import React from "react";

import "./Pages.css";

import ScoreContainer from "../Components/ScoreContainer/ScoreContainer";
import { useGetLeaderboardDataQuery } from "../Redux/api/leaderboardApi.js";

function Leaderboard() {
  const { data: leaderboardData, isLoading } = useGetLeaderboardDataQuery();

  return (
    <div className="container mt-4">
      <ScoreContainer data={leaderboardData?.data} loading={isLoading} />
    </div>
  );
}

export default Leaderboard;
