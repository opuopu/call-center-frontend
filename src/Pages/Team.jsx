import React, { useEffect, useState } from "react";
import DashboardSidebar from "../Components/DashboardSidebar/DashboardSidebar";
import "./Pages.css";
import NavDropDown from "../Components/NavDropDown/NavDropDown";
import ScoreContainer from "../Components/ScoreContainer/ScoreContainer";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { BASE_URL, SERVERURL } from "../ServerUrl";
import axios from "axios";
function Team() {
  const Navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${BASE_URL}/api/v1/team/`,
      headers: {
        Authorization: `TOKEN ${sessionStorage?.getItem("clientToken")}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        setUsers(response?.data?.results);
        console.log(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // fetch("http://54.206.117.218/api/v1/team/", {
    //   withCredentials: true,
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Headers": "*",
    //     "Access-Control-Allow-Credentials": "true",
    //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    //     Authorization: `TOKEN ${sessionStorage.getItem("clientToken")}`,
    //   },
    // })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => console.error(error));

    // try {
    //   const response = await SERVERURL.get("api/v1/team/", {
    //     withCredentials: true,
    //     headers: {
    //       Accept: "*/*",
    //       "Accept-Encoding": "gzip, deflate, br",
    //       Connection: "keep-alive",
    //       "Access-Control-Allow-Origin": "http://localhost:3000",
    //       "Content-Type": "application/x-www-form-urlencode",
    //       Authorization: `TOKEN ${sessionStorage.getItem("clientToken")}`,
    //     },
    //   });
    //   if (response) {
    //     console.log(response, "response");
    //   }
    // } catch (err) {
    //   console.log(err, "Error");
    // }
  }, []);

  return (
    <>
      <div className="d-flex">
        <DashboardSidebar />
        <div className="leaderboard-container justify-content-start  d-flex align-items-start flex-column">
          <div
            style={{ borderRadius: "18px" }}
            className="d-flex mb-2 align-self-end justify-content-between align-items-center leader-nav1  custom-box-style"
          >
            <span onClick={() => Navigate("/register")} className="team-span">
              Add User
            </span>
            <span className="team-span">Remove User</span>
          </div>

          {/* <div className="justify-content-center w-100 responsive-table  d-flex align-items-start flex-column"> */}
          {users?.map((data, index) => {
            return <ScoreContainer data={data} index={index} />;
          })}

          {/* <ScoreContainer />
          <ScoreContainer />
          <ScoreContainer />
          <ScoreContainer />
          <ScoreContainer /> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default Team;
