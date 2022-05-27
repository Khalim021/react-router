import React from 'react';
import {Link} from 'react-router-dom'

function FoodsItem(props) {
    const {strMeal, strMealThumb, idMeal} = props
    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={strMealThumb} className="card-img-top" alt={strMeal} />
            <div className="card-body">
                <h5 className="card-title">{strMeal}</h5>
                <Link to={`/meal/${idMeal}`} className="btn btn-primary">Read More</Link>
            </div>
        </div>
    );
}

export default FoodsItem;