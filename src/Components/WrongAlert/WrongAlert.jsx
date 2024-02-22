import React from "react";
import GreatImage from "../../assets/Group 24.png";
import "./WrongAlert.css";

function WrongAlert({ title }) {
  return (
    <>
      <div className="wrong-alert d-flex justify-content-around align-items-center">
        <div className="d-flex jusitfy-content-center align-items-start">
          <img
            width={65}
            className="ps-4 mx-2 wrong-image"
            src={GreatImage}
            alt="great"
          />
          <div className="wrong-text" style={{ color: "white" }}>
            <p className="wrong-text-1" style={{ lineHeight: "12px" }}>
              Wrong
            </p>
            <p className="wrong-text-2" style={{ lineHeight: "20px" }}>
              Correct Solution: {title}
            </p>
          </div>
        </div>
        {/* <button className="green-button-shadow green-btn">Continue</button> */}
      </div>
    </>
  );
}

export default WrongAlert;
