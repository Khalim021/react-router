import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import {getCategoryByFilter} from '../apiConfig';
import FoodsList from './FoodsList';
import Loader from '../components/Loader';

function Category() {
    const {name}= useParams();
    const [meals, setMeals] = useState([])
    
    useEffect(() => {
        getCategoryByFilter(name).then(data => setMeals(data.meals) )
    }, [name])
    
    return (
        <div>
            {!meals.length ? <Loader /> : <FoodsList meals={meals} />}
        </div>
    );
}

export default Category;