import React from "react";
import "./AccordionCompo.css";
import { useGetRandomContextQuery } from "../../Redux/api/quizApi";
import { Link, useNavigate } from "react-router-dom";

function AccordionCompo() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <Link to={`/context-qus`}>
          <button className="green-btn green-button-shadow py-2">
            Start Practice Session
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AccordionCompo;
