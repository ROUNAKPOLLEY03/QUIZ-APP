import { useEffect } from "react";
import { useState } from "react";
let timerInterval;
export default function QuestionTimer({ Timeout, onTimeOut, answerState }) {
  const [TimeLeft, setTimeLeft] = useState(Timeout);

  useEffect(() => {
    const timer = setTimeout(() => {
      onTimeOut();
    }, Timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [Timeout, onTimeOut]);

  useEffect(() => {
    timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 100);
    }, 100);
    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return (
    answerState === "" && (
      <progress id="question-time" max={Timeout} value={TimeLeft} />
    )
  );
}
