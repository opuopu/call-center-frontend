import React from "react";
import "./DashboardCenter.css";
import AccordionCompo from "../AccordionCompo/AccordionCompo";

function DashboardCenter() {
  return (
    <>
      <div className="dashboard-center p-4 d-flex justif-content-center align-items-start">
        <AccordionCompo />
      </div>
    </>
  );
}

export default DashboardCenter;
