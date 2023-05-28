import React from "react";
import "./QuizEnd.css";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function QuizEnd(props) {
  let i = -1;
  let isCorrect;
  return (
    <Col className="columnClass">
      <div className="headerQuizEnd">
        <h1>KRAJ KVIZA</h1>

        <Button
          variant="primary"
          size="lg"
          onClick={() => props.handleStartQuiz()}
        >
          Igraj ponovo
        </Button>
      </div>

      <Row className="gridLayout">
        {props.questionsAnswered.map((qA) => (
          <Col xs={24} sm={6} md={3} key={qA.question}>
            <Card border="warning" style={{ width: 300 }}>
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
                      {isCorrect ? (
                        qA.correctAnswerIndex === index ? (
                          "s"
                        ) : (
                          <span>BsDash </span>
                        )
                      ) : props.answerSelections[i] === index ? (
                        "s"
                      ) : (
                        <span>BsDash </span>
                      )}
                      {answ}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );
}
