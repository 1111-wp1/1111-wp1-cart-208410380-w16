import React from 'react'

const Category_80 = ({ categories }) => {
    // console.log('allCategories', 'allCategories')
  return (
    <div className="btn-container">
        { categories.map((category) => {
            return(
                <button type="button" 
                        className="filter-btn" 
                        key={category}>{category}
                </button>
            )
        })}
   
    </div>
    
  )
}

export default Category_80;
