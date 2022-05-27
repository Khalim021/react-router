import React from 'react';
import {useState, useEffect} from 'react';
import {getByCategory} from '../apiConfig';
import CategoryList from '../components/CategoryList';
import Loader from '../components/Loader'
function Home(props) {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        getByCategory().then(data => {
            setCategory(data.categories)
        })
    }, []);

    return (
        <div>
            {!category.length ? <Loader /> : <CategoryList category={category} />}
        </div>
    );
}

export default Home;