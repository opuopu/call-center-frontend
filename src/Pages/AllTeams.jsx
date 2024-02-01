import React from "react";
import DashboardSidebar from "../Components/DashboardSidebar/DashboardSidebar";
import "./Pages.css";
import ScoreContainer from "../Components/ScoreContainer/ScoreContainer";
import AllTeamsdata from "../Components/ScoreContainer/AllTeamsdata";
import CreateTeam from "../Components/CreateTeam/CreateTeam";

function AllTeams() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <CreateTeam show={modalShow} onHide={() => setModalShow(false)} />

      <div className="d-flex">
        <DashboardSidebar />
        <div className="leaderboard-container justify-content-start  d-flex align-items-start flex-column">
          <div
            style={{ borderRadius: "18px" }}
            className="d-flex mb-2 align-self-end justify-content-between align-items-center leader-nav1  custom-box-style"
          >
            <span className="team-span">All Teams</span>
            <span
              variant="primary"
              onClick={() => setModalShow(true)}
              className="team-span"
            >
              Create Team
            </span>
            {/* <span className="team-span">Remove User</span> */}
          </div>

          {/* <div className="justify-content-center w-100 responsive-table  d-flex align-items-start flex-column"> */}
          <AllTeamsdata />
          <AllTeamsdata />
          <AllTeamsdata />
          <AllTeamsdata />
          <AllTeamsdata />
          <AllTeamsdata />
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default AllTeams;
