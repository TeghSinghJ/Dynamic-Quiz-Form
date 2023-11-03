import React, { useState } from 'react';

const Question3 = ({ question, onChange, onAddQuestion, onDeleteQuestion }) => {
    const [options, setOptions] = useState(question.options || [{ text: '', correct: false }]);
    
  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index].text = value;
    setOptions(updatedOptions);
    onChange({ ...question, options: updatedOptions });
  };

  const handleOptionCorrectnessChange = (index) => {
    const updatedOptions = [...options];
    updatedOptions[index].correct = !updatedOptions[index].correct;
    setOptions(updatedOptions);
    onChange({ ...question, options: updatedOptions });
  };

  const handleAddOption = () => {
    setOptions([...options, { text: '', correct: false }]);
  };

  const handleDeleteOption = (index) => {
    const updatedOptions = options.filter((_, i) => i !== index);
    setOptions(updatedOptions);
    onChange({ ...question, options: updatedOptions });
  };

  return (
    <div className="question-container">
      {/* <h3>Question 3</h3> */}
      <div className="md-6">
        <label htmlFor="questionInput" className="form-label">Question:</label>
        <input
          type="text"
          className="form-control"
          id="questionInput"
          value={question.text}
          onChange={(e) => onChange({ ...question, text: e.target.value })}
        />
      </div>
      <label className="form-label">Options:</label>
      {options.map((option, index) => (
        <div className="input-group mb-2" key={index}>
          <div className="input-group-text">
            <input
              type="radio"
              className="form-check-input"
              checked={option.correct}
              onChange={() => handleOptionCorrectnessChange(index)}
            />
          </div>
          <input
            type="text"
            className="form-control"
            value={option.text}
            onChange={(e) => handleOptionChange(index, e.target.value)}
            required
          />
          <button type="button" className="btn btn-danger" onClick={() => handleDeleteOption(index)}>
            <i className="fa-regular fa-square-minus"></i>
          </button>
        </div>
      ))}
      <button type="button" className="btn btn-primary" onClick={handleAddOption}>
        <i className="fa-solid fa-plus"></i>
      </button>
      <div className="col-md-2">
        <div className="row floating-bar">
          <i className="fa-solid fa-circle-plus my-3" onClick={() => onAddQuestion('question2')}></i>
          <i className="fa-solid fa-trash-can" onClick={() => onDeleteQuestion()}></i>
        </div>
      </div>
    </div>
  );
};

export default Question3;
