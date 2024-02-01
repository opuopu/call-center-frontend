import React from "react";
import "./ScoreContainer.css";
import Badge1 from "../../assets/badge1.png";
import Badge2 from "../../assets/badge2.png";
import Badge3 from "../../assets/badge3.png";
import ProfilePic from "../../assets/Group 1.png";
import Star from "../../assets/Vector.png";

function ScoreContainer({ data, index }) {
  return (
    <>
      <div className="custom-box-style w-100 score-container my-2 d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-center align-items-center badge-container">
          {index <= 2 && (
            <img
              className="badge-img"
              src={index == 0 ? Badge1 : index == 1 ? Badge2 : Badge3}
              alt=""
            />
          )}
          <div className="mx-1 mx-md-3 d-flex justify-content-center align-items-center">
            <img width={60} src={ProfilePic} alt="Profile image" />
            <span className="mx-3">{data?.user_detail?.username}</span>
          </div>
        </div>
        <div className="d-flex justify-content-center star-container align-items-center">
          <img className="start-img" width={25} src={Star} alt="star" />
          <span className="mx-2">{data?.user_detail?.points}</span>
        </div>
        <span className="level mx-2">Level {data?.user_detail?.level}</span>
      </div>
    </>
  );
}

export default ScoreContainer;
