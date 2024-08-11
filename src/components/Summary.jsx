import questions from "../questions";
import quizoverimage from "../assets/quiz-complete.png";
export default function Summary({ userAnswer, onStartAgain }) {
  let skip = 0,
    correct = 0,
    wrong = 0;
  userAnswer.map((answer, index) => {
    let correctAnswer = questions[index].answers[0];
    if (answer === null) skip++;
    else if (answer === correctAnswer) correct++;
    else wrong++;
  });
  const tolQuestions = questions.length;
  skip = (skip / tolQuestions) * 100;
  correct = (correct / tolQuestions) * 100;
  wrong = (wrong / tolQuestions) * 100;
  console.log(correct, skip, wrong);
  return (
    <div id="summary">
      <img src={quizoverimage} alt="Quiz is over!" />
      <h2>QUIZ COMPLETED</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skip}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number correct">{correct}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number wrong">{wrong}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswer.map((answer, index) => {
          let correctAnswer = questions[index].answers[0];
          let answerStatus;
          if (answer === correctAnswer) answerStatus = "correct";
          else if (answer === null) {
            answerStatus = "skipped";
            answer = "skipped";
          } else answerStatus = "wrong";
          let className = "user-answer ";
          className += answerStatus;
          return (
            <li id="answer" key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{questions[index].text}</p>
              <p className={className}>{answer}</p>
            </li>
          );
        })}
      </ol>
      <button className="start-button" onClick={onStartAgain}>
        START AGAIN
      </button>
    </div>
  );
}
