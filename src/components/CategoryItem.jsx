import React from 'react';
import { Link } from 'react-router-dom';

function CategoryItem(props) {
  const {idCategory, strCategory, strCategoryThumb, strCategoryDescription} = props;
  return (
    <div className="card" style={{width: '18rem'}}>
      <img src={strCategoryThumb} className="card-img-top" alt={strCategory} />
      <div className="card-body">
        <h5 className="card-title">{strCategory}</h5>
        <p className="card-text">{strCategoryDescription.slice(0, 80)}...</p>
        <Link to={`/category/${strCategory}`} className="btn btn-primary">Read More</Link>
      </div>
    </div>
  );
}

export default CategoryItem;

