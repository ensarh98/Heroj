import React from "react";
import "./QuizEnd.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function QuizEnd(props) {
  let i = -1;
  let isCorrect;
  return (
    <div className="end-quiz-wrapper">
      <div className="headerQuizEnd">
        <h1>KRAJ KVIZA</h1>

        <button
          variant="primary"
          size="lg"
          onClick={() => props.handleStartQuiz()}
        >
          Igraj ponovo
        </button>
      </div>

      <div className="gridLayout">
        {props.questionsAnswered.map((qA) => (
          <span key={qA.question}>
            <Card style={{ width: 270 }}>
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
                      {answ}
                      {isCorrect ? (
                        qA.correctAnswerIndex === index ? (
                          " ✔"
                        ) : (
                          <span>-</span>
                        )
                      ) : props.answerSelections[i] === index ? (
                        " ❌"
                      ) : (
                        <span>-</span>
                      )}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </span>
        ))}
      </div>
    </div>
  );
}
