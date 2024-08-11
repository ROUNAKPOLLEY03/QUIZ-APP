import questions from "../questions";
import QuestionTimer from "./QuestionTimer";
import AnswerList from "./AnswerList";

export default function Question({
  questionIndex,
  handleSelectAnswer,
  userAnswer,
  handleSkipAnswer,
  answerState,
}) {
  let timer = 10000;
  if (answerState === "answered") timer = 3000;
  return (
    <div id="question">
      <QuestionTimer
        Timeout={timer}
        onTimeOut={handleSkipAnswer}
        answerState={answerState}
      />
      <h2>{questionIndex + 1}</h2>
      <h2>{questions[questionIndex].text}</h2>
      <AnswerList
        questionIndex={questionIndex}
        handleSelectAnswer={handleSelectAnswer}
        selectedAnswer={userAnswer[userAnswer.length - 1]}
        answerState={answerState}
      />
    </div>
  );
}
