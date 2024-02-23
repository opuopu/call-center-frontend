import React from "react";
import "./Difficulty.css";
import Star from "../../assets/Vector.png";

function Difficulty() {
  return (
    <>
      <div className="">
        <div className="difficulty-heading text-center">
          <p className="mb-0">Listen & Repeat</p>
          <p>LEVEL 2 - Exercise 3</p>
        </div>
        <p className="difficulty-para text-center my-5">Choose your difficulty level</p>
        <div className="difficulty-star-container flex-wrap d-flex justify-content-center align-items-center">
          <div className="star-container-child ">
            {" "}
            <div>
              {" "}
              <img className="difficulty-star-img" src={Star} alt="star" /> <img className="difficulty-star-img" src={Star} alt="star" />{" "}
              <img className="difficulty-star-img" src={Star} alt="star" />{" "}
            </div>{" "}
            <button style={{backgroundColor:"#063B6D"}} className="nav-btn my-4 blue-button-shadow">EASY</button>{" "}
          </div>
          <div className="star-container-child ">
            {" "}
            <div>
              {" "}
              <img className="difficulty-star-img" src={Star} alt="star" /> <img className="difficulty-star-img" src={Star} alt="star" />{" "}
              <img className="difficulty-star-img" src={Star} alt="star" /> <img className="difficulty-star-img" src={Star} alt="star" />{" "}
              <img className="difficulty-star-img" src={Star} alt="star" />{" "}
            </div>{" "}
            <button className="nav-btn my-4 green-button-shadow">HARD</button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Difficulty;
