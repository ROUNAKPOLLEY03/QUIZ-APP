import questions from "../questions";
import { useRef } from "react";

export default function AnswerList({
  questionIndex,
  handleSelectAnswer,
  selectedAnswer,
  answerState,
}) {
  const shuffledAnswers = useRef();
  console.log(shuffledAnswers.current);
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...questions[questionIndex].answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        let cssClass = "";
        const isSelectedThisOption = selectedAnswer === answer;
        //Deriving correct answer to highlight if given wrong answer
        const correctAnswer = questions[questionIndex].answers[0];

        if (answerState === "answered" && isSelectedThisOption)
          cssClass = "selected";

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelectedThisOption
        )
          cssClass = answerState;
        if (answerState === "wrong" && answer === correctAnswer)
          cssClass = "correct";
        return (
          <li key={answer} className="answer">
            <button
              onClick={() => handleSelectAnswer(answer)}
              className={cssClass}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
