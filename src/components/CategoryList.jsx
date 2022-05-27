import React from 'react';
import CategoryItem from './CategoryItem';

function CategoryList(props) {
    const {category = []} = props;
    return (
        <div className='list'>
            {category.map((el) => (
                <CategoryItem key={el.idCategory} {...el}/>
            ))}
        </div>
    );
}

export default CategoryList;