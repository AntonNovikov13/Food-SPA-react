import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMealById } from '../service';
import { Loader } from '../components/Loader';
import { MealRecipeItem } from '../components/recipe/MealRecipeItem.jsx';
import Context from '../context';

function MealRecipe() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        getMealById(id).then((data) => {
            setRecipe(data.meals[0]);
        });
    }, [id]);

    return (
        <Context.Provider value={{ recipe, id }}>
            {!recipe.idMeal ? <Loader /> : <MealRecipeItem />}
            <button className='btn' onClick={() => navigate(-1)}>
                Go Back
            </button>
        </Context.Provider>
    );
}

export { MealRecipe };
