import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Question from "./components/Question";
import QuizEnd from "./components/QuizEnd";
import "bootstrap/dist/css/bootstrap.min.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button1 from "../../shared_components/Button1";
import Sidebar from "../../shared_components/Sidebar";
import ShowSidebar from "../../shared_components/ShowSidebarButton";
import LogoComponent from "../../shared_components/LogoComponent";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

function App() {
  const [questions, setQuestions] = useState([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [numberOfQuestion, setnumberOfQuestion] = useState(0);
  const [correctlyAnswered, setCorrectlyAnswered] = useState(0);
  const [question, setQuestion] = useState([]);
  const [questionsAnswered, setQuestionsAnswered] = useState([]);
  const [selectedAnswer, setselectedAnswer] = useState(-1);
  const [answerSelections, setAnswerSelections] = useState([]);

  const cookies = new Cookies();
  const navigate = useNavigate();

  useEffect(() => {
    if (!cookies.get("session_token")) {
      navigate("/login");
    }
  }, []);

  useEffect((question) => {
    const dataFetch = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/quiz/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        let res = data.data;
        setQuestions(res);
        setQuestion(getQuestion(res));
      } catch (error) {
        console.error("Error:", error);
      }
    };

    dataFetch();
  }, []);

  function getQuestion(questions) {
    setnumberOfQuestion((prevNumberOfQUestion) => prevNumberOfQUestion + 1);
    let unanswered = questions.filter(
      (question) => question.answered === false
    );
    const randomIndex = Math.floor(Math.random() * unanswered.length);
    let randomQuestion = unanswered[randomIndex];
    randomQuestion.answered = true;

    return randomQuestion;
  }

  function handleNextQuestion() {
    if (selectedAnswer !== -1) {
      if (selectedAnswer === question.correctAnswerIndex) {
        setCorrectlyAnswered(
          (prevCorrectlyAnswered) => prevCorrectlyAnswered + 1
        );
      }
      setAnswerSelections((prevAnswerSelections) => [
        ...prevAnswerSelections,
        selectedAnswer,
      ]);
      setQuestionsAnswered((prevQuestionAnswered) => [
        ...prevQuestionAnswered,
        question,
      ]);
      console.log(questionsAnswered);

      let q = getQuestion(questions);
      setQuestion(q);
      setselectedAnswer(-1);
    }
  }

  function handleAnswerClick(index) {
    setselectedAnswer(index);
    const answerOptions = document.querySelectorAll(".answer-option");
    answerOptions.forEach((option, i) => {
      if (i === index) {
        option.classList.add("selected", "blink");
      } else {
        option.classList.remove("selected", "blink");
      }
    });
  }

  function handleStartQuiz() {
    setShowQuiz((prevShowQuiz) => (prevShowQuiz = !prevShowQuiz));
    setQuestionsAnswered([]);
    setnumberOfQuestion(1);
    setselectedAnswer(-1);
    setCorrectlyAnswered(0);
    setAnswerSelections([]);
    questions.map((question) => (question.answered = false));
    setQuestions(questions);
  }

  const sidebarRef = useRef(null);

  const openNav = () => {
    sidebarRef.current.style.left = "0";
  };

  const closeNav = () => {
    sidebarRef.current.style.left = "-400px";
  };

  return (
    <div className="container-quiz-wrapper">
      <Sidebar innerRef={sidebarRef} closeNav={closeNav} />
      <div id="heading-left">
        <ShowSidebar onClick={openNav} />
      </div>
      {numberOfQuestion <= 10 ? (
        showQuiz ? (
          <>
            <div className="container-quiz">
              <div className="quiz-title">KVIZ</div>

              <div className="progressBar-wrapper">
                <ProgressBar
                  now={(numberOfQuestion - 1) * 10}
                  label={`${(numberOfQuestion - 1) * 10}%`}
                  style={{ width: 1000 }}
                />
              </div>
              <div className="quiz-wrapper">
                <Question
                  showQuiz={showQuiz}
                  question={question}
                  handleNextQuestion={handleNextQuestion}
                  setselectedAnswer={setselectedAnswer}
                  numberOfQuestion={numberOfQuestion}
                  handleAnswerClick={handleAnswerClick}
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="logo-and-start-button">
              <div className="logo-component-quiz">
                <LogoComponent />
              </div>
              <div className="start-quiz-button">
                <Button1
                  onClick={handleStartQuiz}
                  fontSize={25}
                  text={"Igraj Kviz"}
                ></Button1>
              </div>
            </div>
          </>
        )
      ) : (
        <>
          <QuizEnd
            correctlyAnswered={correctlyAnswered}
            questionsAnswered={questionsAnswered}
            answerSelections={answerSelections}
            handleStartQuiz={handleStartQuiz}
          />
        </>
      )}
    </div>
  );
}

export default App;
