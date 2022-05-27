import React from 'react';
import FoodsItem from './FoodsItem';

function FoodsList(props) {
    const {meals} = props
    return (
        <div className='list'>
            {meals.map(meal => (
                <FoodsItem key={meal.idMeal} {...meal} />
            ))}
        </div>
    );
}

export default FoodsList;