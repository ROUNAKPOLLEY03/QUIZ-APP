import { useState, useCallback } from "react";
import questions from "../questions";
import Question from "./Question";
import Summary from "./Summary";
import QuizNotStarted from "./QuizNotStarted";

export default function Quiz() {
  const [answerState, setAnswerState] = useState("NotStarted");
  const [userAnswer, setUserAnswer] = useState([]);

  function handleStartQuiz() {
    setAnswerState("");
  }

  function handleStartAgain() {
    setAnswerState("NotStarted");
    setUserAnswer([]);
  }

  const questionIndex =
    answerState === "" ? userAnswer.length : userAnswer.length - 1;
  // REGISTERING ANSWERS
  const handleSelectAnswer = useCallback(
    (selectedAnswer) => {
      setUserAnswer((prevanswers) => {
        return [...prevanswers, selectedAnswer];
      });
      if (selectedAnswer === null) return;
      setAnswerState("answered");

      setTimeout(() => {
        const answerIsCorrect =
          selectedAnswer === questions[questionIndex].answers[0];
        if (answerIsCorrect) setAnswerState("correct");
        else setAnswerState("wrong");
        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [questionIndex]
  );
  //console.log(answerState);

  //SKIPPING ANSWERS

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  //QUIZ OVER
  const isQuizOver = questionIndex === questions.length;
  if (isQuizOver) {
    return <Summary userAnswer={userAnswer} onStartAgain={handleStartAgain} />;
  }
  if (answerState === "NotStarted") {
    return <QuizNotStarted onStartQuiz={handleStartQuiz} />;
  }
  //SHUFFlING ANSWERS
  //console.log(questionIndex);
  return (
    <div id="quiz">
      <Question
        key={questionIndex}
        questionIndex={questionIndex}
        handleSelectAnswer={handleSelectAnswer}
        userAnswer={userAnswer}
        answerState={answerState}
        handleSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
