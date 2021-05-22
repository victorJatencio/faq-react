import React, { useState } from "react";
import "./SingleQuestion.css";
import { ReactComponent as Arrow } from "../images/icon-arrow-down.svg";

const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="single__question">
      <div className="title">
        {showInfo ? (
          <h4 className="question__header" style={{ fontWeight: "bold" }}>
            {title}
          </h4>
        ) : (
          <h4 className="question__header">{title}</h4>
        )}

        <button className="arrow" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? (
            <Arrow className="arrow_top" />
          ) : (
            <Arrow className="arrow_down" />
          )}
        </button>
      </div>
      <div className="info">{showInfo && <p>{info}</p>}</div>
    </div>
  );
};

export default SingleQuestion;
