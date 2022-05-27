import { API_URL } from "./config";

const getFoodById = async (mealId) => {
    const res = await fetch(API_URL + 'lookup.php?i=' + mealId);
    return await res.json();
}

const getByCategory = async () => {
    const res = await fetch(API_URL + 'categories.php');
    return await res.json();
}

const getCategoryByFilter = async (category) => {
    const res = await fetch(API_URL + 'filter.php?c=' + category);
    return await res.json();
}

export {getFoodById, getByCategory, getCategoryByFilter};



