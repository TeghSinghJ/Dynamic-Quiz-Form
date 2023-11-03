import React, { useState } from 'react';
import Question1 from './components/Question1';
import Question2 from './components/Question2';
import Question3 from './components/Question3';
import './App.css';
import Navbar from './components/Navbar';
import QuestionPreview from './components/QuestionPreview';

const App = () => {
  const [questions, setQuestions] = useState([
    {
      questionType: 'question1',
      text: '',
      categories: [''],
      items: [''],
      belongsTo: '',
    },
  ]);;



  // Function to send questions to the server and save them in the database
  const saveQuestions = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(questions),
      });

      if (response.ok) {
          console.log('Questions to be saved:', questions); // Add this line to check the questions data

        // Optionally, you can handle success (redirect user, show a message, etc.)
      } else {
        console.error('Failed to save questions.');
        // Handle the error accordingly
      }
    } catch (error) {
      console.error('Error saving questions:', error);
      // Handle network or other errors
    }
  };

  const addQuestion = (q) => {
    const newQuestion = {
      questionType: q.type,
      text: q.text,
      categories: q.categories,
      items: q.items,
      belongsTo: q.belongsTo,
    };
    setQuestions([...questions, newQuestion]);
  };

  const deleteQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  const copyQuestion = (index) => {
    const copiedQuestion = { ...questions[index] };
    setQuestions([...questions, copiedQuestion]);
  };

  const handleQuestionChange = (index, updatedQuestion) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = updatedQuestion;
    setQuestions(updatedQuestions);
  };

  return (
    <>
    <Navbar onSave={saveQuestions}/>
    <div className="container mt-5">
      {questions.map((question, index) => (
        <div key={index}>
          <h3>Question {index + 1}</h3>
          <div className="item-aligns-right">
            <label className="form-label">Question Type:</label>
            <select
              className="form-select mb-3"
              value={question.questionType}
              onChange={(e) =>
                handleQuestionChange(index, {
                  ...question,
                  questionType: e.target.value,
                })
              }
            >
              <option value="question1">Type-1</option>
              <option value="question2">Type-2</option>
              <option value="question3">Type-3</option>
            </select>
          </div>

          {question.questionType === 'question1' && (
            <Question1
            
            question1={question}
              onChange={(updatedQuestion) =>
                handleQuestionChange(index, updatedQuestion)
              }
              onAddQuestion={addQuestion}
              onDeleteQuestion={() => deleteQuestion(index)}
              onCopyQuestion={() => copyQuestion(index)}
            />
          )}
          
          {question.questionType === 'question2' && (
            <Question2
            question1={question}
              onChange={(updatedQuestion) =>
                handleQuestionChange(index, updatedQuestion)
              }
              onAddQuestion={addQuestion}
              onDeleteQuestion={() => deleteQuestion(index)}
              onCopyQuestion={() => copyQuestion(index)}
            />
          )}
          {question.questionType === 'question3' && (
            <Question3
              question1={question}
              onChange={(updatedQuestion) =>
                handleQuestionChange(index, updatedQuestion)
              }
              onAddQuestion={addQuestion}
              onDeleteQuestion={() => deleteQuestion(index)}
              onCopyQuestion={() => copyQuestion(index)}
            />
          )}
        </div>
      ))}


    </div> 
    </>
  );
};

export default App;
