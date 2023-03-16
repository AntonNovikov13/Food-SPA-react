import { API_URL } from './config';

// all categories list
const getAllCategories = async () => {
    const response = await fetch(API_URL + 'categories.php');
    return await response.json();
};

// filter by category
const getFilteredCategory = async (categoryName) => {
    const response = await fetch(API_URL + 'filter.php?c=' + categoryName);
    return await response.json();
};

// search by id
const getMealById = async (mealId) => {
    const response = await fetch(API_URL + 'lookup.php?i=' + mealId);
    return await response.json();
};

// Search meal by name
// const getMealByName = async (mealName) => {
//     const response = await fetch(API_URL + 'search.php?s=' + mealName);
//     return await response.json();
// };

// List all meals by first letter
// const getMealByFirstLetter = async (mealFirstLetter) => {
//     const response = await fetch(API_URL + 'search.php?f=' + mealFirstLetter);
//     return await response.json();
// };

export {
    getAllCategories,
    getFilteredCategory,
    getMealById,
    // getMealByName,
    // getMealByFirstLetter,
};
