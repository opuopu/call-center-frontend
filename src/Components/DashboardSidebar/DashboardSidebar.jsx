import React from "react";
import "./DashboardSidebar.css";
import LightLogo from "../../assets/Call Center Coach Logo-F 1 (1).png";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../Redux/hooks.js";
import { useCurrentUser } from "../../Redux/features/auth/authSlice.js";
function DashboardSidebar() {
  const { role } = useAppSelector(useCurrentUser) || {};
  let Navigate = useNavigate();
  let location = useLocation();
  return (
    <>
      <div className="nav-sidebar">
        <ul className="nav-list">
          <li
            onClick={() => {
              Navigate("/");
            }}
            style={{ cursor: "pointer" }}
            className={location.pathname === "/" ? `active` : "nav-child"}
          >
            Practice
          </li>
          {role === "manager" && (
            <li
              onClick={() => {
                Navigate("/team");
              }}
              style={{ cursor: "pointer" }}
              className={
                location.pathname === "/team" || location?.pathname === "/team"
                  ? `active`
                  : "nav-child"
              }
            >
              Team Management
            </li>
          )}
          <li
            onClick={() => {
              Navigate("/leaderboard");
            }}
            style={{ cursor: "pointer" }}
            className={
              location.pathname === "/leaderboard" ? `active` : "nav-child"
            }
          >
            Leaderboard
          </li>
          <li
            onClick={() => {
              Navigate("/my-profile");
            }}
            style={{ cursor: "pointer" }}
            className={
              location.pathname === "/my-profile" ? `active` : "nav-child"
            }
          >
            My Profile
          </li>
        </ul>

        <img src={LightLogo} alt="light-logo" />
      </div>
    </>
  );
}

export default DashboardSidebar;
