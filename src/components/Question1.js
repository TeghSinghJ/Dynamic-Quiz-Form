import React, { useState, useEffect } from 'react';

const Question1 = ({ question1, onChange, onAddQuestion, onDeleteQuestion }) => {
  const [question, setQuestion] = useState({
    text: question1.text || '',
    categories: question1.categories || [''],
    items: question1.items || [{ name: '', belongsTo: '' }],
    options: question1.options || [],
  });
  
  useEffect(() => {
    setQuestion({
      questionType: 'question1',
      text: question.text,
      categories: question.categories,
      items: question.items,
      options: question.options,
    });
  }, [question1]);
  const handleCategoryChange = (index, value) => {
    const updatedCategories = [...question.categories];
    updatedCategories[index] = value;
    setQuestion({ ...question, categories: updatedCategories });
  };
  const handleTextChange = (value) => {
    setQuestion({ ...question, text: value });
  };

  const handleImageUpload = (event) => {
    // Handle image upload logic here
    // You can access the uploaded image file using event.target.files[0]
    // Perform necessary operations like uploading to server or displaying preview, etc.
  };

  const handleItemChange = (index, name, value) => {
    const updatedItems = [...question.items];
    updatedItems[index] = { ...updatedItems[index], [name]: value };
    setQuestion({ ...question, items: updatedItems });
  };

  const addCategory = () => {
    const updatedCategories = [...question.categories, ''];
    setQuestion({ ...question, categories: updatedCategories });
  };

  const addItem = () => {
    const updatedItems = [...question.items, { name: '', belongsTo: '' }];
    setQuestion({ ...question, items: updatedItems });
  };
  const removeItem = (index) => {
    const updatedItems = [...question.items];
    updatedItems.splice(index, 1);
    setQuestion({ ...question, items: updatedItems });
  };

  const handleOptionTextChange = (index, value) => {
    const updatedOptions = [...question.options];
    updatedOptions[index] = { text: value, checked: updatedOptions[index]?.checked || false };
    setQuestion({ ...question, options: updatedOptions });
  };

  return (
    <>
      {/* ...question text input */}
         {/* ...question text input */}
         <div className="mb-3">
        <label className="form-label">Question Text:</label>
        <input
          type="text"
          className="form-control"
          value={question.text}
          onChange={(e) => handleTextChange(e.target.value)}
        />
      </div>

      {/* Image Upload */}
      {/* <div className="">
        <button type="file" className="form-control" onChange={(e) => handleImageUpload(e)} ><i class="fa-regular fa-image"></i></button>
      </div> */}


      {/* Categories */}
      <div className="mb-3 my-3">
        <label className="form-label my-3">Categories:</label>
        {question.categories.map((category, index) => (
          <div className="input-group col-md-4" key={index}>
            <input
              type="text"
              className="form-control"
              value={category}
              placeholder='Add Category'
              onChange={(e) => handleCategoryChange(index, e.target.value)}
            />
            <button className="btn btn-secondary" onClick={addCategory}>
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        ))}
      </div>
       

       {/* Items and Belongs to */}
       <div className="mb-3">
        <label className="form-label">Items:</label>
        {question.items.map((item, index) => (
          <div className="input-group" key={item.id}>
            <input
              type="text"
              className="form-control"
              value={item.name}
              placeholder='Add Item'
              onChange={(e) => handleItemChange(index, 'name', e.target.value)}
            />
            <select
              className="form-select"
              value={item.belongsTo}
              onChange={(e) => handleItemChange(index, 'belongsTo', e.target.value)}
            >
              <option value="">Select</option>
              {question.categories.map((category, idx) => (
                <option key={idx} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <button className="btn btn-secondary" onClick={() => removeItem(index)}>
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
        ))}
        <button className="btn btn-secondary mt-2" onClick={addItem}>
          <i className="fa-solid fa-plus"></i> Add Item
        </button>
      </div>



      {/* Options */}
      <div className="mb-3">
        <label className="form-label">Options:</label>
        {question.options.map((option, index) => (
          <div className="input-group" key={index}>
            {/* ...option inputs */}
          </div>
        ))}
      </div>

      {/* Floating buttons */}
      <div className="floating-buttons">

      <div className="col-md-2">
        <div className="row floating-bar">
          <i className="fa-solid fa-circle-plus my-3" onClick={() => onAddQuestion('question2')}></i>
          <i className="fa-solid fa-trash-can" onClick={() => onDeleteQuestion()}></i>
        </div>
      </div>
      </div>
    </>
  );
};

export default Question1;
