import React from "react";
import "./DashboardRight.css";
import Star from "../../assets/Vector.png";
import Profile from "../../assets/Group 1.png";

function DashboardRight() {
  return (
    <>
      <div className="dashboard-right">
        <p>Team Leader Board</p>
        <div>
          <div className="team-leader-child d-right-child">
            <span className="numbering">#1</span>
            <div className="username">
              {" "}
              <img width="50" src={Profile} alt="profile" />{" "}
              <span>User 2000</span>
            </div>
            <div className="level" style={{ textAlign: "right" }}>
              <span className="px-1">LEVEL 2</span>
              <span className="ms-auto mt-2">
                <img width={13} src={Star} alt="Star" />
                <span>120</span>
              </span>
            </div>
          </div>
          <div className="team-leader-child d-right-child">
            <span className="numbering">#2</span>
            <div className="username">
              {" "}
              <img width="50" src={Profile} alt="profile" />{" "}
              <span>User 2000</span>
            </div>
            <div className="level" style={{ textAlign: "right" }}>
              <span className="px-1">LEVEL 2</span>
              <span className="ms-auto mt-2">
                <img width={13} src={Star} alt="Star" />
                <span>120</span>
              </span>
            </div>
          </div>
          <div className="team-leader-child d-right-child">
            <span className="numbering">#3</span>
            <div className="username">
              {" "}
              <img width="50" src={Profile} alt="profile" />{" "}
              <span>User 2000</span>
            </div>
            <div className="level" style={{ textAlign: "right" }}>
              <span className="px-1">LEVEL 2</span>
              <span className="ms-auto mt-2">
                <img width={13} src={Star} alt="Star" />
                <span>120</span>
              </span>
            </div>
          </div>
          <div className="team-leader-child d-right-child">
            <span className="numbering">#4</span>
            <div className="username">
              {" "}
              <img width="50" src={Profile} alt="profile" />{" "}
              <span>User 2000</span>
            </div>
            <div className="level" style={{ textAlign: "right" }}>
              <span className="px-1">LEVEL 2</span>
              <span className="ms-auto mt-2">
                <img width={13} src={Star} alt="Star" />
                <span>120</span>
              </span>
            </div>
          </div>
          <div className="team-leader-child d-right-child">
            <span className="numbering">#5</span>
            <div className="username">
              {" "}
              <img width="50" src={Profile} alt="profile" />{" "}
              <span>User 2000</span>
            </div>
            <div className="level" style={{ textAlign: "right" }}>
              <span className="px-1">LEVEL 2</span>
              <span className="ms-auto mt-2">
                <img width={13} src={Star} alt="Star" />
                <span>120</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardRight;
