import React from "react";

function CategoryFilter({ categories }) {

  function handleClick (event) {
    const btn = event.target;
    btn.className = "selected";
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
