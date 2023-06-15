import React from "react";
import "./Question.css";

export default function AnswerOption(props) {
  let answers = props.answers;

  return (
    <div>
      {answers.map((answer, index) => (
        <li
          className="answer-option"
          key={answer}
          onClick={() => props.handleAnswerClick(index)}
        >
          {answer}
        </li>
      ))}
    </div>
  );
}
