export default function QuizNotStarted({ onStartQuiz }) {
  return (
    <div>
      <header>
        <div className="centered-text">
          <p>
            QUIZONE is an innovative platform designed to help you assess and
            enhance your programming skills through engaging quizzes. Whether
            you're a beginner or an experienced coder, QUIZONE offers a variety
            of quizzes that cover a wide range of programming languages and core
            computer science concepts. By taking these quizzes, you can identify
            your strengths, pinpoint areas for improvement, and track your
            progress over time. With a user-friendly interface and detailed
            feedback on your answers, QUIZONE provides an effective and
            enjoyable way to test and improve your coding knowledge.
          </p>
        </div>
        <button className="start-button" onClick={onStartQuiz}>
          START QUIZ
        </button>
      </header>
    </div>
  );
}
