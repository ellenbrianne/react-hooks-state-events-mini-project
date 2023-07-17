import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [formData, setFormData] = useState({
    text: "",
    category: "",
  })
  
  const editedCategories = categories.slice(1);

  const categoryDisplay = editedCategories.map(category => {
    return <option key={category}>{category}</option>
  })

  function handleSubmit (event) {
    event.preventDefault();
    onTaskFormSubmit(formData);
    setFormData({ ...formData, text: "", category: "" })
  };

  function handleInput (event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit} >
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          value={formData.text}
          onChange={handleInput} 
        />
      </label>
      <label>
        Category
        <select 
          name="category" 
          onChange={handleInput} 
          value={formData.category}
        >
          {categoryDisplay}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
