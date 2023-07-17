import React, { useState } from "react";

function CategoryFilter({ categories, handleCategoryChange }) {

  function handleClick (event) {
    event.target.className="selected";
    handleCategoryChange(event);
  }
  
  const btnElement = categories.map((category) => {
    return <button onClick={handleClick} key={category} className="">{category}</button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {btnElement}
    </div>
  );
}

export default CategoryFilter;
