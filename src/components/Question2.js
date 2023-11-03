import React, { useState ,useEffect} from 'react';
import axios from "axios";

const Question2 = ({ question, onChange, onAddQuestion, onDeleteQuestion }) => {
  const [inputText, setInputText] = useState('');
  const [options, setOptions] = useState([]);

  useEffect(() => {
    // Fetch data from MongoDB when the component mounts
    axios.get('/api/formdata')
      .then((response) => {
        const formData = response.data[0];
        if (formData) {
          setInputText(formData.text);
          setOptions(formData.options);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleTextSelection = () => {
    const text = window.getSelection().toString().trim();
    if (text !== '') {
      const modifiedText = inputText.replace(text, '___');
      setInputText(modifiedText);
      setOptions([...options, text]);
    }
  };

  const saveToDatabase = () => {
    // Save data to MongoDB
    axios.post('/api/formdata', { text: inputText, options })
      .then((response) => {
        console.log(response.data);
        // Handle success, e.g., show a success message to the user
      })
      .catch((error) => {
        console.error(error);
        // Handle error, e.g., show an error message to the user
      });
  };


  return (
    <>
      <div className="mb-3 my-3">
        <div className="row">
          <div className="col-md-10">
            <div className="form-group">
              <label htmlFor="textInput">Sentence *:</label>
              <input
                id="textInput"
                className="form-control my-3"
                rows="5"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onMouseUp={handleTextSelection}
              ></input>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          {options.length > 0 && (
            <div className="options">
              <h5>Options:</h5>
              {options.map((option, index) => (
                <div className="option-item" key={index}>
                  <input type="checkbox" className="form-check-input me-2" />
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="col-md-2">
        <div className="row floating-bar">
          <i className="fa-solid fa-circle-plus my-3" onClick={() => onAddQuestion('question2')}></i>
          <i className="fa-solid fa-trash-can" onClick={() => onDeleteQuestion()}></i>
        </div>
      </div>
      </>
  );
};

export default Question2;
