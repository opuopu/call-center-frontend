import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const ButtonSkeletion = () => {
  return (
    <div>
      <div className="d-flex justify-content-center gap-3 align-items-center mt-2">
        <Skeleton height={30} width={100} ontainerClassName="flex-1" />
        <Skeleton height={30} width={100} />
      </div>
    </div>
  );
};

export default ButtonSkeletion;
