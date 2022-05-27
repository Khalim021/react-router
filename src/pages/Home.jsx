import React from 'react';
import {useState, useEffect} from 'react';
import {useLocation, useNavigate } from 'react-router-dom';
import {getByCategory} from '../apiConfig';
import CategoryList from '../components/CategoryList';
import Loader from '../components/Loader';
import Search from '../components/Search';

function Home() {
    const [category, setCategory] = useState([]);
    const [filtered, setFiltered] = useState([]);

    const {pathname, search} = useLocation()
    const navigate = useNavigate()

    const handleSearch = (str) => {
        setFiltered(category.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase())));
        navigate({
            pathname,
            search: `?search=${str}`
        })
    }

    useEffect(() => {
        getByCategory().then(data => {
            setCategory(data.categories);
            setFiltered(search ?
                data.categories.filter(item => 
                item.strCategory.toLowerCase().includes(search.split("=")[1].toLowerCase())    
            ): data.categories);
        })
    }, [search]);

    return (
        <div>
            <Search cd={handleSearch} />
            {!category.length ? <Loader /> : <CategoryList category={filtered} />}
        </div>
    );
}

export default Home;