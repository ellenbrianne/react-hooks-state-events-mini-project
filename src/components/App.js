import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {

  const [categoryList, setCategoryList] = useState("All");
  const [taskItems, setTaskItems] = useState([ ...TASKS ]);

  const taskDisplay = taskItems.filter(task => {
    if (categoryList === "All") return true;
    return task.category === categoryList;
  })

  function handleCategoryChange (event) {
    setCategoryList(event.target.textContent);
  }

  function onTaskFormSubmit (formData) {
    setTaskItems([ ...taskItems, formData ]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        handleCategoryChange={handleCategoryChange}
      />
      <NewTaskForm 
        categories={CATEGORIES} 
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={taskDisplay} />
    </div>
  );
}

export default App;
