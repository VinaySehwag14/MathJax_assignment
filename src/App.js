import { useState } from "react";
import QuestionDisplay from "./questionDisplay/QuestionDisplay";
import "./App.css";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const questionIds = [
    "AreaUnderTheCurve_901",
    "BinomialTheorem_901",
    "DifferentialCalculus2_901",
  ];
  const currentQuestionId = questionIds[currentQuestionIndex];

  function handleNextQuestion() {
    setCurrentQuestionIndex((index) => (index + 1) % questionIds.length);
  }

  function handlePrevQuestion() {
    setCurrentQuestionIndex(
      (index) => (index - 1 + questionIds.length) % questionIds.length
    );
  }

  return (
    <div>
      <QuestionDisplay questionId={currentQuestionId} />
      <div className="button-container">
        <button className="button-prev" onClick={handlePrevQuestion}>
          Previous
        </button>
        <button className="button-next" onClick={handleNextQuestion}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
