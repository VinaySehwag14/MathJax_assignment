import React, { useState, useEffect } from "react";
import { MathJax } from "better-react-mathjax";
import "./QuestionDisplay.css";

function QuestionDisplay({ questionId }) {
  const [question, setQuestion] = useState("");

  useEffect(() => {
    async function fetchQuestion() {
      const response = await fetch(
        `https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${questionId}`
      );
      const data = await response.json();
      console.log(data);
      setQuestion(data[0].Question);
    }

    fetchQuestion();
  }, [questionId]);

  return (
    <div className="question-display-container">
      <h2>Question: {questionId}</h2>
      <div className="question-content">
        <MathJax>{question}</MathJax>
      </div>
    </div>
  );
}

export default QuestionDisplay;
