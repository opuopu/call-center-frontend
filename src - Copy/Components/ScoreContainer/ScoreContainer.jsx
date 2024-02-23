import React from "react";
import "./ScoreContainer.css";
import ProfilePic from "../../assets/Group 1.png";
import Star from "../../assets/Vector.png";
import ImageGenerator from "../../utils/Image.jsx";
import Table from "../Table/Table.jsx";
import badge1 from "../../assets/badge1.png";
import badge2 from "../../assets/badge2.png";
import badge3 from "../../assets/badge3.png";
function ScoreContainer({ data }) {
  const column = [
    {
      title: "Image",
      key: "image",
      dataIndex: "image",
    },
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Score",
      key: "score",
      dataIndex: "score",
    },
    {
      title: "Rank",
      key: "rank",
      dataIndex: "rank",
    },
  ];
  const formatedData = data?.data?.map((data, index) => {
    return {
      image: (
        <img
          src={ImageGenerator(data?.userDetails?.image)}
          alt=""
          style={{
            height: "40px",
            width: "40px",
            border: "1px solid #54C999",
            padding: "3px",
            borderRadius: "50%",
          }}
        />
      ),

      name: (
        <p
          style={{
            fontWeight: "600",
            fontSize: "16px",
          }}
        >
          {data?.userDetails?.name}
        </p>
      ),
      score: (
        <div className="d-flex gap-2">
          <span>
            <img src={Star} alt="" />
          </span>
          <p
            style={{
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            {data?.score}
          </p>
        </div>
      ),
      rank: (
        <div
          style={{
            fontWeight: "600",
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {index < 3 ? (
            <img
              src={
                (index === 0 && badge1) ||
                (index === 1 && badge2) ||
                (index === 2 && badge3)
              }
              alt=""
            />
          ) : (
            <p
              style={{
                color: "#54C999",
                fontWeight: "800",
                fontSize: "24px",
              }}
            >
              #{index + 1}
            </p>
          )}
        </div>
      ),
    };
  });
  return (
    <>
      <div className="container">
        <Table column={column} data={formatedData} />
      </div>
    </>
  );
}

export default ScoreContainer;
