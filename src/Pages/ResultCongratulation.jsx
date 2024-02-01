import React from "react";
import Star from "../assets/Vector.png";

function ResultCongratulation() {
  return (
    <>
      <div
        style={{ height: "auto",minHeight:"90vh" }}
        className="d-flex justify-content-center align-items-center difficulty-container"
      >
        <div style={{ width: "60%" }} className="">
          <div className="difficulty-heading text-center my-5">
            <p className="mb-0" style={{ fontWeight: "bold" }}>
              Listen & Repeat
            </p>
            <p>LEVEL 2 - Exercise 3</p>
          </div>
          <div style={{display:"flex",justifyContent:"center",width:"100%"}}>
            <div style={{width:"100%",padding:"20px"}} className=" star-container-child star-congratulation">
              <p className="congratulations">Congratulations!</p>
              <p className="success-text">Exercise passed</p>
              <div className="d-flex justify-content-center align-items-center">
                <img width={35} className="mx-2" src={Star} alt="Star" />{" "}
                <span className="blue-text">
                  {" "}
                  <span>85</span> /100
                </span>
              </div>
              <div className="congratulation-btn-container d-flex justify-content-around align-items-center w-100 my-2 flex-wrap">
                <button className="green-btn green-button-shadow">
                  Review Answers
                </button>
                <button className="blue-btn blue-button-shadow">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResultCongratulation;
