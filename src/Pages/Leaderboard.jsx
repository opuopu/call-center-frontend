import React from "react";
import DashboardSidebar from "../Components/DashboardSidebar/DashboardSidebar";
import "./Pages.css";
import NavDropDown from "../Components/NavDropDown/NavDropDown";
import ScoreContainer from "../Components/ScoreContainer/ScoreContainer";

function Leaderboard() {
  return (
    <>
      <div className="d-flex">
        <DashboardSidebar />
        <div className="leaderboard-container justify-content-start  d-flex align-items-start flex-column">
          <div className="d-flex mb-2 align-self-end justify-content-between align-items-center leader-nav  custom-box-style">
            <NavDropDown name={"Unit 1"} />
            <NavDropDown name={"Worldwide"} />
            <NavDropDown name={"Last Week"} />
          </div>

          {/* <div className="justify-content-center w-100 responsive-table  d-flex align-items-start flex-column"> */}
            <ScoreContainer />
            <ScoreContainer />
            <ScoreContainer />
            <ScoreContainer />
            <ScoreContainer />
            <ScoreContainer />
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default Leaderboard;
