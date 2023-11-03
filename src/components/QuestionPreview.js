import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuestionPreview = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch questions from the database when the component mounts
    axios.get('http://localhost:5000/questions') // Assuming your backend endpoint is '/api/questions'
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // Empty dependency array ensures this effect runs once after the initial render

  return (
    <div>
      <h2>Question Preview</h2>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            <strong>Question:</strong> {question.text}
            <br />
            <strong>Options:</strong> {question.options.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionPreview;
