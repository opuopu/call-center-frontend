import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const QuizSkeleton = () => {
  return (
    <div className="container w-50 mx-auto">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Skeleton width={800} />
        {/* <Skeleton circle height={30} width={30} /> */}

        <div className="mt-2">
          <Skeleton height={30} width={600} />
          <Skeleton height={30} width={600} className="mt-2" />
        </div>

        <div className="mt-5">
          <Skeleton height={30} width={700} count={4} className="mt-2" />
        </div>
        <div className="d-flex justify-content-center gap-3 align-items-center mt-2">
          <Skeleton height={30} width={100} ontainerClassName="flex-1" />
          <Skeleton height={30} width={100} />
        </div>
      </div>
    </div>
  );
};

export default QuizSkeleton;
