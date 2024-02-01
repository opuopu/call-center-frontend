import React from "react";
import Mic from "../../assets/Group 17.png";
import Mic2 from "../../assets/Mic2.png";
import "./MicButton.css";
import Tick from "../../assets/tick.png";

function MicButton(props) {
  return (
    <>
      {props?.micType === "gray-mic" ? (
        <button className="gray-mic-btn my-4">
          <img width="30" src={Mic2} alt="Mic" />
        </button>
      ) : (
        <>
          {props?.micType === "listen-voice" ? (
            <>
              <div className="mb-4 wave-container">
                <div></div>
                <button className="confirm-btn">
                  <img width={30} src={Tick} alt="tick" />
                </button>
              </div>

              <div className="listen-parent-one">
                <div className="listen-parent-two">
                  <button className="mic-btn my-4">
                    <img width="30" src={Mic} alt="Mic" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <button className="mic-btn green-button-shadow my-4">
                <img width="30" src={Mic} alt="Mic" />
              </button>
              <span className="press-mic">Press the Mic Button when ready</span>
            </>
          )}
        </>
      )}
    </>
  );
}

export default MicButton;
