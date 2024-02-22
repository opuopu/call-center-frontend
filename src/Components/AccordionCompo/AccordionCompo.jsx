import React from "react";
import "./AccordionCompo.css";
import { useGetRandomContextQuery } from "../../Redux/api/quizApi";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../Redux/hooks.js";
import { useCurrentUser } from "../../Redux/features/auth/authSlice.js";

function AccordionCompo() {
  const { role } = useAppSelector(useCurrentUser) || {};
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <Link to={`/${role}/context-qus`}>
          <button className="green-btn green-button-shadow py-2">
            Start Practice Session
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AccordionCompo;
