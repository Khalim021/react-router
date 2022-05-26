import React from 'react';
import {useParams, useLocation, useNavigate} from 'react-router-dom';

function Movies(props) {
    const {id} = useParams();
    const navigate = useNavigate();
    const value = useLocation();
    console.log(value)
    // const matchUse = useMatch();
    // console.log(matchUse)
    return (
        <div>
            <h3>Movies page and the id of this movie is {id}</h3>
            <button className='btn btn-secondary' onClick={() => navigate('/about')}>Go Back</button>
        </div>
    );
}

export default Movies;