import React, { useEffect } from "react";
import DashboardSidebar from "../Components/DashboardSidebar/DashboardSidebar";
import DashboardCenter from "../Components/DashboardCenter/DashboardCenter";
import DashboardRight from "../Components/DashboardRight/DashboardRight";
import "./Pages.css";
import { useDispatch } from "react-redux";
// import { getExercise } from "../Redux/uReducer";

function DashboardHome() {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getExercise());
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between dashboard-home">
        <DashboardSidebar />
        <DashboardCenter />
        {/* <DashboardRight /> */}
      </div>
    </>
  );
}

export default DashboardHome;
