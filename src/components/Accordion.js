import React, { useState } from "react";
import "./Accordion.css";
import data from "../data";
import SingleQuestion from "./SingleQuestion";

import { ReactComponent as Box } from "../images/illustration-box-desktop.svg";

const Accordion = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <div className="accordion">
      <Box className="box" />
      <div className="mobile__box"></div>
      <div className="image">
        <div className="woman__container"></div>
        <div className="pattern"></div>
      </div>
      <div className="accordion__items">
        <h1>FAQ</h1>
        <div className="questions">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
