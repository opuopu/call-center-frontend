import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./AccordionCompo.css";
import { accordionData, levelData } from "./AccordionData";
import Star from "../../assets/Vector.png";
import ProgressBar from "react-bootstrap/ProgressBar";

function AccordionCompo() {
  return (
    <>
      <Accordion
        className="accordion-container"
        style={{ width: "100%" }}
        flush
      >
        {accordionData?.map((elem, index) => {
          return (
            <>
              <Accordion.Item
                className="accordion-item-custom"
                eventKey={`${index}`}
              >
                <Accordion.Header>
                  <div className="parent-heading d-flex justify-content-between align-items-center">
                    <div className="accordion-heading-left">
                      <p>{elem.name}</p>
                      <p>{elem.level}</p>
                    </div>
                    <div className="accordion-heading-right">
                      <img src={Star} alt="star" />
                      <span>{elem.stars}</span>
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="d-flex justify-content-center justify-content-md-between flex-wrap accordion-data md:my-2 align-items-center">
                    {levelData?.map((elem) => {
                      return (
                        <>
                          <div className="d-flex align-self-start my-2 justify-content-center align-items-center flex-column flex-wrap">
                            {elem?.status === "unlock" ? (
                              <>
                                <div className="accordion-data-child">
                                  <p>{elem.level}</p>
                                  <span className="status-star d-flex justify-content-between align-items-center">
                                    <img src={Star} alt="star" />{" "}
                                    <span>{elem.stars}</span>{" "}
                                  </span>
                                  <div className="d-flex justify-content-center align-items-center my-4 flex-column">
                                    <ProgressBar
                                      now={80}
                                      label={`${80}%`}
                                      visuallyHidden
                                      className="w-100"
                                    />{" "}
                                    <span>{elem?.tagLine}</span>
                                  </div>
                                </div>

                                <button className="nav-btn my-2 py-2 status-btn">
                                  {elem?.btnText}
                                </button>
                              </>
                            ) : (
                              <>
                                <div
                                  className="accordion-data-child accordion-data-child-2 align-self-start"
                                  style={{
                                    backgroundColor: "#ECECEC",
                                    color: "black",
                                  }}
                                >
                                  <p>{elem.level}</p>
                                  <div className="unlock-accordion-child">
                                    <img src={Star} alt="star" />{" "}
                                    <span>{elem?.tagLine}</span>
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                        </>
                      );
                    })}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </>
          );
        })}
      </Accordion>
    </>
  );
}

export default AccordionCompo;
