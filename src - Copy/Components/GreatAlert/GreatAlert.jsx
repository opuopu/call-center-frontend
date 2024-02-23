import React from "react";
import "./GreatAlert.css";
import GreatImage from "../../assets/Group 58.png";

function GreatAlert() {
  return (
    <>
      <div className="great-alert d-flex justify-content-between align-items-center">
        <img width={270} className="ps-4" src={GreatImage} alt="great" />
        {/* <button className="green-button-shadow green-btn">Continue</button> */}
      </div>
    </>
  );
}

export default GreatAlert;
