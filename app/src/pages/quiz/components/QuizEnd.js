import React from "react";
import "./QuizEnd.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button1 from "../../../shared_components/Button1";
import Badge from "react-bootstrap/Badge";

export default function QuizEnd(props) {
  let i = -1;
  let isCorrect;
  return (
    <>
      <div className="headerQuizEnd">
        <div className="result-quiz">
          <Badge className="result-badge">{props.correctlyAnswered} / 10</Badge>
        </div>

        <h1>KRAJ KVIZA</h1>

        <Button1
          text={"Igraj ponovo"}
          fontSize={20}
          onClick={() => props.handleStartQuiz()}
        ></Button1>
      </div>
      <div className="end-quiz-wrapper">
        <div className="gridLayout">
          {props.questionsAnswered.map((qA) => (
            <span key={qA.question}>
              <Card style={{ width: 300 }}>
                <Card.Body>
                  <Card.Title>{qA.question}</Card.Title>
                  <ListGroup className="list-group-flush">
                    {
                      (isCorrect =
                        props.answerSelections[++i] === qA.correctAnswerIndex
                          ? true
                          : false)
                    }
                    {qA.answers.map((answ, index) => (
                      <ListGroup.Item
                        key={answ}
                        className="col-md-12 col-sm-8 col-24"
                      >
                        {"- " + answ}
                        {isCorrect
                          ? qA.correctAnswerIndex === index
                            ? " ✔"
                            : ""
                          : props.answerSelections[i] === index
                          ? " ❌"
                          : ""}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
