import React from "react";
import AnswerOption from "./AnswerOption";
import "./Question.css";
import Button1 from "../../../shared_components/Button1";

export default function Question(props) {
  return (
    <>
      <div className="container-question">
        <div className="quiz-question">
          <h3 level={3}>{props.question.question}</h3>
        </div>
        <div>
          <AnswerOption
            handleAnswerClick={props.handleAnswerClick}
            answers={props.question.answers}
          />
        </div>
        <hr className="line-divide" />
        <div className="confirm-button">
          <button
            className="next-question-button"
            variant="primary"
            onClick={props.handleNextQuestion}
            size="lg"
          >
            Dalje
          </button>
        </div>
      </div>
    </>
  );
}
