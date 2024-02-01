import React from "react";
import ProgressBar from "../ProgressBar/ProgressBarCompo";
import { Container } from "react-bootstrap";
import "./AnsQuesCompo.css"

function AnsQuesCompo(props) {
  return (
    <>
      <ProgressBar />

      <Container className="d-flex justify-content-start align-items-center flex-column mic-parent flex-wrap">
        <p
          style={{ fontWeight: "400", fontSize: "22px" }}
          className="w-auto mx-1"
        >
          Complete Sentence
        </p>

        <div style={{ height: "15vh" }}>
          <div className="complete-sentence my-2">
            <p style={{ width: "fit-content" }} className="m-0">
              Hello, shipment will reach you in 2 days
            </p>
          </div>
        </div>

        <div className="complete-btn-container">
          <button className="wrong-btn">fiscal</button>
          <button className={`${props?.button === "success" ? "green-btn green-button-shadow answer-correct-box" : "success-outline"} `}>
            business
          </button>
          <button className="gray-shadow-btn my-2">great</button>
        </div>

        {/* <div style={{height:"25vh", width:"40%", minWidth:"250px"}} className="d-flex justify-content-between align-items-center">
          <button className="blue-btn blue-button-shadow">Pause</button>
          <button className="green-btn green-button-shadow">Check</button>
      </div> */}
      </Container>
    </>
  );
}

export default AnsQuesCompo;
