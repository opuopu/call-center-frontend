import React from "react";
import "./ScoreContainer.css";
import Badge1 from "../../assets/badge1.png";
import Badge2 from "../../assets/badge2.png";
import Badge3 from "../../assets/badge3.png";
import ProfilePic from "../../assets/Group 1.png";
import Star from "../../assets/Vector.png";
import ImageGenerator from "../../utils/Image.jsx";

function ScoreContainer({ data, index }) {
  console.log(data);
  return (
    <>
      <div className="custom-box-style w-100 score-container my-2 d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-center align-items-center badge-container">
          <div className="mx-1 mx-md-3 d-flex justify-content-center align-items-center">
            <img
              style={{
                width: "60px",
                height: "60px",
                objectFit: "contain",
                border: "1px solid #54C999 ",
                borderRadius: "50%",
              }}
              src={
                data?.userDetails?.image
                  ? ImageGenerator(data?.userDetails?.image)
                  : ProfilePic
              }
              alt="Profile image"
            />
            <span className="mx-3">{data?.userDetails?.name}</span>
          </div>
        </div>
        <div className="d-flex justify-content-center star-container align-items-center">
          <img className="start-img" width={25} src={Star} alt="star" />
          <span className="mx-2">{data?.totalScore}</span>
        </div>
        <span className="level mx-2">Rank #{data?.rank}</span>
      </div>
    </>
  );
}

export default ScoreContainer;
