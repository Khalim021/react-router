import React, { useEffect, useState } from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {getFoodById} from '../apiConfig';
import Loader from '../components/Loader';

function Ingredients(props) {
    const [ingredient, setIngredient] = useState([]);
    const [showIngredient, setShowIngredient] = useState(false);
    const {id} = useParams();
    const prev = useNavigate();

    const handleIngredient = () => {
        setShowIngredient(!showIngredient)
    }

    useEffect(() => {
        getFoodById(id).then(data => setIngredient(data.meals[0]))
    }, [id]);

    return (
        <div>
            {!ingredient.idMeal ? <Loader /> : (
                <div className='ingerdient'>
                    <img src={ingredient.strMealThumb} alt={ingredient.strMeal}/>
                    <h3>{ingredient.strMeal}</h3>
                    <p><b>Category:</b> {ingredient.strCategory}</p>
                    {ingredient.strArea ? <p><b>Location:</b> {ingredient.strArea}</p> : null}
                    <p>{ingredient.strInstructions}</p>
                    <button onClick={handleIngredient} className='btn btn-secondary'>Show Ingredient</button>
                    {showIngredient ? (
                        <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">Ingredient</th>
                            <th scope="col">Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(ingredient).map(key => {
                                if(key.includes('strIngredient') && ingredient[key]) {
                                    return (
                                        <tr>
                                            <td>{ingredient[key]}</td>
                                            <td>{ingredient[`strMeasure${key.slice(13)}`]}</td>
                                        </tr>
                                    )
                                }
                            })}
                        </tbody>
                    </table>  
                    ) : null}
                                          

                    {ingredient.strYoutube ? (
                        <div className='youtube'>
                            <h3>Watch on Youtube</h3>
                            <iframe src={`https://www.youtube.com/embed/${ingredient.strYoutube.slice(-11)}`} allowFullScreen title={id}></iframe>
                        </div>
                    ) : null}
                </div>
            )}
            <button onClick={() => prev('/')} className='btn btn-secondary'>Prev Page</button>
        </div>
    );
}

export default Ingredients;
