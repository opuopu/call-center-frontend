import React from "react";
import "./AccordionCompo.css";
import { useGetRandomContextQuery } from "../../Redux/api/quizApi";
import { Link, useNavigate } from "react-router-dom";

function AccordionCompo() {
  const { data: randomContextData } = useGetRandomContextQuery(undefined);
  console.log(randomContextData);

  const navigate = useNavigate();

  // const handleNextQuestion = () => {
  //   navigate('/quiz-home-sentence', { state: { quizData } })
  // }

  return (
    <>
      <div>
        <Link to={`/context-qus/${randomContextData?.data?._id}`}>
          <button className="green-btn green-button-shadow py-2">
            Start Practice Session
          </button>
        </Link>
      </div>
      {/* <Accordion
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
                    {quizData?.data?.result?.map((elem, index) => {
                      return (
                        <>
                          <div className="d-flex align-self-start my-2 justify-content-center align-items-center flex-column flex-wrap">
                            <>
                              <div className="accordion-data-child">
                                <p>Context {index + 1}</p>
                                <span className="status-star d-flex justify-content-between align-items-center">
                                  <img src={Star} alt="star" />{" "}
                                  <span>{elem?.score}</span>{" "}
                                </span>
                                <div className="d-flex justify-content-center align-items-center my-4 flex-column">
                                  <ProgressBar
                                    now={80}
                                    label={`${60}%`}
                                    visuallyHidden
                                    className="w-100"
                                  />{" "}
                                  <span>{elem?.tagLine}</span>
                                </div>
                              </div>


                              <Link to={`/quiz-home-sentence/${elem?._id}`}>
                                <button className="nav-btn my-2 py-2 status-btn">Continue
                                </button>
                              </Link>

                            </>

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
      </Accordion> */}
    </>
  );
}

export default AccordionCompo;
