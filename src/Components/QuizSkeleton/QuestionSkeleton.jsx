import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const QuestionSkeleton = () => {
  return (
    <div className="container w-50 mx-auto">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="mt-5">
          <Skeleton height={30} width={700} count={4} className="mt-2" />
        </div>
      </div>
    </div>
  );
};

export default QuestionSkeleton;
